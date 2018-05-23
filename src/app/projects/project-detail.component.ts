import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { environment } from '../../environments/environment';

import { Project } from './project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.scss' ]
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  @Output() closeRequest = new EventEmitter<string>();

  ngOnInit() { }

  closeDetail() {
    this.closeRequest.emit(this.project._id);
  }

  getTechnologyText(project: Project): string {
    let tech: string = '';
    if (project.frameworks.length > 0) {
      tech = this.listFrameworks(project) + ' / ';
    }
    if (project.databases.length > 0) {
      tech += this.listDatabases(project) + ' / ';
    }
    return tech += this.listLanguages(project);
  }

  listFrameworks(project: Project): string {
    return project.frameworks.map(item => item.name).join(', ');
  }

  listDatabases(project: Project): string {
    return project.databases.map(item => item.name).join(', ');
  }

  listLanguages(p: Project): string {
    return p.languages.map(item => item.name).join(', ');
  }

  hasCode(p: Project): boolean {
    return p.github_repo !== '' || p.github_oldcode !== '';
  }

  getCodeLink(p: Project): string {
    if (p.github_repo !== '') {
      return `<a target="_blank" href="${environment.githubBaseUrl}/${p.github_repo}"><span class="github">GitHub</span> repo</a>`;
    }
    else if (p.github_oldcode !== '') {
      const url = `${environment.githubBaseUrl}/${environment.githubOldcodeRepoSubdir}/${p.github_oldcode}`;
      return `<a target="_blank" href="${url}"><span class="github">GitHub</span> old code repo</a>`;
    }
    return '';
  }

    }
