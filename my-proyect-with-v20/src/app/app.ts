import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationInfo } from "./application-info/application-info";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApplicationInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-proyect-with-v20');
}
