package com.example.app.data

import javax.inject.Inject

class GameRepository @Inject constructor(private var games: ArrayList<Game>): GameIRepository {
    override fun insertGame(game: Game) {
        game.id = this.getMaxId() + 1
        this.games.add(game)
    }

    override fun deleteGame(game: Game) {
        this.games.remove(game)
    }

    override fun getGames(): List<Game> {
        return this.games
    }

    override fun getGameById(id: Int): Game? {
        return this.games.find { it.id == id }
    }

    private fun getMaxId(): Int {
        return this.games.maxOfOrNull { it.id } ?: -1
    }
}