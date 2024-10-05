import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, FormsModule, CommonModule, NgIf, SignUpRoutingModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
