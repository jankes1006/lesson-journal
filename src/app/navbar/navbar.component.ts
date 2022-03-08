import { Component, OnInit } from '@angular/core';
import { NAVBAR_CONST } from './navbar-constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  CONST_DATA = NAVBAR_CONST;
  headerData: string[] = ["Nowe konto", "Nowa klasa", "Plan zajęć", "Wydarzenia/komunikaty"];
  username: string = "Admin";

  constructor() { }

  ngOnInit(): void {
  }

}
