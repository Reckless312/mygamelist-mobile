package com.example.app.ui.view.add_edit_scene

import android.os.Build
import androidx.annotation.RequiresApi
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.hilt.lifecycle.viewmodel.compose.hiltViewModel
import com.example.app.R
import com.example.app.ui.view.common.BottomBar
import com.example.app.ui.view.add_edit_scene.AddEditGameViewModel
import com.example.app.util.UiEvent
import kotlinx.coroutines.launch

@Composable
fun AddEditGameScene(onPopBackStack: () -> Unit, viewModel: AddEditGameViewModel = hiltViewModel()){
    val snackbarHostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()
    LaunchedEffect(key1 = true) {
        viewModel.uiEvent.collect { event ->
            when (event) {
                is UiEvent.PopBackStack -> onPopBackStack()
                is UiEvent.ShowSnackbar -> {
                    scope.launch {
                        snackbarHostState.showSnackbar(message = event.message, actionLabel = event.action)
                    }
                }
                else -> Unit
            }
        }
    }

    Scaffold(containerColor = Color.Black, bottomBar = { BottomBar() }, snackbarHost = { SnackbarHost(snackbarHostState) })
    { padding ->
        Box(modifier = Modifier.fillMaxSize().padding(padding)) {
            Column(modifier = Modifier.fillMaxSize().padding(16.dp), verticalArrangement = Arrangement.spacedBy(16.dp)) {
                TextFieldItem("Title: ", viewModel.title,
                    onValueChange = {newTitle -> viewModel.onEvent(AddEditGameEvent.OnTitleChange(newTitle))})
                TextFieldItem("Description: ", viewModel.description,
                    onValueChange = {newDescription -> viewModel.onEvent(AddEditGameEvent.OnDescriptionChange(newDescription))})
                TextFieldItem("Banner URL: ", viewModel.bannerUrl,
                    onValueChange = {newBannerUrl -> viewModel.onEvent(AddEditGameEvent.OnBannerUrlChange(newBannerUrl))})
                TextFieldItem("ReleaseDate: ", viewModel.releaseDate,
                    onValueChange = {newReleaseDate -> viewModel.onEvent(AddEditGameEvent.OnReleaseDateChange(newReleaseDate))})
                TextFieldItem("Price: ", viewModel.price,
                    onValueChange = {newPrice -> viewModel.onEvent(AddEditGameEvent.OnPriceChange(newPrice))})
            }
            IconButton(modifier = Modifier.align(Alignment.BottomEnd).padding(16.dp), onClick = {viewModel.onEvent(AddEditGameEvent.OnSaveGameClick)}) {
                Image(painter = painterResource(id = R.drawable.outline_add_task_24), contentDescription = "Add", modifier = Modifier.size(56.dp))
            }
        }
    }
}
