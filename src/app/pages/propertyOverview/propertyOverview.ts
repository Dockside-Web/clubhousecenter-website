import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LucideIconsModule} from "../../lucide.module";
import { CtaBandComponent } from '../../components/cta-band/cta-band';

@Component({
  selector: 'app-property-overview',
  standalone: true,
  templateUrl: './propertyOverview.html',
  imports: [
    RouterModule,
    LucideIconsModule,
    CtaBandComponent
  ],
  styleUrls: ['./propertyOverview.css']
})
export class PropertyOverviewPage {
  stats = [
    { value: '378,000', label: 'Sq. Ft. Building' },
    { value: '20', label: 'Acre Campus' },
    { value: '719', label: 'On-site Parking Spaces' },
    { value: '24/7', label: 'Secure Access' },
  ];
}
