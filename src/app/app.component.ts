import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEPI-Final-Project';

  showHeaderAndFooter = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Define an array of routes where header and footer should be hidden
        const routesWithoutHeaderFooter = ['/dashboard', '/home', '/agenda', '/project', '/quiz', '/learning','/concepts', '/streaming'];

        // Check if the current URL matches any of the specified routes
        this.showHeaderAndFooter = !routesWithoutHeaderFooter.some(route =>
          event.urlAfterRedirects.startsWith(route)
        );
      }
    });
  }
}

