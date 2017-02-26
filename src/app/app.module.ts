import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AppResumeComponent } from './app-resume/app-resume.component';
import { EducationComponent } from './education/education.component';
import { WorkxpComponent } from './workxp/workxp.component';
import { LaughComponent } from './laugh/laugh.component';

@NgModule({
  declarations: [
    AppComponent,
    AppResumeComponent,
    EducationComponent,
    WorkxpComponent,
    LaughComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
