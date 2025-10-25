package com.example.app.di

import android.app.Application
import androidx.room.Room
import com.example.app.data.GameDao
import com.example.app.data.GameDatabase
import com.example.app.data.GameIRepository
import com.example.app.data.GameRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import jakarta.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {
    @Provides
    @Singleton
    fun provideGameDatabase(app: Application): GameDatabase{
        return Room.databaseBuilder(app, GameDatabase::class.java, "game_db").build()
    }

    @Provides
    @Singleton
    fun provideGameDao(db: GameDatabase): GameDao {
        return db.dao
    }

    @Provides
    @Singleton
    fun provideGameRepository(dao: GameDao): GameIRepository {
        return GameRepository(dao)
    }
}
