package com.example.app.di

import android.content.Context
import com.example.app.R
import com.example.app.data.Game
import com.example.app.data.GameIRepository
import com.example.app.data.GameRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    @Provides
    @Singleton
    fun provideGames(@ApplicationContext context: Context): ArrayList<Game> {
        val games = ArrayList<Game>()
        val titles = context.resources.getStringArray(R.array.game_title)
        val descriptions = context.resources.getStringArray(R.array.game_description)
        val images = context.resources.getStringArray(R.array.game_image)
        val prices = context.resources.getStringArray(R.array.game_price)
        val releaseDates = context.resources.getStringArray(R.array.game_release_date)

        for (i in titles.indices) {
            games.add(Game(id = i, title = titles[i], description = descriptions[i], bannerUrl = images[i], releaseDate = releaseDates[i], price = prices[i].toFloat()))
        }
        return games
    }

    @Provides
    @Singleton
    fun provideGameRepository(games: ArrayList<Game>): GameIRepository {
        return GameRepository(games)
    }
}