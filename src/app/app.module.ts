import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { EditComponent } from './login/edit/edit.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   RouterModule.forRoot(routes),
   LoginModule,
   EditComponent
  ]
})
export class AppModule { }
