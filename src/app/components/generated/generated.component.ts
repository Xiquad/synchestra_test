import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-generated',
  templateUrl: './generated.component.html',
  styleUrls: ['./generated.component.less'],
  providers: [StorageService, DatePipe]
})
export class GeneratedComponent implements OnInit {

  personalData: Object;
  constructor(private storage: StorageService) {
    console.log('genereted init');
  }

  ngOnInit() {
    // TODO: read from storage
    console.log(this.storage.read());
    this.personalData = this.storage.read();
  }

}
