import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProjectDetailComponent } from './project-detail.component';
import { ProjectListComponent }   from './project-list.component';
import { ProjectViewService }     from './project-view.service';


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [ 
    ProjectDetailComponent,
    ProjectListComponent
  ],
  providers: [
    ProjectViewService
  ]
})
export class ProjectsModule { }

