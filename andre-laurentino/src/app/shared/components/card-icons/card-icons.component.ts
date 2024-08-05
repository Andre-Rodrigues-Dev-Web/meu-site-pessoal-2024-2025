import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-icons',
  templateUrl: './card-icons.component.html',
  styleUrls: ['./card-icons.component.scss']
})
export class CardIconsComponent implements OnInit {
  cards: Array<{ imageSrc: string, title: string, text: string }> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.http.get<{ imageSrc: string, title: string, text: string }[]>('assets/data/cards.json')
      .subscribe(data => {
        this.cards = data;
      });
  }
}
