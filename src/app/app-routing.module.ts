import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuard } from './guard/login.guard';
import { TaskspageComponent } from './taskspage/taskspage.component';





const routes: Routes = [
  {path: '', component: HomepageComponent}, 
  {path: 'logowanie', component: LoginComponent}, 
  {path: 'rejestracja', component: SignupComponent}, 
  {path: 'zadania', component: TaskspageComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
