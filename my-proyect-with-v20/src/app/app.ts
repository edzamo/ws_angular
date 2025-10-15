import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationInfo } from "./application-info/application-info";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApplicationInfo],
  //templateUrl: './app.html',
  template: `<h1>{{ title() }}</h1>
    <h2>Welcome {{ name }}</h2>
    `,
      
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-proyect-with-v20');
  name = 'Ewin';
}
