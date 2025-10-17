import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
})
export class HeroPage {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description= `${this.name()} - ${this.age()}`;
    return description;
  });


  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(30);
  }

  changeAge() {
    this.age.set(45);
}
 
resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
