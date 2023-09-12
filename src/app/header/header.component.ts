import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    // Events
    @Output() fireSelectedLink = new EventEmitter<string>();

    onHeaderLinkClick(linkValue: string) {
        this.fireSelectedLink.emit(linkValue)
    }
}
