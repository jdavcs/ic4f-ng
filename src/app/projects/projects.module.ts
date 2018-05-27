import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent }      from './projects.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectListComponent }   from './project-list.component';

import { ProjectDataService }     from './project-data.service';
import { ProjectService }         from './project.service';
import { ProjectViewService }     from './project-view.service';

import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [ 
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectListComponent
  ],
  providers: [
    ProjectDataService,
    ProjectService,
    ProjectViewService
  ]
})
export class ProjectsModule {} 
