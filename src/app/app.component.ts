import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { HeroComponent } from "./components/Hero/hero";

const SITE_URL = 'https://clubhousecenter.com';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    HeroComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);
  private title = inject(Title);
  private document = inject(DOCUMENT);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateSeoTags(event.urlAfterRedirects);

        //This is for scrolling to top of page when using routerLink to go to another page
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
  }

  // Keeps the meta description, canonical URL, and social preview tags in sync with the current page
  private updateSeoTags(url: string): void {
    let route: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const path = url.split(/[?#]/)[0];
    const canonicalUrl = SITE_URL + (path === '/' ? '/' : path);
    const pageTitle = route.title ?? this.title.getTitle();
    const description = route.data['description'];

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    }

    const canonical = this.document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute('href', canonicalUrl);
  }
}
