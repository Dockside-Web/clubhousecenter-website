import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../home/contact/contact';

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
export class ListingComponent implements OnInit {
  heroVideoUrl = 'https://example.com/studio-hero.mp4';
  heroImageUrl = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920';
  
  mediaGallery: MediaItem[] = [
    {
      type: 'image',
      url: '/assets/images/Renegade/attachment.jpg',
      title: 'Floor Plan'
    },
    {
      type: 'video',
      url: '/assets/videos/Renegade/RenegadeOutside.mp4',
      title: 'Outside View'
    },
    {
      type: 'video',
      url: '/assets/videos/Renegade/FrontDoor.mp4',
      title: 'Front Door Right'
    },
    {
      type: 'video',
      url: '/assets/videos/Renegade/FrontDoor2.mp4',
      title: 'Front Door Left'
    },
    {
      type: 'image',
      url: '/assets/images/Renegade/IMG_1076.jpg',
      title: 'Reception Area'
    },
    {
      type: 'video',
      url: '/assets/videos/Renegade/BackDoor2.mp4',
      title: 'Back Doors'
    },
    {
      type: 'video',
      url: '/assets/videos/Renegade/Studio.mp4',
      title: 'Studio'
    },
    {
      type: 'image',
      url: '/assets/images/Renegade/IMG_1064.jpg',
      title: 'Studio'
    },
    {
      type: 'video',
      url: '/assets/videos/Renegade/ConferenceRoom.mp4',
      title: 'Conference Room'
    },
    {
      type: 'video',
      url: '/assets/videos/Renegade/Cubicals.mp4',
      title: 'Cubicals'
    },
    {
      type: 'image',
      url: '/assets/images/Renegade/IMG_1078.jpg',
      title: 'Floor Plan'
    },
    {
      type: 'image',
      url: '/assets/images/Renegade/IMG_1068.jpg',
      title: 'Office Space'
    },
    {
      type: 'image',
      url: '/assets/images/Renegade/IMG_1080.jpg',
      title: 'Kitchen'
    },
  
  ];

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