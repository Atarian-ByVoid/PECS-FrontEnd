import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cards: Card[] = [];
  flippedCards: Card[] = [];

  ngOnInit() {
    this.initializeGame();
  }

  initializeGame() {
    const cardValues = [
      'assets/games/memory-game/Cachorro.png',
      'assets/games/memory-game/Sapo.png',
      'assets/games/memory-game/Fox.png',
      'assets/games/memory-game/Leao.png',
      'assets/games/memory-game/Tigre.png',
      'assets/games/memory-game/Guaxinin.png',
      'assets/games/memory-game/Cavalo.png',
      'assets/games/memory-game/Coala.png',
    ];
    let cardId = 1;

    for (const value of cardValues) {
      this.cards.push(new Card(cardId++, value));
      this.cards.push(new Card(cardId++, value));
    }

    this.shuffleCards();
  }

  shuffleCards() {
    let currentIndex = this.cards.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex],
      ];
    }
  }

  flipCard(card: Card) {
    if (!card.isFlipped && this.flippedCards.length < 2) {
      card.isFlipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        this.checkForMatch();
      }
    }
  }

  checkForMatch() {
    if (this.flippedCards[0].value === this.flippedCards[1].value) {
      this.flippedCards[0].isMatched = true;
      this.flippedCards[1].isMatched = true;
      this.flippedCards = [];

      if (this.cards.every((card) => card.isMatched)) {
        console.log('Você venceu!');
      }
    } else {
      setTimeout(() => {
        this.flippedCards[0].isFlipped = false;
        this.flippedCards[1].isFlipped = false;
        this.flippedCards = [];
      }, 1000);
    }
  }
}
