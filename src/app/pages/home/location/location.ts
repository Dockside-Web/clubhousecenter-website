import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property.model';
import { PropertyService } from '../../../services/property.service';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule
  ],
  templateUrl: './location.html',
  styleUrls: ['./location.css']
})
export class LocationComponent implements OnInit {
  property: Property | null = null;

  transportation = [
    {
      transportation: 'MTA Light Rail',
      location: 'Gilroy Road Station',
      time: '1 min walk',
      distance: '0.0 mi'
    },
    {
      transportation: 'Commuter Rail',
      location: 'Penn Station - Baltimore',
      time: '23 min drive',
      distance: '16.5 mi'
    },
    {
      transportation: 'Airport',
      location: 'BWI International Airport',
      time: '31 min drive',
      distance: '29.6 mi'
    },
    {
      transportation: 'Freight Port',
      location: 'Port of Baltimore',
      time: '35 min drive',
      distance: '20.0 mi'
    },
    {
      transportation: 'Railroad',
      location: 'NS Independent Bulk Transfer Terminal',
      time: '26 min drive',
      distance: '15.6 mi'
    },
  ];


  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(
      (data: Property) => {
        this.property = data;
      }
    );
  }
}