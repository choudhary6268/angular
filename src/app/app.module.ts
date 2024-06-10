import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routes } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { EditComponent } from './login/edit/edit.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
   LoginModule,
   EditComponent
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }



