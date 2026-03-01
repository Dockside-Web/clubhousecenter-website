import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LucideIconsModule} from "../../lucide.module";

@Component({
  selector: 'app-property-details',
  standalone: true,
  templateUrl: './propertyDetails.html',
  imports: [
    RouterModule,
    LucideIconsModule
  ],
  styleUrls: ['./propertyDetails.css']
})
export class PropertyDetailsPage {
}