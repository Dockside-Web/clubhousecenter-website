import {
  Component,
  OnInit,
  OnDestroy,
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

@Component({
  selector: 'component-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideIconsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  private turnstileVerified = false;

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

    (window as any)['onTurnstileVerified'] = () => {
      this.ngZone.run(() => {
        this.turnstileVerified = true;
      });
    };

    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      delete (window as any)['onTurnstileVerified'];
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
    if (!this.isFormValid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    (event.target as HTMLFormElement).submit();
  }
}