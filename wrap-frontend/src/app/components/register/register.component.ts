import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerUser(usernameIn: string, password1In: string, password2In: string)
  {
    let password1 = password1In;
    let password2 = password2In;

    if(password1 == password2)
    {
      alert('Passwords match');
    }
    else
    {
      alert('Passwords do not match');
    }
    alert('You entered ' + usernameIn + ' as your username!');
  }

}
