import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  setItem(key: string, data: object): void {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string): any {
    let data = window.localStorage.getItem(key);
    try {
      data = JSON.parse(data);
    } catch (e) {
    }
    return data;
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}
