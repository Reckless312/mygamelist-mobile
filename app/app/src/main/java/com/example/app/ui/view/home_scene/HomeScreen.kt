package com.example.app.ui.view.home_scene

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.hilt.lifecycle.viewmodel.compose.hiltViewModel
import com.example.app.ui.view.common.BottomBar
import com.example.app.ui.view.common.TopBar
import com.example.app.util.UiEvent
import kotlinx.coroutines.launch

@Composable
fun HomeScreen(onNavigate: (UiEvent.Navigate) -> Unit, viewModel: GameListViewModel = hiltViewModel()) {
    val snackbarHostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()
    LaunchedEffect(key1 = true) {
        viewModel.uiEvent.collect { event ->
            when (event) {
                is UiEvent.Navigate -> { onNavigate(event) }
                is UiEvent.ShowSnackbar -> {
                    scope.launch {
                        snackbarHostState.showSnackbar(message = event.message, actionLabel = event.action)
                    }
                }
                else -> Unit
            }
        }
    }

    Scaffold(topBar = { TopBar(viewModel) }, bottomBar = { BottomBar() }, snackbarHost = { SnackbarHost(snackbarHostState) }, modifier = Modifier.fillMaxSize()) {
        padding -> Box(modifier = Modifier.padding(padding)) {
            RecyclerView(viewModel = viewModel)
        }
    }
}