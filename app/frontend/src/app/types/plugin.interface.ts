import { Type } from '@angular/core';

export interface Plugin {
  slug: string;
  componentType: Type<any>;
  defaultData: any;
}
