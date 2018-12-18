import {Component, Input, OnInit} from '@angular/core';
import {DateFormatterService} from '../services/date-formatter/date-formatter.service';

@Component({
  selector: 'app-outgoing-message',
  templateUrl: './outgoing-message.component.html',
  styleUrls: ['./outgoing-message.component.scss']
})
export class OutgoingMessageComponent implements OnInit {

  @Input() message: string;

  @Input() timestamp: string;

  printer: object;

  constructor(private dF: DateFormatterService) {
  }

  ngOnInit() {
  }

}
