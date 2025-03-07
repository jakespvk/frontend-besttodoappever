import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-besttodoappever';
  expanded = false;

  expandNav() {
    console.log("hi");
    this.expanded ? this.expanded = false : this.expanded = true;
  }

  expandMobileNav() {
    document.getElementById("mobileNav")?.showPopover();
  }

}
