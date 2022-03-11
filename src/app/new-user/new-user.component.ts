import { Component, OnInit } from '@angular/core';
import { newUserConstant } from './new-user-constant';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  newUserConstant = newUserConstant;
  
  onSubmit(form: any){
    let data = form.value;
  }

  ngOnInit(): void {
  }

}
