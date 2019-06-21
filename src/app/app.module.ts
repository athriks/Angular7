import { SignupService } from './signup.service';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { UserdetailComponent } from './login/userdetail/userdetail.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserdetailComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule 
  ],
  
  providers: [LoginService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
