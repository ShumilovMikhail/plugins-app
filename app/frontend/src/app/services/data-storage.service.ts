import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { DataStorageTypes } from '../types/dataStorageTypes';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private readonly platformId = inject(PLATFORM_ID);

  public setItem(key: DataStorageTypes, data: unknown): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    const dataJSON: string = JSON.stringify(data);
    localStorage.setItem(key, dataJSON);

    return true;
  }

  public getItem(key: DataStorageTypes): unknown | false {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    const dataJSON = localStorage.getItem(key) as string;

    if (!dataJSON) {
      return false;
    }

    return JSON.parse(dataJSON);
  }
}
