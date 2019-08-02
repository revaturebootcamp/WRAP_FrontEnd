import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from 'src/app/components/login/login.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(private userService:UserService, private router:Router) 
  {
    
  }
user = 
  {
    username: "",
    password: ""
  }
  ngOnInit() {
  }

  registerUser(usernameIn: string, password1In: string, password2In: string)
  {
    this.user.username = usernameIn;
    let password1 = password1In;
    let password2 = password2In;

    if(password1 == password2)
    {
      this.user.password = password1;
      this.userService.addUser(this.user.username, this.user.password).subscribe
      (
        data =>
        {
          if(data)
          {
            alert("Success! Redirecting you to the login page...");
            this.router.navigate(['login']);
          }
          else
          {
            alert('User account creation failed!\rPlease try another username.');
            window.location.reload();
          }
        },
        error =>
        {
          console.log('Failed To Register User!\r' + error);
        }
    );
    }
    else
    {
      window.location.reload();
      alert('Passwords do not match, please try again.');
    }
  }
}
