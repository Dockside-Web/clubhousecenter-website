import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ListingPage } from './pages/listing/listing';
import { LocationPage } from './pages/location/location';
import { ContactPage } from './pages/contact/contact';
import { PropertyOverviewPage } from './pages/propertyOverview/propertyOverview';
import { PrivacyPolicyPage } from './pages/legal/privacy-policy/privacy-policy';
import { TermsOfServicePage } from './pages/legal/terms-of-service/terms-of-service';

// `title` sets the browser tab title; `data.description` is used for the meta description
// and social previews (see AppComponent). `heroEyebrow`/`heroTitle`/`heroSubtitle` fill the banner on inner pages.
export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Clubhouse Center | Office, Warehouse & Retail Space in Hunt Valley, MD',
        data: { description: 'Premium office and industrial space for lease in Hunt Valley, MD. Flexible floor plans, modern amenities, and convenient access. Schedule a tour today.' }
    },
    {
        path: 'listing',
        component: ListingPage,
        title: 'Suite J – Office & Studio Space for Lease | Clubhouse Center',
        data: { heroEyebrow: 'Now Leasing', heroTitle: 'Suite J', heroSubtitle: '13,500–24,300 SF of fully built-out office and studio space', description: 'Tour Suite J at Clubhouse Center: 13,500–24,300 SF of fully built-out office space with 26 private offices, conference rooms, and a production studio in Hunt Valley, MD.' }
    },
    {
        path: 'contact',
        component: ContactPage,
        title: 'Contact Us | Clubhouse Center',
        data: { heroEyebrow: 'Get in Touch', heroTitle: 'Contact Us', heroSubtitle: 'Ask about available space or schedule a tour with our leasing team', description: 'Contact the Clubhouse Center leasing team to ask about available office, warehouse, and retail space or to schedule a tour in Hunt Valley, MD.' }
    },
    {
        path: 'property-overview',
        component: PropertyOverviewPage,
        title: 'Property Overview | Clubhouse Center',
        data: { heroEyebrow: 'About the Property', heroTitle: 'Property Overview', heroSubtitle: '378,000 SF of office, warehouse, retail, and flex space on 20 acres', description: 'Clubhouse Center is a 378,000 SF office and industrial building in Hunt Valley, MD with 24/7 secure access, on-site management, and flexible floor plans.' }
    },
    // Old URL - kept so existing links and bookmarks still work
    { path: 'propertyOverview', redirectTo: 'property-overview' },
    {
        path: 'location',
        component: LocationPage,
        title: 'Location | Clubhouse Center – Hunt Valley, MD',
        data: { heroEyebrow: 'Hunt Valley, Maryland', heroTitle: 'Location', heroSubtitle: 'Minutes from I-83, I-695, the Light Rail, and BWI', description: 'Clubhouse Center at 300 Clubhouse Road, Hunt Valley, MD offers easy access to I-83, I-695, the light rail, BWI Airport, and the Port of Baltimore.' }
    },
    {
        path: 'legal/privacy-policy',
        component: PrivacyPolicyPage,
        title: 'Privacy Policy | Clubhouse Center',
        data: { heroEyebrow: 'Legal', heroTitle: 'Privacy Policy', description: 'How Clubhouse Center collects, uses, and protects information submitted through this website.' }
    },
    {
        path: 'legal/terms-of-service',
        component: TermsOfServicePage,
        title: 'Terms of Service | Clubhouse Center',
        data: { heroEyebrow: 'Legal', heroTitle: 'Terms of Service', description: 'Terms governing the use of the Clubhouse Center website.' }
    },
    // Catch-all: redirect any unknown paths to home
    { path: '**', redirectTo: '' }
];
