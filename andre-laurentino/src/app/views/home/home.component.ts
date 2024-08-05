import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Home - André Laurentino Rodrigues');
    this.meta.addTags([
      { name: 'description', content: 'Seja bem-vindo ao meu site, aqui você poderá conhecer meus projetos, artigos e experiências na área de desenvolvimento de software.' },
      { name: 'keywords', content: 'André Laurentino Rodrigues, engenheiro de software, desenvolvimento web, SEO, PHP, React, Angular' },
      { name: 'author', content: 'André Laurentino Rodrigues' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'charset', content: 'UTF-8' },
      { name: 'theme-color', content: '#317EFB' },
      { name: 'canonical', content: 'https://andrelaurentino.com.br/home' },
      // Dublin Core meta tags
      { name: 'DC.title', content: 'Home - André Laurentino Rodrigues' },
      { name: 'DC.creator', content: 'André Laurentino Rodrigues' },
      { name: 'DC.description', content: 'Seja bem-vindo ao meu site, aqui você poderá conhecer meus projetos, artigos e experiências na área de desenvolvimento de software.' },
      { name: 'DC.language', content: 'pt-BR' },
      // Open Graph meta tags
      { property: 'og:title', content: 'Home - André Laurentino Rodrigues' },
      { property: 'og:description', content: 'Seja bem-vindo ao meu site, aqui você poderá conhecer meus projetos, artigos e experiências na área de desenvolvimento de software.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://andrelaurentino.com.br/home' },
      { property: 'og:image', content: 'https://andrelaurentino.com.br/assets/home-image.jpg' },
      { property: 'og:locale', content: 'pt_BR' },
      // Twitter Card meta tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Home - André Laurentino Rodrigues' },
      { name: 'twitter:description', content: 'Seja bem-vindo ao meu site, aqui você poderá conhecer meus projetos, artigos e experiências na área de desenvolvimento de software.' },
      { name: 'twitter:image', content: 'https://andrelaurentino.com.br/assets/home-image.jpg' },
    ]);
  }
}
