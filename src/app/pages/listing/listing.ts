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
  heroImageUrl = 'assets/images/Renegade/Reception.jpg';
  
  fileNames = [
    'attachment.jpg',
    'All Outside.mp4',
    'Front Door Right.mp4',
    'Front Door Left.mp4',
    'Reception.jpg',
    'Studio.mp4',
    'Studio Back.jpg',
    'Studio Front.jpg',
    'Studio Electrical Panels.jpg',
    'Walk In To Studio From Back Door.mp4',
    'Conference Room.mp4',
    'Cubicals.mp4',
    'Cubicals.jpg',
    'Office 1.mp4',
    'Office 2.jpg',
    'Back Door.mp4',
    'Dressing Room.jpg',
    'Kitchen 1.jpg',
    'Kitchen 2.jpg',
    'Storage Room.jpg',
    'Bathroom 1.jpg',
    'Bathroom 2.jpg',

  ];

  mediaGallery: MediaItem[] = this.fileNames.map(name => ({
    type: name.endsWith('.mp4') ? 'video' : 'image',
    url: `/assets/${name.endsWith('.mp4') ? 'videos' : 'images'}/Renegade/${name}`,
    title: name.split('.').slice(0, -1).join(' ') // Remove file extension for title
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