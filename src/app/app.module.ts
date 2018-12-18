import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {MyMaterialModule} from './material.module';

import {ChatComponent} from './chat/chat.component';
import {UsersComponent} from './users/users.component';
import {MessagesComponent} from './messages/messages.component';
import {UserComponent} from './user/user.component';
import {IncomingMessageComponent} from './incoming-message/incoming-message.component';
import {OutgoingMessageComponent} from './outgoing-message/outgoing-message.component';
import {LoginComponent} from './login/login.component';

import {AutoScrollService} from './services/auto-scroll/auto-scroll.service';
import {DateFormatterService} from './services/date-formatter/date-formatter.service';
import {SocketService} from './services/sockets/socket.service';
import {TransportService} from './services/transport/transport.service';
import {LocalStorageService} from './services/local-storage/local-storage.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UsersComponent,
    MessagesComponent,
    UserComponent,
    OutgoingMessageComponent,
    IncomingMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MyMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ScrollToModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AutoScrollService,
    DateFormatterService,
    SocketService,
    TransportService,
    LocalStorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
