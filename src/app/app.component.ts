import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>

  </main>
  `,
  styleUrl: './app.component.css',
  imports: [HomeComponent, RouterModule, RouterLink, RouterOutlet],

})
export class AppComponent {
  title = 'homes';
}
