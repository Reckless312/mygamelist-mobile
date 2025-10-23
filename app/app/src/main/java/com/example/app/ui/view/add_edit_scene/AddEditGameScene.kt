package com.example.app.ui.view.add_edit_scene

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.hilt.lifecycle.viewmodel.compose.hiltViewModel
import com.example.app.R
import com.example.app.ui.viewmodel.AddEditGameViewModel
import com.example.app.util.UiEvent

@Composable
fun AddEditGameScene(onPopBackStack: () -> Unit, viewModel: AddEditGameViewModel = hiltViewModel()){
    LaunchedEffect(key1 = true) {
        viewModel.uiEvent.collect { event ->
            when (event) {
                is UiEvent.PopBackStack -> onPopBackStack()
                else -> Unit
            }
        }
    }
    Column(
        modifier = Modifier.fillMaxSize()
    ) {
        TextField(
            value = viewModel.title,
            onValueChange = {
                viewModel.onEvent(AddEditGameEvent.OnTitleChange(it))
            },
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(8.dp))
        TextField(
            value = viewModel.description,
            onValueChange = {
                viewModel.onEvent(AddEditGameEvent.OnDescriptionChange(it))
            },
            modifier = Modifier.fillMaxWidth(),
            singleLine = false,
            maxLines = 5
        )
        TextField(
            value = viewModel.banner_url,
            onValueChange = {
                viewModel.onEvent(AddEditGameEvent.OnBannerUrlChange(it))
            },
            modifier = Modifier.fillMaxWidth()
        )
        TextField(
            value = viewModel.releaseDate,
            onValueChange = {
                viewModel.onEvent(AddEditGameEvent.OnReleaseDateChange(it))
            },
            modifier = Modifier.fillMaxWidth()
        )
        TextField(
            value = viewModel.price.toString(),
            onValueChange = {
                viewModel.onEvent(AddEditGameEvent.OnPriceChange(it.toFloat()))
            },
            modifier = Modifier.fillMaxWidth()
        )
        Image(
            painter = painterResource(id = R.drawable.outline_add_task_24),
            contentDescription = "Add",
        )
    }
}