import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material';
import { StorageService } from '../../services/storage.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less'],
  providers: [MatTabGroup]
})
export class PersonalComponent implements OnInit {

  personalForm: FormGroup;
  locationForm: FormGroup;
  currentFormIndex = 0;
  constructor(private router: Router, private storage: StorageService,
    private matTabGroup: MatTabGroup, private location: LocationService) {}

  ngOnInit() {
    this.personalForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required)
    });
    this.locationForm = new FormGroup({
      country: new FormControl('', [Validators.required, Validators.minLength(2)]),
      city: new FormControl('', Validators.minLength(2)),
      state: new FormControl(''),
    });
    this.location.getIp().subscribe((data) => {
      const resp = JSON.parse(data['_body']);
      this.location.getCountries().subscribe((countries) => {
        const countr = JSON.parse(countries['_body']);
        this.locationForm.controls['country'].setValue(countr[resp.country]);
      });
      this.location.getPhones().subscribe((phones) => {
        const phns = JSON.parse(phones['_body']);
        this.personalForm.controls['phone'].setValue(phns[resp.country]);
      });
    });
  }

  changeTab(index) {
    this.currentFormIndex = index;
  }

  generateObject(...controls) {
    const all = {};
    for (let i = 0; i < controls.length; i++) {
      for (const key in controls[i]) {
        if (controls[i].hasOwnProperty(key)) {
          all[key] = (controls[i][key].value);
        }
      }
    }
    return all;
  }

  submit() {
    if (this.personalForm.valid && this.locationForm.valid) {
      this.storage.save(this.generateObject(this.personalForm.controls, this.locationForm.controls));
      this.router.navigate(['generated']);
    }else {
      console.log(this.locationForm.controls);
      if (this.locationForm.invalid) {
        this.changeTab(1);
        for (const key in this.locationForm.controls) {
          if (this.locationForm.controls.hasOwnProperty(key)) {
            this.locationForm.controls[key].markAsTouched();
          }
        }
      }
      if (this.personalForm.invalid) {
        this.changeTab(0);
        for (const key in this.personalForm.controls) {
          if (this.personalForm.controls.hasOwnProperty(key)) {
            this.personalForm.controls[key].markAsTouched();
          }
        }
      }
    }
    return false;
  }

}
