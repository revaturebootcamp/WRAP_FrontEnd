import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserService) { }

  ngOnInit() {
  }
  private username = "";
  private password = "";

  logIn() {

    this.us.login(this.username,this.password).subscribe(
      data => {
        if (data) {
          alert("Succesful Log In, replace this alert with appropriate action");  
        } else {
          alert("Unsuccesful login attempt, replace this alert with desired action here")
        }
      }, error => {
        alert("Error has occured while logging in.");
    });
  }

}
