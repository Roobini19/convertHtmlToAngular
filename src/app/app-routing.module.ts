import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {
    title : 'Dashboard'
  }},
  {path: 'about', component: AboutComponent, data: {
    title: 'About'
  }},
  {path: 'company', component: CompanyComponent, data: {
    title: 'Company',
  }},
  {path: 'furnitures', component: FurnituresComponent, data: {
    title: 'Furniture',
  }},
  {path: 'contactus', component: ContactusComponent, data: {
    title: 'Contact Us',
  }},
  {path: 'login', component: LoginComponent, data: {
    title: 'Login',
  }},
  {path: 'register', component: RegisterComponent, data: {
    title: 'Register',
  }},
  {path: 'profile', component: UserProfileComponent, data: {
    title: 'Profile',
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
