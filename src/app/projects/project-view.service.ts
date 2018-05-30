import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Project } from './project';

@Injectable()
export class ProjectViewService {
  langColors: Map<string, string>;

  constructor() {
    this.initColors();
  }

  listFrameworks(project: Project): string {
    return project.frameworks.map(item => item.name).join(', ');
  }

  listDatabases(project: Project): string {
    return project.databases.map(item => item.name).join(', ');
  }

  listLanguages(p: Project, selectedLanguageId?: string): string {
    const newList = [];
    let foundHtml: boolean = false;

    for (let lang of p.languages) {
      /* combine HTML and CSS into HTML/CSS. Because why not! */
      let name: string = lang.name;
      if (lang._id === 'html') {
        foundHtml = true;
        name = 'HTML/CSS';
      }
      else if (foundHtml && lang._id === 'css') {
        name = '';
      }

      if (name != '') { /* this ignores 'CSS' set to empty */
        const selected = lang._id == selectedLanguageId ? 'selectedLanguage' : '';
        name = `<span class="${this.langColors.get(lang._id)} ${selected}">${name}</span>`;
        newList.push(name);
      }
    }
    return newList.join(', ');
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

  hasCode(p: Project): boolean {
    return p.github_repo !== '' || p.github_oldcode !== '';
  }

  getTechnologyText(p: Project): string {
    let tech: string = '';
    if (p.frameworks.length > 0) {
      tech = this.listFrameworks(p) + ' / ';
    }
    if (p.databases.length > 0) {
      tech += this.listDatabases(p) + ' / ';
    }
    return tech += this.listLanguages(p);
  }

  initColors() {
    this.langColors = new Map();
    this.langColors.set('bash', 'lang-bash'); 
    this.langColors.set('c', 'lang-c');
    this.langColors.set('c_sharp', 'lang-cs');
    this.langColors.set('html', 'lang-htmlcss');
    this.langColors.set('css', 'lang-htmlcss');
    this.langColors.set('java', 'lang-java');
    this.langColors.set('javascript', 'lang-javascript');
    this.langColors.set('mumps', 'lang-mumps');
    this.langColors.set('php', 'lang-php');
    this.langColors.set('python', 'lang-python');
    this.langColors.set('ruby', 'lang-ruby');
    this.langColors.set('sql', 'lang-sql');
    this.langColors.set('sass', 'lang-sass');
    this.langColors.set('typescript', 'lang-typescript');
    this.langColors.set('vbnet', 'lang-vbnet');
    this.langColors.set('vbscript', 'lang-vbscript');
    this.langColors.set('vimscript', 'lang-vimscript');
    this.langColors.set('yaml', 'lang-yaml');
  }
}
