import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
          label: "Construction",
          value: "Masonry"
        },
        {
          label: "Sprinkler System",
          value: "Wet"
        },
        {
          label: "Water & Sewer",
          value: "City"
        },
        {
          label: "Heating ",
          value: "Gas"
        },
        {
          label: "Gas",
          value: "Natural"
        },
        {
          label: "Power Supply",
          value: "Amps: 6000; Volts: 277-480; Phase: 3"
        },
        {
          label: "Zoning",
          value: "MLIM"
        }
    ]


    currentIndex = 0;
  showControls = false;

  images: Image[] = [
    {
      id: 1,
      image: 'assets/images/Parking.jpg',
      alt: 'Outside Warehouse Building with Parking Lot',
      title: 'Parking All Around the Building'
    },
    {
      id: 2,
      image: 'assets/images/WarehouseDoors.jpg',
      alt: 'Aerial View of Property Across from I83 Highway',
      title: 'Warehouse Doors'
    },
    {
      id: 3,
      image: 'assets/images/Flag.jpg',
      alt: 'Outside Office Building with Flag',
      title: 'Outside of Office Space'
    },
    {
      id: 4,
      image: 'assets/images/Sign.jpg',
      alt: 'Outside Office Building showing a sign',
      title: 'Entrance to Parking Lot'
    },
    {
      id: 5,
      image: 'assets/images/Napa.jpg',
      alt: 'Aerial View of Property Across from I83 Highway',
      title: 'Outside of Retail Space'
    },
    {
      id: 6,
      image: 'assets/images/FrontDoor2.jpg',
      alt: 'Aerial View of Property Across from I83 Highway',
      title: 'More Office Space'
    },
    {
      id: 7,
      image: 'assets/images/DroneFar.jpg',
      alt: 'Aerial View of Property Across from I83 Highway',
      title: 'Aerial view of building and its surroundings'
    },
    {
      id: 8,
      image: 'assets/images/Parking2.jpg',
      alt: 'Aerial View of Property Across from I83 Highway',
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