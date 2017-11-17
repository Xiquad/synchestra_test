import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule,
          MatTabsModule, MatCardModule,
          MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { StorageService } from './services/storage.service';
import { LocationService } from './services/location.service';

import { AppComponent } from './app.component';
import { PersonalComponent } from './components/personal/personal.component';
import { GeneratedComponent } from './components/generated/generated.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    GeneratedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [StorageService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
