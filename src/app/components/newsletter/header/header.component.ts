import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  geToKnowLinx() {
    // Get to know action here
  }

  helpTheCode() {
    // Help the code action here
  }

  goToProducts() {
    // Go to products action here
  }

  share() {
    // Share action here
  }
}
