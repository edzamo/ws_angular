import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-application-info',
  imports: [],
  templateUrl: './application-info.html',
  styleUrl: './application-info.css'
})
export class ApplicationInfo {
  name = 'Ewin';
  secondName = 'Zhang';
  counter = 5;
  counterSignal= signal(20);

constructor() {
   /*setInterval(() => {
     this.counterSignal.update((current) => current + 1);
     console.log(this.counterSignal());
     console.log("TickTack!..")
   }, 2000);*/
  }

  //the event in agular should be in the format of (event)="function()"
  increaseByCounter(value: number, type: string): void {
    if (type === 'increase') {
      this.counter += value;
      this.counterSignal.update((current) => current + value);
    } else if (type === 'decrease') {
      this.counter -= value;
      this.counterSignal.update((current) => current - value);
    } else {
      this.counter = value;
      this.counterSignal.set(0);
    }
  }
}
