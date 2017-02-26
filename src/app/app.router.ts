import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppResumeComponent } from './app-resume/app-resume.component';
import { EducationComponent } from './education/education.component';
import { LaughComponent } from './laugh/laugh.component';
import { WorkxpComponent } from './workxp/workxp.component';

export const router: Routes = [
	{ path: '', redirectTo: '/aboutme', pathMatch: 'full'},
	{ path: 'resume', component: AppResumeComponent},
	{ path: 'aboutme', component: EducationComponent},
	{ path: 'laugh', component: LaughComponent},
	{ path: 'work', component: WorkxpComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
