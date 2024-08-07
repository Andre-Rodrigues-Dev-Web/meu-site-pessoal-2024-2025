import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuModule } from './components/menu/menu.module';
import { CardIconsComponent } from './components/card-icons/card-icons.component';
import { CardBlogModule } from './components/card-blog/card-blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

const sharedComponents = [
  BannerComponent,
  FooterComponent,
  CardIconsComponent
]

const sharedModules = [
  MenuModule,
  CardBlogModule,
  BrowserAnimationsModule,
  MatIconModule,
]

@NgModule({
  declarations: [
    ...sharedComponents,
    CardIconsComponent
  ],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedComponents,
    ...sharedModules
  ]
})
export class SharedModule { }
