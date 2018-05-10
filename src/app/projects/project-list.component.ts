import { Component, OnInit } from '@angular/core';

import { PageScrollService } from '../shared/page-scroll.service';

import { Project } from './project';
import { Tool } from './tool';
import { ProjectDataService } from './project-data.service';
import { ProjectService } from './project.service';
import { PageTitleService } from '../shared/page-title.service';

@Component({
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  languages: Tool[];
  frameworks: Tool[];
  databases: Tool[];

  selectedLanguage: string;
  selectedFramework: string;
  selectedDatabase: string;
  displayedProjects: string[];

  constructor(
    private projectDataService: ProjectDataService,
    private projectService: ProjectService,
    private pageTitleService: PageTitleService,
    private pageScrollService: PageScrollService
  ) {}

  ngOnInit() {
    this.resetFilters();
    this.resetDisplayedProjects();
    this.pageTitleService.setTitle('Selected Projects');

    /* If cache is empty: retrieve data from db; store in cache; unsubscribe;
     * else: get data from cache
     */
    if (!this.projectDataService.isDataLoaded()) {
      console.log('calling db!'); //TODO remove this

      let projSubscription = this.projectService.getProjects().subscribe(data => {
        this.projects = data;
        this.projectDataService.projects = data;
        projSubscription.unsubscribe();
      });

      let langSubscription = this.projectService.getLanguages().subscribe(data => {
        this.languages = data;
        this.projectDataService.languages = data;
        langSubscription.unsubscribe();
      });

      let framSubscription = this.projectService.getFrameworks().subscribe(data => {
        this.frameworks = data;
        this.projectDataService.frameworks = data;
        framSubscription.unsubscribe();
      });

      let dbSubscription = this.projectService.getDatabases().subscribe(data => {
        this.databases = data;
        this.projectDataService.databases = data;
        dbSubscription.unsubscribe();
      });

    }
    else {
      console.log('calling cache'); //TODO remove this
      this.projects = this.projectDataService.projects;
      this.languages = this.projectDataService.languages;
      this.frameworks = this.projectDataService.frameworks;
      this.databases = this.projectDataService.databases;
    }
  }

  resetFilters() {
    this.selectedLanguage = '';
    this.selectedFramework = '';
    this.selectedDatabase = '';
  }

  resetDisplayedProjects() {
    this.displayedProjects = [];
  }

  filterByLanguage(id: string) {
    this.resetFilters();
    this.selectedLanguage = id;
    this.filterBy(id, this.projectLanguages);
  }

  filterByFramework(id: string) {
    this.resetFilters();
    this.selectedFramework = id;
    this.filterBy(id, this.projectFrameworks);
  }

  filterByDatabase(id: string) {
    this.resetFilters();
    this.selectedDatabase = id;
    this.filterBy(id, this.projectDatabases);
  }

  filterBy(id: string, projectTools) {
    this.resetDisplayedProjects();
    if (id == "") {
      this.projects = this.projectDataService.projects;
    }
    else {
      /* Filter project array: create array of ids, then filter it to include only those */
      this.projects = this.projectDataService.projects.filter(project => 
        projectTools(project).map(item => item._id).indexOf(id) > -1
      );
    }
  }

  projectLanguages(project: Project): Tool[] {
    return project.languages;
  }

  projectFrameworks(project: Project): Tool[] {
    return project.frameworks;
  }

  projectDatabases(project: Project): Tool[] {
    return project.databases;
  }





  //TODO it would be very cool if I could also reorder the languages!
  //or make it bold.

  filterByLang(langId: string) {
    //create array of ids, then filter it to include only those matching id
    this.projects = this.projectDataService.projects.filter(project => 
      project.languages
      .map(l => l._id) 
      .indexOf(langId) > -1
    );
  }



  listLanguages(project: Project): string {

    const newList = [];
    for (let lang of project.languages) {

      //      let foundHtml: boolean = false;
      //      if (lang._id == 'html') {
      //        foundHtml = true;
      //        lang.name = 'HTML/CSS';
      //      }
      //      if (lang._id == 'css') {
      //        lang.name = '';
      //      }
      //
      if (lang.name != '') {
        let n = '<span class="' + this.getLangColor(lang.name) + ' ' + this.getLangActiveClass(lang._id) + '">' + lang.name + '</span>';
        newList.push(n);
      }
    }
    return newList.join(', ');
  }


  getLangActiveClass(id) {
    if (id == this.selectedLanguage) {
      return 'activeLang';
    }
    return  '';
  }

  getLangColor(lang) {
    if (lang == 'Bash') { return 'lang-bash'; } 
    if (lang == 'C') { return 'lang-c'; } 
    if (lang == 'C#') { return 'lang-cs'; } 
    if (lang == 'HTML/CSS') { return 'lang-htmlcss'; } 
    if (lang == 'Java') { return 'lang-java'; } 
    if (lang == 'JavaScript') { return 'lang6'; } 
    if (lang == 'MUMPS') { return 'lang-mumps'; } 
    if (lang == 'PHP') { return 'lang-php'; } 
    if (lang == 'Python') { return 'lang-python'; } 
    if (lang == 'Ruby') { return 'lang-ruby'; } 
    if (lang == 'SQL') { return 'lang-sql'; } 
    if (lang == 'Sass') { return 'lang-sass'; } 
    if (lang == 'TypeScript') { return 'lang-typescript'; } 
    if (lang == 'VB.Net') { return 'lang14'; } 
    if (lang == 'VBScript') { return 'lang15'; } 
    if (lang == 'Vimscript') { return 'lang-vimscript'; } 
    if (lang == 'YAML') { return 'lang-yaml'; } 
  }










  listFrameworks(project: Project): string {
    return project.frameworks.map(item => item.name).join(', ');
  }

  listDatabases(project: Project): string {
    return project.databases.map(item => item.name).join(', ');
  }

  getCodeLink(project: Project): string {
    if (project.github_repo !== '') {
      return '<a href="">Project on <span class="github">GitHub</span></a>';
    }
    else if (project.github_oldcode) {
      return '<a href="">sample code</a>';
    }
    else {
      return '';
    }
  }

  showDetail(id: string) {
    this.displayedProjects.push(id);
  }
}
