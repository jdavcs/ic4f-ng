import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : false } //true for debug only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
