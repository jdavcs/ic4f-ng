import { Injectable } from '@angular/core';

import { Project } from './project';
import { Feature } from './feature';

@Injectable()
export class ProjectDataService {
  private projectData: Project[];
  private groupData: Feature[];
  private languageData: Feature[];
  private frameworkData: Feature[];
  private databaseData: Feature[];

  isDataLoaded() {
    return this.projectData && this.groupData && this.languageData && this.frameworkData && this.databaseData;
  }

  get projects(): Project[] {
    return this.projectData;
  }

  set projects(data: Project[]) {
    this.projectData = data;
  }

  get groups(): Feature[] {
    return this.groupData;
  }

  set groups(data: Feature[]) {
    this.groupData = data;
  }
  get languages(): Feature[] {
    return this.languageData;
  }

  set languages(data: Feature[]) {
    this.languageData = data;
  }

  get frameworks(): Feature[] {
    return this.frameworkData;
  }

  set frameworks(data: Feature[]) {
    this.frameworkData = data;
  }

  get databases(): Feature[] {
    return this.databaseData;
  }

  set databases(data: Feature[]) {
    this.databaseData = data;
  }
}
