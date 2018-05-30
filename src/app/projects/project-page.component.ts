import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

import { Project } from './project';
import { ProjectService } from './project.service';
import { ProjectViewService } from './project-view.service';
import { PageTitleService } from '../shared/page-title.service';

@Component({
  templateUrl: './project-page.component.html'
})
export class ProjectPageComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private projectViewService: ProjectViewService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap( (params: ParamMap) => {
        return this.projectService.getProject(params.get('projectId'));
      })
      .subscribe( 
        data => { 
          this.project = data; 
          this.setDocTitle(this.project.name);
        },
        error => { this.router.navigate(['/404']); } //TODO
      );
  }

  setDocTitle(title: string) {
    let docTitle: string = environment.docTitlePrefix + title;
    this.titleService.setTitle(docTitle);
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

  goToProjects() {
    this.router.navigate(['/projects']);
  }
}
