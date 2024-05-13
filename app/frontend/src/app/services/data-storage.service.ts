import { Injectable } from '@angular/core';

import { DataStorageTypes } from '../types/dataStorageTypes';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  public setItem(key: DataStorageTypes, data: unknown): boolean {
    const dataJSON: string = JSON.stringify(data);
    localStorage.setItem(key, dataJSON);

    return true;
  }

  public getItem(key: DataStorageTypes): unknown {
    const dataJSON = localStorage.getItem(key) as string;

    return JSON.parse(dataJSON);
  }
}
