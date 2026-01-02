import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property.model';
import { PropertyService } from '../../../services/property.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {

  property: Property | null = null;
  heroImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop';

  videoVisible = true;

  videoList: string[] = [
    //'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    //'assets/videos/Dji0032123.mp4',
    //'https://www.shutterstock.com/shutterstock/videos/3763398769/preview/stock-footage-aerial-view-of-logistics-warehouse-exterior-with-loading-platforms-truck-bays-at-distribution.webm',
    //'https://www.shutterstock.com/shutterstock/videos/1110917693/preview/stock-footage-modern-startup-centers-composed-of-glass-offices-within-a-contemporary-corporate-environment.webm',
    //'https://www.shutterstock.com/shutterstock/videos/1107867395/preview/stock-footage-aerial-view-of-solar-power-plant-with-blue-photovoltaic-panels-mounted-on-commercial-shopping-store.webm'
  ];
  currentVideoIndex = 0;
  videoA = this.videoList[0];
  videoB = this.videoList[1] || this.videoList[0];
  showVideoA = true;
  private videoInterval: any;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(property => {
      this.property = property;
      const heroImg = property.images.find(img => img.isHero);
      if (heroImg) {
        this.heroImage = heroImg.url;
      }
    });

    // Start video rotation
    this.startVideoRotation();
  }

  ngOnDestroy(): void {
    // Clean up interval when component is destroyed
    if (this.videoInterval) {
      clearInterval(this.videoInterval);
    }
  }

  // private startVideoRotation(): void {
  //   this.videoInterval = setInterval(() => {
  //     this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoList.length;
  //     this.currentVideo = this.videoList[this.currentVideoIndex];
  //   }, 5000); // Switch every 5 seconds
  // }

  private startVideoRotation(): void {
    this.videoInterval = setInterval(() => {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoList.length;

      if (this.showVideoA) {
        this.videoB = this.videoList[this.currentVideoIndex];
      } else {
        this.videoA = this.videoList[this.currentVideoIndex];
      }

      this.showVideoA = !this.showVideoA; // toggle which video shows
    }, 3000); // every 5 seconds
  }
}
