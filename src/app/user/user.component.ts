import {Component, Input, OnInit} from '@angular/core';
import {DateFormatterService} from '../services/date-formatter/date-formatter.service';
import {LocalStorageService} from '../services/local-storage/local-storage.service';
import {User} from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() userId: string;

  @Input() name: string;

  @Input() lastMessage: string;

  @Input() timestamp: number;

  @Input() avatar: string;

  user: User;

  constructor(private dF: DateFormatterService, private ls: LocalStorageService) {
    this.user = this.ls.getItem('userInfo');
  }

  ngOnInit() {
  }
}
