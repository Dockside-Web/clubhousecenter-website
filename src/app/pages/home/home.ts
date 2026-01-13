import { HeroComponent } from "./hero/hero";
import { LocationComponent } from "./location/location";
import { PropertyDetailsComponent } from "./property-details/property-details";
import { GalleryComponent } from "./gallery/gallery";
import { ContactComponent } from "./contact/contact";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterModule,
        HeroComponent,
        LocationComponent,
        PropertyDetailsComponent,
        GalleryComponent,
        ContactComponent
    ],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent {
    
}