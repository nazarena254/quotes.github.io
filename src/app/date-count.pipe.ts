import { Pipe, PipeTransform } from '@angular/core';
// import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  
  transform(value: any): number {
    let today:Date = new Date(); //use and get the current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayWithNoTime - value) //returns value in miliseconds
    const secondsInDay = 86400; //total sec 24 hrs
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;


    if (dateCounter >= 1 && todayWithNoTime > value){
      return dateCounter;
    }
    else{
      return 0;
    }
  }

}
