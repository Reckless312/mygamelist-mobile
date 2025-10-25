package com.example.app.ui.view.home_scene

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun RecyclerView(viewModel: GameListViewModel) {
    val games = viewModel.games.collectAsState(initial = emptyList())
    Surface(modifier = Modifier.fillMaxSize(), color = Color.Black) {
        LazyColumn(modifier = Modifier.fillMaxSize(), horizontalAlignment = Alignment.CenterHorizontally,
            contentPadding = PaddingValues(horizontal = 16.dp, vertical = 16.dp)) {
            items(items = games.value) {
                game -> GameItem(game = game, modifier = Modifier.clickable{
                    viewModel.onEvent(GameListEvent.OnGameClicked(game))
                })
            }
        }
    }
}
