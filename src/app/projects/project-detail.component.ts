import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { environment } from '../../environments/environment';

import { Project } from './project';
import { ProjectViewService } from './project-view.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  @Output() closeRequest = new EventEmitter<string>();

  constructor(
    private projectViewService: ProjectViewService
  ) {}

  ngOnInit() {}

  closeDetail() {
    this.closeRequest.emit(this.project._id);
  }

  getTechnologyText(project: Project): string {
    let tech: string = '';
    if (project.frameworks.length > 0) {
      tech = this.projectViewService.listFrameworks(project) + ' / ';
    }
    if (project.databases.length > 0) {
      tech += this.projectViewService.listDatabases(project) + ' / ';
    }
    return tech += this.projectViewService.listLanguages(project);
  }

  hasCode(p: Project): boolean {
    return p.github_repo !== '' || p.github_oldcode !== '';
  }

  getCodeLink(p: Project): string {
    return this.projectViewService.getCodeLink(p);
  }
}
