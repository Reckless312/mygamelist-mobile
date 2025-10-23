package com.example.app.data

interface GameIRepository {
    fun insertGame(game: Game)

    fun deleteGame(game: Game)

    fun getGames(): List<Game>

    fun getGameById(id: Int): Game?
}