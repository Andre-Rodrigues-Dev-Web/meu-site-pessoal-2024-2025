import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post: any;
  formattedContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.postService.getPosts().subscribe(data => {
      this.post = data.find((p: any) => p.slug === slug);
      if (this.post) {
        this.formattedContent = this.formatContent(this.post.content);
      }
    });
  }

  formatContent(content: string): string {
    const headingMap: { [key: string]: string } = {
      '### ': '<h3>',
      '#### ': '<h4>',
      '## ': '<h2>',
      '# ': '<h1>',
      '**': '<h5>'
    };

    let insideList = false;
    let listItems: string[] = [];
    let formattedContent = '';

    const lines = content.split('\n\n');

    for (const line of lines) {
      const prefix = Object.keys(headingMap).find(p => line.startsWith(p));
      if (prefix) {
        if (insideList) {
          formattedContent += '</ol>\n';
          insideList = false;
        }
        const tag = headingMap[prefix];
        const tagName = tag.slice(1, -1);
        formattedContent += `${tag}${line.substring(prefix.length)}</${tagName}>\n`;
      }
      else if (/^\d+\. /.test(line)) {
        if (!insideList) {
          formattedContent += '<ol>\n';
          insideList = true;
        }
        listItems.push(`<li>${line.substring(line.indexOf(' ') + 1)}</li>`);
      }
      else if (line.startsWith('**') && line.endsWith('**')) {
        const contentWithoutStars = line.slice(2, -2);
        formattedContent += `<h5>${contentWithoutStars}</h5>\n`;
      }
      else {
        if (insideList) {
          formattedContent += listItems.join('\n') + '\n</ol>\n';
          listItems = [];
          insideList = false;
        }
        formattedContent += `<p>${line}</p>\n`;
      }
    }

    if (insideList) {
      formattedContent += listItems.join('\n') + '\n</ol>\n';
    }

    return formattedContent.trim();
  }
}
