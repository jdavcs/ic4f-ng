import { Feature } from './feature';

export interface Project {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly group: Feature[];
  readonly project_name: string;
  readonly project_count: number;
  readonly order: number;
  readonly year_start: number;
  readonly year_end: number;
  readonly github_repo: string;
  readonly github_oldcode: string;
  readonly has_content: boolean;
  readonly languages: Feature[];
  readonly frameworks: Feature[];
  readonly databases: Feature[];
  readonly content: string;
}
