import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectPageComponent } from './project-page.component';

const projectRoutes: Routes = [
  { 
    path: '', 
    component: ProjectsComponent,
    children: [
      { 
        path: '',
        component: ProjectListComponent
      },
      { 
        path: ':projectId',
        component: ProjectPageComponent
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

