import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  title: string = "Nowy użytkownik";
  baseData: string = "Dane podstawowe";
  contactData: string = "Dane kontaktowe";
  
  ngOnInit(): void {
  }

}
