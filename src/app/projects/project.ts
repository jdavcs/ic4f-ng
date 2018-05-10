import { Tool } from './tool';

export interface Project {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly group: string;
  readonly project_name: string;
  readonly project_count: number;
  readonly order: number;
  readonly year_start: number;
  readonly year_end: number;
  readonly github_repo: string;
  readonly github_oldcode: boolean;
  readonly languages: Tool[];
  readonly frameworks: Tool[];
  readonly databases: Tool[];
}
