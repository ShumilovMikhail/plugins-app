export interface Plugin {
  slug: string;
  installed: boolean;
  svg: string;
  description: string;
  script: string;
  version: string;
  outdated: boolean;
}
