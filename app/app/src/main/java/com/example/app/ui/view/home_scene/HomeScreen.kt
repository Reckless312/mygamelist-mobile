package com.example.app.ui.view.home_scene

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import androidx.hilt.lifecycle.viewmodel.compose.hiltViewModel
import com.example.app.ui.view.common.BottomBar
import com.example.app.ui.view.common.TopBar
import com.example.app.ui.viewmodel.GameListViewModel
import com.example.app.util.UiEvent

@Composable
fun HomeScreen(onNavigate: (UiEvent.Navigate) -> Unit, viewModel: GameListViewModel = hiltViewModel()) {
    LaunchedEffect(key1 = true) {
        viewModel.uiEvent.collect { event ->
            when (event) {
                is UiEvent.Navigate -> {
                    onNavigate(event)
                }
                else -> Unit
            }
        }
    }

    Scaffold(topBar = { TopBar(viewModel) }, bottomBar = { BottomBar() }, modifier = Modifier.fillMaxSize()) {
        padding -> Box(modifier = Modifier.padding(padding)) {
            RecyclerView(viewModel = viewModel)
        }
    }
}