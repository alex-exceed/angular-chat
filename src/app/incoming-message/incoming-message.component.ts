import {Component, Input, OnInit} from '@angular/core';
import {DateFormatterService} from '../services/date-formatter/date-formatter.service';

@Component({
  selector: 'app-incoming-message',
  templateUrl: './incoming-message.component.html',
  styleUrls: ['./incoming-message.component.scss']
})
export class IncomingMessageComponent implements OnInit {

  @Input() message: string;

  @Input() timestamp: string;

  printer: object;

  constructor(private dF: DateFormatterService) {
  }

  ngOnInit() {
  }

}
