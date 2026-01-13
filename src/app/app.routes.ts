import { Routes } from '@angular/router';
import { ListingComponent } from './pages/listing/listing';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listing', component: ListingComponent },
    // Catch-all: redirect any unknown paths to home
    { path: '**', redirectTo: '' }
];
