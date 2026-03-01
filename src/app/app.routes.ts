import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ListingPage } from './pages/listing/listing';
import { LocationPage } from './pages/location/location';
import { ContactPage } from './pages/contact/contact';
import { PropertyDetailsPage } from './pages/propertyDetails/propertyDetails';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'listing', component: ListingPage },
    { path: 'contact', component: ContactPage },
    { path: 'propertyDetails', component: PropertyDetailsPage },
    { path: 'location', component: LocationPage },
    // Catch-all: redirect any unknown paths to home
    { path: '**', redirectTo: '' }
];
