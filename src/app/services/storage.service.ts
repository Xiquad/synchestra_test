import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  slotName: string;

  constructor() {
    this.slotName = 'a4test';
  }

  save(data) {
    console.log(JSON.stringify(data));
    localStorage.setItem(this.slotName, JSON.stringify(data));
  }

  read() {
    return JSON.parse(localStorage.getItem(this.slotName));
  }

}
