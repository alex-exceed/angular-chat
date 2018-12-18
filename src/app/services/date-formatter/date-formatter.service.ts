import {Injectable} from '@angular/core';

@Injectable()
export class DateFormatterService {

  private dateFormatter: any;
  private timeFormatter: any;

  constructor() {
    this.dateFormatter = new Intl.DateTimeFormat('en-EN', {month: 'short', day: 'numeric'});
    this.timeFormatter = new Intl.DateTimeFormat('en-EN', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false});
  }

  public formatDate(timestamp: number): string {
    return this.dateFormatter.format(timestamp);
  }

  public formatTime(timestamp: number): string {
    return this.timeFormatter.format(timestamp);
  }
}
