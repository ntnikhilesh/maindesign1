import { Injectable } from '@angular/core';

import {Weg} from './../models/weg';
import {WEG} from './../models/mock-weg';

@Injectable()
export class WegService {

  constructor() { }

  getWeg():Promise<Weg[]>
  {
  return Promise.resolve(WEG);
  }

}
