import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersModule} from './users/users.module'
// const routes: Routes = [
//   {path: 'home' , component: HomeComponent},
//   {path: '' , redirectTo: '/home', pathMatch: 'full'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent, 
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes)
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
