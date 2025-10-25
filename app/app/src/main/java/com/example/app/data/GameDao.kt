package com.example.app.data

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import kotlinx.coroutines.flow.Flow

@Dao
interface GameDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertGame(game: Game)

    @Delete
    suspend fun deleteGame(game: Game)

    @Query("SELECT * FROM game")
    fun getGames(): Flow<List<Game>>

    @Query("SELECT * FROM game WHERE title = :title")
    suspend fun getGameByTitle(title: String): Game?

    @Query("SELECT * FROM game WHERE id = :id")
    fun getGameById(id: Int): Flow<Game?>
}