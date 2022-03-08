import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  year: string = "2022";
  authorName: string = "Jan Rubach";
  ngOnInit(): void {
  }

}
