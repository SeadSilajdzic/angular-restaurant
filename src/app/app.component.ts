import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedPage: string = 'recipe';

    onSelectedLink(selectedLink: string) {
        this.selectedPage = selectedLink;
    }
}
