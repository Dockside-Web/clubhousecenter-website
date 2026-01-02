import { Component } from '@angular/core';

interface Image {
  id: number;
  image: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
  imports: []
})
export class GalleryComponent {
  currentIndex = 0;
  showControls = false;

  images: Image[] = [
    {
      id: 1,
      image: 'assets/images/Flag.jpg',
      alt: 'Outside Office Building with Flag',
      title: 'Outside of Office Space'
    },
    {
      id: 2,
      image: 'assets/images/Parking.jpg',
      alt: 'Outside Warehouse Building with Parking Lot',
      title: 'Parking All Around the Building'
    },
    {
      id: 3,
      image: 'assets/images/Sign.jpg',
      alt: 'Outside Office Building showing a sign',
      title: 'Entrance to Parking Lot'
    },
    {
      id: 4,
      image: 'assets/images/WarehouseDoors.jpg',
      alt: 'Aerial View of Property Across from I83 Highway',
      title: 'Warehouse Doors'
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
