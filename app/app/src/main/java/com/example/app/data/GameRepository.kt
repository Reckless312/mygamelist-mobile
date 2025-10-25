package com.example.app.data

import jakarta.inject.Inject
import kotlinx.coroutines.flow.Flow

class GameRepository @Inject constructor(private val dao: GameDao): GameIRepository {
    override suspend fun insertGame(game: Game) {
        dao.insertGame(game)
    }

    override suspend fun deleteGame(game: Game) {
        dao.deleteGame(game)
    }

    override fun getGames(): Flow<List<Game>> {
        return dao.getGames()
    }

    override suspend fun getGameById(id: Int): Game? {
        return dao.getGameById(id)
    }
}