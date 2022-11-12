import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  description: string = "Fill the details to start your 'Store'"
  
  regForm = new FormGroup({
    name: new FormControl(''),
    uname: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }



  submit(){
    debugger;
    let user = this.regForm.value; //obj
    // this.users.push(user);
    // this.reset();
    // localStorage.setItem('usersDB', JSON.stringify(this.users));
  }


}
