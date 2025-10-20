import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, // Add RouterLink to the imports array example in html  
    RouterLinkActive],  // Add RouterLinkActive to the imports array example in html
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
