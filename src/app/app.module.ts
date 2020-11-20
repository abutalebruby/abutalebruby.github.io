import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { GraphicDesComponent } from './graphic-des/graphic-des.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkExpComponent,
    SoftwareDevComponent,
    GraphicDesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
