import { UserdetailComponent } from './login/userdetail/userdetail.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: ' ', redirectTo: '/home', pathMatch: 'full'},
{path :'home',component :HomeComponent},
{ path:  'login' ,component : LoginComponent},

{path : 'signup', component : SignupComponent },
{path : 'user' , component : UserdetailComponent},
{ path: '**',  component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
