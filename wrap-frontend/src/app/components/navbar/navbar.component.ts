import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentSession } from 'src/app/data/CurrentSession';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cs: CurrentSession, private us: UserService) { 
    this.cs.isUserLoggedIn.subscribe( value => {
      this.loggedIn = value;
  });
  }

  ngOnInit() {
  }
  loggedIn = false;

  logout(){
    this.cs.isUserLoggedIn.next(false);
    this.cs.user = null;
    this.cs.currentRecipes = [];
    this.cs.favoriteRecipes = [];
    this.cs.historyRecipes = [];
    this.us.logout().subscribe(
      data => {
        console.log(data);
        }  
      , error => {
        console.log("Failed to logout :(");
    });
  }


}
