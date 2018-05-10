import { Injectable } from '@angular/core';

import { Project } from './project';
import { Tool } from './tool';

@Injectable()
export class ProjectDataService {
  private projectData: Project[];
  private languageData: Tool[];
  private frameworkData: Tool[];
  private databaseData: Tool[];

  isDataLoaded() {
    return this.projectData && this.languageData && this.frameworkData && this.databaseData;
  }

  get projects(): Project[] {
    return this.projectData;
  }

  set projects(data: Project[]) {
    this.projectData = data;
  }

  get languages(): Tool[] {
    return this.languageData;
  }

  set languages(data: Tool[]) {
    this.languageData = data;
  }

  get frameworks(): Tool[] {
    return this.frameworkData;
  }

  set frameworks(data: Tool[]) {
    this.frameworkData = data;
  }

  get databases(): Tool[] {
    return this.databaseData;
  }

  set databases(data: Tool[]) {
    this.databaseData = data;
  }
}
