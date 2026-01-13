import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { LucideIconsModule } from './lucide.module';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    LucideIconsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  //This is for scrolling to top of page when using routerLink to go to another page
  private platformId = inject(PLATFORM_ID);
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
  }
}
