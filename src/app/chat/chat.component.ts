import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../services/local-storage/local-storage.service';
import {Router} from '@angular/router';
import {SocketService} from '../services/sockets/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  formatter: object;

  constructor(private ls: LocalStorageService, private router: Router) {
  }

  ngOnInit() {
    // ToDo no hardcoded strings
    const user = this.ls.getItem('userInfo');
    if (!user) {
      this.router.navigateByUrl('/login');
    }
  }
}
