import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RootComponent} from './app.component'; // root component
import {CourseComponent} from './Course.component';
@NgModule({
  imports:      [ BrowserModule ] , // Browser module which is used to run the application on browser so import this
  declarations : [RootComponent , CourseComponent], //Components 
  bootstrap : [RootComponent] // Only root component defined here to run angular 2 application
})
export class AppModule {
    
 }


// after complete this code so module will export and import in main.ts file 
// main.ts file which is used to run the application on browser 
