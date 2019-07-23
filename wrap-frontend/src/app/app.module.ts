import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RegisterComponent } from './components/register/register.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
>>>>>>> 0d86230c79a0b3289896a72d826e146a54539b33

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RegisterComponent
=======
    NavbarComponent,
    LoginComponent
>>>>>>> 0d86230c79a0b3289896a72d826e146a54539b33
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
