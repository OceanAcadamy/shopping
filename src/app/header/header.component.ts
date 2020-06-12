import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() nav = new EventEmitter<{ navItem: string }>();
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
  navClicked(navItemLocal: string) {
    this.nav.emit({ navItem: navItemLocal });
  }

}
