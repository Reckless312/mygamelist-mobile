package com.example.app.ui.view.home_scene

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.example.app.data.Game

@Composable
fun GameItem(game: Game, modifier: Modifier = Modifier) {
    Card(modifier = modifier.padding(horizontal = 8.dp, vertical = 8.dp).width(280.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFF0F0F14)),) {
        Column(modifier = Modifier.padding(8.dp)) {
            Text(text = game.title, color = Color.White, fontSize = 16.sp, modifier = Modifier.padding(bottom = 8.dp))
            AsyncImage(model = game.bannerUrl, contentDescription = "Game Banner", modifier = Modifier.width(270.dp), contentScale = ContentScale.FillWidth)
        }
    }
}

@Preview
@Composable
fun GameItemPreview() {
    val game = Game(
        id = 1,
        title = "The Witcher 3: Wild Hunt",
        description = "The Witcher 3: Wild Hunt is an action role-playing game set in an open world environment, developed by Polish video game developer CD Projekt Red.",
        bannerUrl = "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1738256985",
        releaseDate = "2015-05-19",
        price = 39.99f
    )
    GameItem(game = game)
}
