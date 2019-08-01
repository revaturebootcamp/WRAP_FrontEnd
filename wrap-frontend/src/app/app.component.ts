import { Component } from '@angular/core';
import { SpoonacularService } from './services/spoonacular.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  component() {}
  
  title = 'wrap-frontend';

  ngOnInit () 
  {
    
  }
}
