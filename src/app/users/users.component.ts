import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {TransportService} from '../services/transport/transport.service';
import {LocalStorageService} from '../services/local-storage/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private transport: TransportService, private ls: LocalStorageService, private router: Router) {
  }

  leaveChat(): void {
    const user = this.ls.getItem('userInfo');
    this.transport.send('post', '/chat/leave', {
      userId: user.userId
    }).subscribe(data => {
      this.router.navigateByUrl('/login');
      this.ls.removeItem('userInfo');
    });
  }

  ngOnInit() {
    this.transport.send('get', '/chat/users')
      .subscribe(data => {
        this.users = data;
      });
  }
}
