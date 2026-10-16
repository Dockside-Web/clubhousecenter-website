import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface HeroState {
  isHome: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})

export class HeroComponent {
  private router = inject(Router);

  loopnetUrl = 'https://www.loopnet.com/Listing/300-Clubhouse-Rd-Hunt-Valley-MD/28323828/';

  facts = [
    { value: '378,000', label: 'Sq. ft. building' },
    { value: '20', label: 'Acre campus' },
    { value: '719', label: 'Parking spaces' },
    { value: '1 min', label: 'Walk to Light Rail' },
  ];

  // Home gets the full hero; inner pages get a banner with their own title (from route data)
  state = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.readState())
    ),
    { initialValue: this.readState() }
  );

  private readState(): HeroState {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const path = this.router.url.split(/[?#]/)[0];
    return {
      isHome: path === '/',
      eyebrow: route.data['heroEyebrow'],
      title: route.data['heroTitle'],
      subtitle: route.data['heroSubtitle'],
    };
  }
}
