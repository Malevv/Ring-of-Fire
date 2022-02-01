import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game)
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      this.game.playerCard.push(this.currentCard);
      console.log('New card: ' + this.currentCard);
      console.log('Game is', this.game);

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 3000);
    }
  }

}
