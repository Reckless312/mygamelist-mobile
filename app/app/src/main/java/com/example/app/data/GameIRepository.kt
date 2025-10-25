package com.example.app.data

import kotlinx.coroutines.flow.Flow

interface GameIRepository {
    suspend fun insertGame(game: Game)

    suspend fun deleteGame(game: Game)

    fun getGames(): Flow<List<Game>>

    suspend fun getGameByTitle(title: String): Game?

    suspend fun getGameById(id: Int): Game?
}