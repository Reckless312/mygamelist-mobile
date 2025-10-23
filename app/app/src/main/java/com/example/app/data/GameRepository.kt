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

    override fun updateGame(id: Int, game: Game) {
        this.games.find { it.id == id }?.let {
            it.title = game.title
            it.description = game.description
            it.bannerUrl = game.bannerUrl
            it.releaseDate = game.releaseDate
            it.price = it.price
        }
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