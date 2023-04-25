import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  public calcResult: any;
  public autoCalcResult: any;

  constructor() {
  }

  public setCalc(data: any) {
    this.calcResult = data;
  }

  public getCalc(): any {
    return this.calcResult;
  }
}
