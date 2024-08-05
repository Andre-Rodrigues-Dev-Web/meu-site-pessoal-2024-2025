import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

const sharedComponents = [
  CardBlogComponent,
  BannerComponent,
  MenuComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
