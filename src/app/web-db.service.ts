import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class WebDbService implements InMemoryDbService{
  // tslint:disable-next-line:variable-name
  private _database: any;
  constructor() { }

  createDb() {
    this._database = {};
    this._database['user'] = [];
    this._database['dash'] = [];
    return this._database;
  }
}
