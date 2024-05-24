import { Type } from '@angular/core';

export interface LoadedPlugin {
  slug: string;
  componentType: Type<any>;
  defaultData: any;
}
