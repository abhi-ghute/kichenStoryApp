

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    { image: '../../assets/images/carousel/1.png', text: 'First' },
    { image: '../../assets/images/carousel/1.png', text: 'Second' },
    { image: '../../assets/images/carousel/1.png', text: 'Third' }
  ];
 
}
