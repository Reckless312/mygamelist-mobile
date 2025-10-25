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
