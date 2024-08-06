import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ErroPageComponent } from './views/erro-page/erro-page.component';
import { SobreMimComponent } from './views/sobre-mim/sobre-mim.component';
import { PostComponent } from './views/post/post.component';
import { BlogComponent } from './views/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-mim', component:  SobreMimComponent},
  { path: 'blog', component:  BlogComponent},
  { path: 'post/:slug', component: PostComponent },
  { path: '**', component: ErroPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
