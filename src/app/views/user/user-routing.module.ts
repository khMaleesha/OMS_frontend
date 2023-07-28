import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Login'
  },
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },

    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Login '
      }
    },
    {
      path: 'register-user',
      component: RegisterUserComponent,
      data: {
        title: 'Register User  '
      }
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent,
      data: {
        title: 'Reset password  '
      }
    },
    {
      path: 'manage-user',
      component: ManageUserComponent,
      data: {
        title: 'Manage User '
      }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
