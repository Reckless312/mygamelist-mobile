package com.example.app.data

import javax.inject.Inject

class GameRepository @Inject constructor(private var games: ArrayList<Game>): GameIRepository {
    override fun insertGame(game: Game) {
        this.games.add(game)
    }

    override fun deleteGame(game: Game) {
        this.games.remove(game)
    }

    override fun getGames(): List<Game> {
        return this.games
    }
}