import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ShoesComponent } from './shoes/shoes.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    ShoesComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    ShoesComponent,
    FilterComponent
  ]
})
export class SharedModule { }
