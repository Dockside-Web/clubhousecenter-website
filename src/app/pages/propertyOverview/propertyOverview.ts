import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LucideIconsModule} from "../../lucide.module";

@Component({
  selector: 'app-property-overview',
  standalone: true,
  templateUrl: './propertyOverview.html',
  imports: [
    RouterModule,
    LucideIconsModule
  ],
  styleUrls: ['./propertyOverview.css']
})
export class PropertyOverviewPage {
}