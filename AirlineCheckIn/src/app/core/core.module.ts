import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../shared/material.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
