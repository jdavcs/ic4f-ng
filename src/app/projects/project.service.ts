import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from './project';
import { Tool } from './tool';

@Injectable()
export class ProjectService {
  static READ_URL_PROJECTS:   string = '/api/projects';
  static READ_URL_LANGUAGES:  string = '/api/languages';
  static READ_URL_FRAMEWORKS: string = '/api/frameworks';
  static READ_URL_DATABASES:  string = '/api/databases';

  constructor(private http: HttpClient) {} 

  getProjects(): Observable<Project[]> {
    const url = ProjectService.READ_URL_PROJECTS;
    return this.http.get<Project[]>(url);
  }

  getLanguages(): Observable<Tool[]> {
    const url = ProjectService.READ_URL_LANGUAGES;
    return this.http.get<Tool[]>(url);
  }

  getFrameworks(): Observable<Tool[]> {
    const url = ProjectService.READ_URL_FRAMEWORKS;
    return this.http.get<Tool[]>(url);
  }

  getDatabases(): Observable<Tool[]> {
    const url = ProjectService.READ_URL_DATABASES;
    return this.http.get<Tool[]>(url);
  }
}
