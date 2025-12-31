import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property.model';
import { PropertyService } from '../../../services/property.service';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule,
  ],
  templateUrl: './property-details.html',
  styleUrls: ['./property-details.css']
})
export class PropertyDetailsComponent implements OnInit {

  specifications = [
    {
      label: "Building Size",
      value: "378,000 Sq. Ft."
    },
    {
      label: "Lot Size",
      value: "20 AC"
    },
    {
      label: "Year Built",
      value: "1969"
    },
    {
      label: "Year Last Renovated",
      value: "2004"
    },
    {
      label: "Construction",
      value: "Masonry"
    },
    {
      label: "Sprinkler System",
      value: "Wet"
    },
    {
      label: "Water",
      value: "City"
    },
    {
      label: "Sewer",
      value: "City"
    },
    {
      label: "Heating",
      value: "Gas"
    },
    {
      label: "Gas",
      value: "Natural"
    },
    {
      label: "Power Supply",
      value: "Amps: 6000; Volts: 277-48; Phase: 3"
    },
    {
      label: "Zoning",
      value: "MLIM (Manufacturing Light Industrial Major)"
    }
  ]

  property: Property | null = null;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(property => {
      this.property = property;
    });
  }

  toggleExpand(unit: any): void {
    unit.expanded = !unit.expanded;
  }
}
