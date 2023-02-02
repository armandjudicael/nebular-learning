import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nebular';

  companies : any[] = [
    {
      "name" : "virtuvizon"
    },
    {
      "name" : "virtusoft"
    },
    {
      "name" : "virtusia"
    },
    {
      "name" : "Tamatech"
    },
    {
      "name" : "DDS"
    }
  ]
}
