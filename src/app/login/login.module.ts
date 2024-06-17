import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    {
        path: '',
        title: 'Login',
        loadComponent: async () => (await import('./login/login.component')).LoginComponent,
    },
    {
      path: 'login',
      title: 'Login',
      loadComponent: async () => (await import('./login/login.component')).LoginComponent,
  },
    {
        path: 'signup',
        title: 'SignUp',
        loadComponent: async () => (await import('./signup/signup.component')).SignupComponent,
    },
    {
      path: 'forgot-password',
      title: 'Forgot-Password',
      loadComponent: async () => (await import('./forgot-password/forgot-password.component')).ForgotPasswordComponent,
  },
  {
    path: 'edit',
    title: 'Edit',
    loadComponent: async () => (await import('./edit/edit.component')).EditComponent,
},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
