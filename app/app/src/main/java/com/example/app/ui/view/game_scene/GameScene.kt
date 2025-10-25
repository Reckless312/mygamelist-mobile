package com.example.app.ui.view.game_scene

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Info
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.hilt.lifecycle.viewmodel.compose.hiltViewModel
import coil.compose.AsyncImage
import com.example.app.ui.view.common.BottomBar
import com.example.app.util.UiEvent
import kotlinx.coroutines.launch

@Composable
fun GameScene(onNavigate: (UiEvent.Navigate) -> Unit, onPopBackStack: () -> Unit, viewModel: GameSceneViewModel = hiltViewModel()){
    val snackbarHostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()
    val openAlertDialog = remember { mutableStateOf(false) }
    LaunchedEffect(key1 = true) {
        viewModel.uiEvent.collect { event ->
            when (event) {
                is UiEvent.Navigate -> { onNavigate(event) }
                is UiEvent.PopBackStack -> onPopBackStack()
                is UiEvent.ShowDialog -> {
                    openAlertDialog.value = true
                }
                is UiEvent.ShowSnackbar -> {
                    scope.launch {
                        snackbarHostState.showSnackbar(message = event.message, actionLabel = event.action)
                    }
                }
            }
        }
    }

    Scaffold(containerColor = Color.Black, bottomBar = { BottomBar() }, snackbarHost = { SnackbarHost(snackbarHostState) })
    { padding ->
        Box(modifier = Modifier.fillMaxSize().padding(padding)) {
            Column(
                modifier = Modifier.fillMaxWidth().padding(16.dp),
                verticalArrangement = Arrangement.spacedBy(32.dp)
            ) {
                AsyncImage(model = viewModel.game?.bannerUrl ?: "", contentDescription = "Game Banner", modifier = Modifier.fillMaxWidth(), contentScale = ContentScale.FillWidth)
                Text(text = viewModel.game?.title ?: "", color = Color.White, fontSize = 24.sp)
                Text(text = viewModel.game?.description ?: "", color = Color.White, fontSize = 16.sp)
                Text(text = "Release Date: " + viewModel.game?.releaseDate, color = Color.White, fontSize = 16.sp)
                Text(text = "Price: " + viewModel.game?.price.toString() + "$", color = Color.White, fontSize = 16.sp)
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceEvenly) {
                    Button(onClick = {viewModel.onEvent(GameSceneEvent.OnUpdateButtonPressed(viewModel.game?.id ?: -1))}) {
                        Text(text = "Edit")
                    }
                    Button(onClick = {viewModel.onEvent(GameSceneEvent.OnDeleteButtonPressed)}) {
                        Text(text = "Delete")
                    }
                }
            }
            if (openAlertDialog.value) {
                AlertDialogExample(
                    onDismissRequest = { openAlertDialog.value = false },
                    onConfirmation = { openAlertDialog.value = false
                        viewModel.onEvent(GameSceneEvent.OnConfirmDelete(viewModel.game?.id ?: -1))
                    },
                    dialogTitle = "Delete Confirmation",
                    dialogText = "Are you sure you want to delete this item?",
                    icon = Icons.Default.Info
                )
            }
        }
    }
}
