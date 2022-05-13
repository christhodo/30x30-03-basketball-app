import { Component, OnInit } from '@angular/core';
import { Game } from '../common/models/games';
import { GamesService } from '../common/services/games.service';

const emptyGame: Game = {
  id: '',
  date: '',
  opponent: '',
  score: '',
  winner: '',
  mvp: '',
};

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games = [];
  selectedGame = emptyGame;
  originalDate = '';

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.fetchGames();
  }

  selectGame(game) {
    this.selectedGame = { ...game };
    this.originalDate = game.date;
  }

  fetchGames() {
    this.gamesService.all().subscribe((result: any) => (this.games = result));
  }

  saveGame(game) {
    if (game.id) {
      this.updateGame(game);
    } else {
      this.createGame(game);
    }
  }

  createGame(game) {
    this.gamesService.create(game).subscribe((result) => this.fetchGames());
  }

  updateGame(game) {
    this.gamesService.update(game).subscribe((result) => this.fetchGames());
  }

  deleteGame(gameId) {
    console.log('Delete Game', gameId);
  }

  reset() {
    this.selectGame({ ...emptyGame });
  }
}
