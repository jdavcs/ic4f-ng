import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { Project } from './project';
import { Feature } from './feature';
import { ProjectDataService } from './project-data.service';
import { ProjectService } from './project.service';
import { ProjectViewService } from './project-view.service';
import { PageTitleService } from '../shared/page-title.service';

@Component({
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  groups: Feature[];
  languages: Feature[];
  frameworks: Feature[];
  databases: Feature[];

  selectedGroup: string;
  selectedLanguage: string;
  selectedFramework: string;
  selectedDatabase: string;
  displayedProjects: Set<string>;

  constructor(
    private projectDataService: ProjectDataService,
    private projectService: ProjectService,
    private projectViewService: ProjectViewService,
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.resetFilters();
    this.displayedProjects = new Set();
    this.pageTitleService.setTitle('Selected Projects');
    //this.initColors();

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

      let groupSubscription = this.projectService.getGroups().subscribe(data => {
        this.groups = data;
        this.projectDataService.groups = data;
        groupSubscription.unsubscribe();
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
      this.groups = this.projectDataService.groups;
      this.frameworks = this.projectDataService.frameworks;
      this.databases = this.projectDataService.databases;
    }
  }

  reset() {
    this.resetFilters();
    this.displayedProjects.clear();
    this.projects = this.projectDataService.projects;
  }

  resetFilters() {
    this.selectedGroup = '';
    this.selectedLanguage = '';
    this.selectedFramework = '';
    this.selectedDatabase = '';
  }

  filterByGroup(id: string) {
    this.resetFilters();
    this.selectedGroup = id;
    this.filterBy(id, this.projectGroup);
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

  filterBy(id: string, projectFeatures) {
    this.displayedProjects.clear();
    if (id == "") {
      this.projects = this.projectDataService.projects;
    }
    else {
      /* Filter project array: create array of ids, then filter it to include only those */
      this.projects = this.projectDataService.projects.filter(project => 
        projectFeatures(project).map(item => item._id).indexOf(id) > -1
      );
    }
  }

  projectGroup(project: Project): Feature[] {
    return project.group;
  }

  projectLanguages(project: Project): Feature[] {
    return project.languages;
  }

  projectFrameworks(project: Project): Feature[] {
    return project.frameworks;
  }

  projectDatabases(project: Project): Feature[] {
    return project.databases;
  }

  getName(p: Project) {
    let name: string = p.name;
    if (p.project_count > 1) {
      name += `<span class="project-count">(~${p.project_count} projects)</span>`;
    }
    if (p._id === 'prsa') {
      name += `<span class="project-count">(multiple projects)</span>`;
    }
    return name;
  }

  listLanguages(p: Project): string {
    return this.projectViewService.listLanguages(p, this.selectedLanguage);
  }

  listFrameworks(project: Project): string {
    return this.projectViewService.listFrameworks(project);
  }

  listDatabases(project: Project): string {
    return this.projectViewService.listDatabases(project);
  }

  getCodeLink(p: Project): string {
    return this.projectViewService.getCodeLink(p);
  }

  showDetail(id: string) {
    this.displayedProjects.add(id);
  }

  hideDetail(id: string) {
    this.displayedProjects.delete(id);
  }
}
