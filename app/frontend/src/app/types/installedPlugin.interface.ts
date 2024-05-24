import { Type } from '@angular/core';

export interface InstalledPlugin {
  slug: string;
  componentType: Type<any>;
  defaultData: any;
}
