import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .example-spacer{margin-left:20px }
  .container{margin:20px}
  .spacer{flex:1 1 auto}
 `
  ]
})
export class HomeComponent implements OnInit {
  events: string[] = [];

  opened: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
