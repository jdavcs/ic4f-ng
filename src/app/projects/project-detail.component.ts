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

  getTechnologyText(p: Project): string {
    return this.projectViewService.getTechnologyText(p);
  }

  hasCode(p: Project): boolean {
    return this.projectViewService.hasCode(p);
  }

  getCodeLink(p: Project): string {
    return this.projectViewService.getCodeLink(p);
  }
}
