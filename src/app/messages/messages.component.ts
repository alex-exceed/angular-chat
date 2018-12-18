import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AutoScrollService} from '../services/auto-scroll/auto-scroll.service';
import {Message} from '../model/message';
import {SocketService} from '../services/sockets/socket.service';
import {LocalStorageService} from '../services/local-storage/local-storage.service';
import {User} from '../model/user';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, AfterViewInit {

  messages: Message[] = [];

  ioConnection: any;

  user: User;

  newMessage: string = '';

  static sortByTimestamp(messageA: object, messageB: object) {
    return messageA['timestamp'] - messageB['timestamp'];
  }

  constructor(
    private autoScroll: AutoScrollService,
    private socket: SocketService,
    private ls: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.messages = [...this.messages].sort(MessagesComponent.sortByTimestamp);

    this.user = this.ls.getItem('userInfo');

    this.socket.initSocket();

    this.ioConnection = this.socket.onMessage()
      .subscribe((message: Message): void => {
        this.messages.push(message);
        this.scrollChat();
      });
  }

  ngAfterViewInit() {
    this.scrollChat();
  }

  scrollChat(): void {
    this.autoScroll.triggerScrollTo('autoScrollAnchor');
  }

  sendMessage(): void {

    this.newMessage = this.newMessage.trim();

    if (!this.newMessage.length) {
      return;
    }

    const message = {
      timestamp: new Date().getTime(),
      message: this.newMessage,
      userId: this.user.userId
    };

    this.socket.send(message);

    this.newMessage = '';
  }
}
