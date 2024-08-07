import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {
  description = 'Eu ofereço uma ampla gama de serviços personalizados para atender todas as suas necessidades de tecnologia e design. Com experiência em desenvolvimento web, design gráfico e otimização de SEO, estou aqui para garantir que seu projeto alcance seu pleno potencial. Desde a criação de sites responsivos até a implementação de soluções inovadoras, estou comprometido em entregar resultados que superem suas expectativas e ajudem você a atingir seus objetivos de forma eficaz.';

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
