import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  NgZone,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LucideIconsModule } from '../../lucide.module';

declare global {
  interface Window {
    turnstile: {
      render: (selector: string | HTMLElement, options: object) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

let turnstileScriptLoaded = false;

@Component({
  selector: 'component-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideIconsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  contactForm: FormGroup;
  private turnstileVerified = false;
  private widgetId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTurnstile();
    }
  }

  private initTurnstile() {
    const checkAndRender = () => {
      if (window.turnstile) {
        this.widgetId = window.turnstile.render('#turnstile-container', {
          sitekey: '0x4AAAAAADCoO1rXWiAtGRJ2',
          callback: (token: string) => {
            this.ngZone.run(() => {
              this.turnstileVerified = true;
            });
          },
          theme: 'light',
        });
      } else {
        setTimeout(checkAndRender, 100);
      }
    };
    checkAndRender();
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && window.turnstile && this.widgetId) {
      window.turnstile.remove(this.widgetId);
    }
  }

  get isFormValid() {
    return this.contactForm.valid && this.turnstileVerified;
  }

  getFieldError(fieldName: string): string | null {
    const control = this.contactForm.get(fieldName);
    if (!control || !control.invalid || !control.touched) return null;

    if (control.hasError('required')) return 'This field is required.';
    if (control.hasError('email')) return 'Please enter a valid email address.';
    return 'Invalid value.';
  }

  onSubmit(event: Event) {
    if (!this.isFormValid) return;
  }
}