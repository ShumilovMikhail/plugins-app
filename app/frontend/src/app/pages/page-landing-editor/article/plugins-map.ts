import { Component } from '@angular/core';

import { ParagraphComponent } from './paragraph/paragraph.component';
import { PluginsMap } from './types/pluginsMap.interface';

export const pluginsMap: PluginsMap = {
  paragraph: ParagraphComponent as Component,
};
