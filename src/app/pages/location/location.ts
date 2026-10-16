import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CtaBandComponent } from '../../components/cta-band/cta-band';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.html',
  imports: [
    RouterModule,
    CtaBandComponent,
  ],
  styleUrls: ['./location.css']
})
export class LocationPage {
}