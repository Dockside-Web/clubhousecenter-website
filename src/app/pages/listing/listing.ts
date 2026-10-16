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
  // File name -> display title, in gallery order
  media: [string, string][] = [
    ['FloorPlanAll.jpg', 'Full Floor Plan'],
    ['AllOutside.mp4', 'Exterior Walkaround'],
    ['FrontDoorRight.mp4', 'Front Entrance (Right)'],
    ['FrontDoorLeft.mp4', 'Front Entrance (Left)'],
    ['Reception.jpg', 'Reception'],
    ['ConferenceRoom.mp4', 'Conference Room'],
    ['Cubicals.mp4', 'Cubicle Area'],
    ['Cubicals.jpg', 'Cubicle Area'],
    ['Office1.mp4', 'Private Office'],
    ['Office2.jpg', 'Private Office'],
    ['BackDoor.mp4', 'Back Entrance'],
    ['Kitchen1.jpg', 'Kitchen'],
    ['Kitchen2.jpg', 'Kitchen'],
    ['StorageRoom.jpg', 'Storage Room'],
    ['BathroomOffice.jpg', 'Office Restroom'],
    ['FloorPlanStudio.png', 'Studio Floor Plan'],
    ['Studio.mp4', 'Production Studio'],
    ['StudioBack.jpg', 'Studio (Back)'],
    ['StudioFront.jpg', 'Studio (Front)'],
    ['DressingRoom.jpg', 'Dressing Room'],
    ['BathroomStudio.jpg', 'Studio Restroom'],
    ['StudioElectricalPanels.jpg', 'Studio Electrical Panels'],
    ['IntoStudioFromBackDoor.mp4', 'Studio Entrance from Back Door'],
  ];

  mediaGallery: MediaItem[] = this.media.map(([name, title]) => ({
    type: name.endsWith('.mp4') ? 'video' : 'image',
    url: `/assets/${name.endsWith('.mp4') ? 'videos' : 'images'}/Renegade/${name}`,
    title
  }));


  specifications: Specification[] = [
    { label: 'Size', value: '13,500 – 24,300 SF' },
    { label: 'Term', value: '5–10 Years' },
    { label: 'Rental Rate', value: '$15.50 / SF / Year' },
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

  private lastFocused: HTMLElement | null = null;

  openLightbox(item: MediaItem): void {
    this.lastFocused = document.activeElement as HTMLElement;
    this.currentIndex = this.mediaGallery.indexOf(item);
    this.selectedMedia = item;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
    // Move keyboard focus into the lightbox once it renders
    setTimeout(() => (document.querySelector('.lightbox-close') as HTMLElement)?.focus(), 0);
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.selectedMedia = null;
    document.body.style.overflow = '';
    this.lastFocused?.focus();
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