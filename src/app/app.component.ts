import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showthis = 'Recipe';
  title = 'shopping';
  constructor() { }

  navClicked(navData: { navItem: string }) {
    this.showthis = navData.navItem;
  }
}
