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
    // Database creation at some point :>

    @Provides
    @Singleton
    fun provideGameRepository(@ApplicationContext context: Context): GameIRepository{
        val games = ArrayList<Game>()

        val titles = context.resources.getStringArray(R.array.game_title)
        val descriptions = context.resources.getStringArray(R.array.game_description)
        val images = context.resources.getStringArray(R.array.game_image)
        val prices = context.resources.getStringArray(R.array.game_price)
        val releaseDates = context.resources.getStringArray(R.array.game_release_date)

        for (i in 0 until titles.size) {
            games.add(Game(titles[i], descriptions[i], images[i], releaseDates[i], prices[i].toFloat()))
        }

        return GameRepository(games)
    }
}