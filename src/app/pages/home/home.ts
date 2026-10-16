import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CtaBandComponent } from '../../components/cta-band/cta-band';
import { LucideIconsModule } from '../../lucide.module';

interface Image {
    id: number;
    image: string;
    alt: string;
    title: string;
  }

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterModule,
        CtaBandComponent,
        LucideIconsModule,
    ],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomePage {
    
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

    // Spec sheet, grouped for the 'The Building' section
    specGroups = [
        {
          title: 'Building',
          icon: 'building',
          items: [
            { label: 'Building Size', value: '378,000 sq. ft.' },
            { label: 'Lot Size', value: '20 acres' },
            { label: 'Year Built', value: '1969' },
            { label: 'Construction', value: 'Masonry' },
            { label: 'Zoning', value: 'MLIM' },
          ]
        },
        {
          title: 'Utilities & Systems',
          icon: 'zap',
          items: [
            { label: 'Power', value: '6,000 A · 277–480 V · 3-phase' },
            { label: 'Heating', value: 'Gas' },
            { label: 'Gas', value: 'Natural' },
            { label: 'Water & Sewer', value: 'City' },
            { label: 'Sprinkler System', value: 'Wet' },
          ]
        }
    ];


    currentIndex = 0;
  showControls = false;

  images: Image[] = [
    {
      id: 1,
      image: 'assets/images/Parking.jpg',
      alt: 'Parking lot surrounding the Clubhouse Center building',
      title: 'Parking All Around the Building'
    },
    {
      id: 2,
      image: 'assets/images/WarehouseDoors.jpg',
      alt: 'Warehouse loading doors at Clubhouse Center',
      title: 'Warehouse Doors'
    },
    {
      id: 3,
      image: 'assets/images/Flag.jpg',
      alt: 'Office entrance at Clubhouse Center with American flag',
      title: 'Outside of Office Space'
    },
    {
      id: 4,
      image: 'assets/images/Sign.jpg',
      alt: 'Clubhouse Center sign at the parking lot entrance',
      title: 'Entrance to Parking Lot'
    },
    {
      id: 5,
      image: 'assets/images/Napa.jpg',
      alt: 'Retail storefront space at Clubhouse Center',
      title: 'Outside of Retail Space'
    },
    {
      id: 6,
      image: 'assets/images/FrontDoor2.jpg',
      alt: 'Entrance to additional office space',
      title: 'More Office Space'
    },
    {
      id: 7,
      image: 'assets/images/DroneFar.jpg',
      alt: 'Aerial view of Clubhouse Center and the surrounding area',
      title: 'Aerial view of building and its surroundings'
    },
    {
      id: 8,
      image: 'assets/images/Parking2.jpg',
      alt: 'Parking lot outside the office space',
      title: 'Office Space Parking'
    }
  ];

  prevSlide(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  nextSlide(): void {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}