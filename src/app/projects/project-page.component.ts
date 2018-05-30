import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
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
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap( (params: ParamMap) => {
        return this.projectService.getProject(params.get('projectId'));
      })
      .subscribe( 
        data => { 
          this.project = data; 
          this.pageTitleService.setTitle(this.project.name);
        },
        error => { this.router.navigate(['/404']); } //TODO can't be right
      );

  }

  getCodeLink(p: Project): string {
    return this.projectViewService.getCodeLink(p);
  }

  hasCode(p: Project): boolean {
    return p.github_repo !== '' || p.github_oldcode !== '';
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


}

