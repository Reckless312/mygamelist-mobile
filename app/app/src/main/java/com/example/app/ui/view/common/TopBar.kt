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
import com.example.app.R
import com.example.app.ui.view.home_scene.GameListEvent
import com.example.app.ui.view.home_scene.GameListViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopBar(viewModel: GameListViewModel) {
    TopAppBar(title = { Text("") }, colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0F0F14)),
        actions = {
            IconButton(onClick = { viewModel.onEvent(GameListEvent.OnAddGameClicked) }) {
                Icon(painter = painterResource(id = R.drawable.outline_add_24), contentDescription = "Add game", tint = Color.White)
            }
        }
    )
}
