import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlogComponent } from './card-blog.component';
import { RouterLink, RouterModule } from '@angular/router';

const sharedComponents = [
  CardBlogComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class CardBlogModule { }
