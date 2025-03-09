import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  expanded = false;
  expandedSubnav = false;

  expandNav() {
    console.log("hi");
    this.expanded ? this.expanded = false : this.expanded = true;
  }

  toggleSubnav() {
    this.expandedSubnav
      ? this.expandedSubnav = false
      : this.expandedSubnav = true;
  }

}
