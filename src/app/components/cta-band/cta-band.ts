import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// "Schedule a tour" call-to-action shown near the bottom of content pages
@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cta-band.html',
  styleUrls: ['./cta-band.css']
})
export class CtaBandComponent {
}
