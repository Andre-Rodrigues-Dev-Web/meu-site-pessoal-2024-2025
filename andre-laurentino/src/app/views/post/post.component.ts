import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any;
  posts: any[] = [];
  formattedContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      this.post = data.find((p: any) => p.slug === slug);
      if (this.post) {
        this.formattedContent = this.highlightCode(this.formatContent(this.post.content));
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
      } else if (/^\d+\. /.test(line)) {
        if (!insideList) {
          formattedContent += '<ol>\n';
          insideList = true;
        }
        listItems.push(`<li>${line.substring(line.indexOf(' ') + 1)}</li>`);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        const contentWithoutStars = line.slice(2, -2);
        formattedContent += `<h5>${contentWithoutStars}</h5>\n`;
      } else {
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

  highlightCode(content: string): string {
    return content.replace(/<code>(.*?)<\/code>/gs, (match, p1) => {
      const lines = p1.split('\n').map((line: string) => {
        return `<span class="line"><span class="syntax">${this.highlightSyntax(line)}</span></span>`;
      }).join('\n');
      return `<div class="code-editor"><pre>${lines}</pre></div>`;
    });
  }

  highlightSyntax(line: string): string {
    line = line.replace(/(const|let|var|function|return)/g, '<span class="keyword">$1</span>');
    line = line.replace(/('.*?'|".*?"|`.*?`)/g, '<span class="string">$1</span>');
    line = line.replace(/(\/\/.*?$)/gm, '<span class="comment">$1</span>');
    line = line.replace(/(\b\d+\b)/g, '<span class="number">$1</span>');
    return line;
  }
}
