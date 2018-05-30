import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from './project';
import { Feature } from './feature';

@Injectable()
export class ProjectService {
  static READ_URL_PROJECTS:   string = '/api/projects';
  static READ_URL_GROUPS:  string = '/api/groups';
  static READ_URL_LANGUAGES:  string = '/api/languages';
  static READ_URL_FRAMEWORKS: string = '/api/frameworks';
  static READ_URL_DATABASES:  string = '/api/databases';

  constructor(private http: HttpClient) {} 

  getProjects(): Observable<Project[]> {
    const url = ProjectService.READ_URL_PROJECTS;
    return this.http.get<Project[]>(url);
  }

  getGroups(): Observable<Feature[]> {
    const url = ProjectService.READ_URL_GROUPS;
    return this.http.get<Feature[]>(url);
  }

  getLanguages(): Observable<Feature[]> {
    const url = ProjectService.READ_URL_LANGUAGES;
    return this.http.get<Feature[]>(url);
  }

  getFrameworks(): Observable<Feature[]> {
    const url = ProjectService.READ_URL_FRAMEWORKS;
    return this.http.get<Feature[]>(url);
  }

  getDatabases(): Observable<Feature[]> {
    const url = ProjectService.READ_URL_DATABASES;
    return this.http.get<Feature[]>(url);
  }

  getProject(projectId: string): Observable<Project> {
    const url = `${ProjectService.READ_URL_PROJECTS}/${projectId}`;
    return this.http.get<Project>(url);
  }

}
