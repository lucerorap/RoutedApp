import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  shStudentCollection: Array<object> = [];
  studObj: {studNumber: number, studFirstName: string, studLastName: string, studProgram: string, studYear:number};

  constructor() { }

  addNewStud(shNumber: number, shFirstName: string, shLastName: string, shProg: string, shYear:number){
    this.studObj = {
      studNumber: shNumber,
      studFirstName: shFirstName,
      studLastName: shLastName,
      studProgram: shProg,
      studYear: shYear
    }
    this.shStudentCollection.push(this.studObj);
  }

  getStud(){
    return this.shStudentCollection;
  }

}
