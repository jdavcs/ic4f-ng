import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list.component';

const projectRoutes: Routes = [
  { 
    path: '', 
    component: ProjectsComponent,
    children: [
      { 
        path: '',
        component: ProjectListComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule {}

