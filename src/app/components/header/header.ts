import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideIconsModule } from '../../lucide.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  websiteLogo: string = 'assets/images/logo.svg';

  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
