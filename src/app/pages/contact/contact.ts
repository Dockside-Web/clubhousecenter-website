import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../components/ContactForm/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  imports: [
    RouterModule,
    ContactComponent
  ],
  styleUrls: ['./contact.css']
})

export class ContactPage {
}