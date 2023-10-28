export class Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;

  constructor(id: number, value: string) {
    this.id = id;
    this.value = value;
    this.isFlipped = false;
    this.isMatched = false;
  }
}
