import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewAppointmentComponent,
    AppointmentListComponent,
    DashboardComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
