import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
