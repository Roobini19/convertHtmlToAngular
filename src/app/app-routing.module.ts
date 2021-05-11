import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { UserListCardComponent } from './user-list-card/user-list-card.component';
import { UserListComponent } from './user-list/user-list.component';
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
  }},
  {path: 'edit-profile/:id', component: EditProfileComponent, data: {
    title: 'Edit Profile',
  }},
  {path: 'user-list', component: UserListComponent, data:{
    title: 'User List',
  }},
  {path: 'user-list-card', component: UserListCardComponent, data:{
    title: 'User List Card View',
  }},
  {path: "**", component: PagenotfoundComponent, data: {
    title: 'Oops!Page Not Found'
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
