import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlogComponent } from './card-blog.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    RouterModule,
    FormsModule,
  ],
  exports: [
    ...sharedComponents
  ]
})
export class CardBlogModule { }
