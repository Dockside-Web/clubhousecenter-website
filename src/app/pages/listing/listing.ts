import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../components/ContactForm/contact';

interface MediaItem {
  type: 'video' | 'image';
  url: string;
  thumbnail?: string;
  title?: string;
}

interface Specification {
  label: string;
  value: string;
  icon?: string;
}

@Component({
  selector: 'app-listing',
  standalone: true,
  templateUrl: './listing.html',
  imports: [
    RouterModule,
    ContactComponent
  ],
  styleUrls: ['./listing.css']
})
export class ListingPage implements OnInit {
  heroImageUrl = 'assets/images/Renegade/Reception.jpg';
  
  fileNames = [
    'FloorPlanAll.jpg',
    'AllOutside.mp4',
    'FrontDoorRight.mp4',
    'FrontDoorLeft.mp4',
    'Reception.jpg',
    'ConferenceRoom.mp4',
    'Cubicals.mp4',
    'Cubicals.jpg',
    'Office1.mp4',
    'Office2.jpg',
    'BackDoor.mp4',
    'Kitchen1.jpg',
    'Kitchen2.jpg',
    'StorageRoom.jpg',
    'BathroomOffice.jpg',
    'FloorPlanStudio.png',
    'Studio.mp4',
    'StudioBack.jpg',
    'StudioFront.jpg',
    'DressingRoom.jpg',
    'BathroomStudio.jpg',
    'StudioElectricalPanels.jpg',
    'IntoStudioFromBackDoor.mp4',
  ];

  mediaGallery: MediaItem[] = this.fileNames.map(name => ({
    type: name.endsWith('.mp4') ? 'video' : 'image',
    url: `/assets/${name.endsWith('.mp4') ? 'videos' : 'images'}/Renegade/${name}`,
    title: name.split('.').slice(0, -1).join(' ').replace(/([a-z])([A-Z])|([a-zA-Z])(\d)/g, '$1$3 $2$4') // Remove file extension for title
  }));


  specifications: Specification[] = [
    { label: 'Size', value: '14,000 – 21,000 SF' },
    { label: 'Term', value: '5–10 Years' },
    { label: 'Rental Rate', value: '$9.00 / SF / Year' },
    { label: 'Space Use', value: 'Office' },
    { label: 'Condition', value: 'Full Build-Out' },
  ];

  highlights = [
    'Fully Built-Out as Standard Office',
    'Fits 35 – 168 People',
    '26 Private Offices',
    '2 Conference Rooms',
    'Production studio with sound stage',
    '1 drive-in bay for studio use'
  ];

  selectedMedia: MediaItem | null = null;
  lightboxOpen = false;
  currentIndex = 0;

  ngOnInit(): void {}

  openLightbox(item: MediaItem): void {
    this.currentIndex = this.mediaGallery.indexOf(item);
    this.selectedMedia = item;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.selectedMedia = null;
    document.body.style.overflow = 'auto';
  }

  nextMedia(): void {
    this.currentIndex = (this.currentIndex + 1) % this.mediaGallery.length;
    this.selectedMedia = this.mediaGallery[this.currentIndex];
    this.resetVideo();
  }

  previousMedia(): void {
    this.currentIndex = (this.currentIndex - 1 + this.mediaGallery.length) % this.mediaGallery.length;
    this.selectedMedia = this.mediaGallery[this.currentIndex];
    this.resetVideo();
  }

  private resetVideo(): void {
    // Small delay to ensure video element is updated
    setTimeout(() => {
      const videoElement = document.querySelector('.lightbox-video') as HTMLVideoElement;
      if (videoElement) {
        videoElement.load();
        videoElement.play().catch(err => console.log('Video play error:', err));
      }
    }, 50);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    
    if (event.key === 'ArrowRight') {
      this.nextMedia();
    } else if (event.key === 'ArrowLeft') {
      this.previousMedia();
    } else if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }
}