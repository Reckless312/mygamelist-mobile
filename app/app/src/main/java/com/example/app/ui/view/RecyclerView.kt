package com.example.app.ui.view

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.app.data.Game

@Composable
fun RecyclerView(games: List<Game>) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = Color.Black
    ) {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(horizontal = 16.dp, vertical = 16.dp)
        ) {
            items(items = games) { game ->
                GameItem(game = game, onEvent = {})
            }
        }
    }
}

@Preview
@Composable
fun DefaultPreview() {
    val game = Game(
        id = 1,
        title = "The Witcher 3: Wild Hunt",
        description = "The Witcher 3: Wild Hunt is an action role-playing game set in an open world environment, developed by Polish video game developer CD Projekt Red.",
        bannerUrl = "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1738256985",
        releaseDate = "2015-05-19",
        price = 39.99f
    )
    val games = listOf(game, game, game, game, game, game, game, game, game, game)
    RecyclerView(games = games)
}
