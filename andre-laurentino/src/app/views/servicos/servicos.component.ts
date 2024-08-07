import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {
  description = 'Ofereço uma ampla gama de serviços para atender todas as suas necessidades de tecnologia e design. Nossa equipe de especialistas está pronta para ajudá-lo a alcançar seus objetivos.';

  services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criação de websites e aplicações web utilizando as tecnologias mais modernas, como Angular, React, Vue.js, e Node.js. Garantimos a entrega de projetos responsivos, rápidos e seguros.',
      icon: 'code'
    },
    {
      title: 'Design Gráfico',
      description: 'Criação de logotipos, banners, e outros materiais gráficos que destacam a identidade visual da sua marca. Trabalhamos com ferramentas como Adobe Photoshop, Illustrator e InDesign.',
      icon: 'brush'
    },
    {
      title: 'SEO e Marketing Digital',
      description: 'Otimização para motores de busca, criação de campanhas de marketing digital, gerenciamento de redes sociais e análise de métricas para aumentar sua visibilidade online.',
      icon: 'trending_up'
    },
    {
      title: 'Consultoria de TI',
      description: 'Consultoria especializada para otimização de processos, implementação de soluções tecnológicas, e suporte estratégico para a transformação digital do seu negócio.',
      icon: 'support_agent'
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Criação de aplicativos móveis nativos e híbridos para Android e iOS, utilizando tecnologias como Flutter, React Native e Swift, proporcionando experiências móveis de alta qualidade.',
      icon: 'smartphone'
    },
    {
      title: 'Manutenção e Suporte Técnico',
      description: 'Serviços de manutenção e suporte técnico contínuos para garantir o funcionamento eficiente e seguro dos seus sistemas e estrutura cloud.',
      icon: 'build'
    }
  ];
}
