import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TransportService} from '../services/transport/transport.service';
import {LocalStorageService} from '../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = '';

  constructor(
    private router: Router,
    private transport: TransportService,
    private ls: LocalStorageService
  ) {
  }

  ngOnInit() {
  }

  joinChat(): void {

    this.userName = this.userName.trim();

    if (!this.userName.length) {
      return;
    }

    this.transport.send('post', '/chat/join', {
      name: this.userName
    })
      .subscribe((data) => {
        this.userName = '';
        this.ls.setItem('userInfo', data);
        this.router.navigateByUrl('/');
      });
  }
}
