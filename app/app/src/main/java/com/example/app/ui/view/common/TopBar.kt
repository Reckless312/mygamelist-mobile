package com.example.app.ui.view.common

import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.app.R
import com.example.app.data.Game
import com.example.app.data.GameRepository
import com.example.app.ui.view.home_scene.GameListEvent
import com.example.app.ui.viewmodel.GameListViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopBar(viewModel: GameListViewModel) {
    TopAppBar(
        title = { Text("") },
        colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0F0F14)),
        actions = {
            IconButton(onClick = {
                viewModel.onEvent(GameListEvent.OnAddGameClicked)
            }) {
                Icon(
                    painter = painterResource(id = R.drawable.outline_add_24),
                    contentDescription = "Add game",
                    tint = Color.White
                )
            }
        }
    )
}

@Preview
@Composable
fun TopBarPreview() {
    val game = Game(
        id = 1,
        title = "The Witcher 3: Wild Hunt",
        description = "The Witcher 3: Wild Hunt is an action role-playing game set in an open world environment, developed by Polish video game developer CD Projekt Red.",
        bannerUrl = "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1738256985",
        releaseDate = "2015-05-19",
        price = 39.99f
    )
    val gamesList = arrayListOf(game, game, game)
    val gameRepository = GameRepository(gamesList)
    val viewModel = GameListViewModel(gameRepository)

    TopBar(viewModel)
}
