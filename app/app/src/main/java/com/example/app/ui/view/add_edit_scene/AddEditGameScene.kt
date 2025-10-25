package com.example.app.ui.view.add_edit_scene

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.DateRange
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.hilt.lifecycle.viewmodel.compose.hiltViewModel
import com.example.app.R
import com.example.app.ui.view.common.BottomBar
import com.example.app.util.UiEvent
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AddEditGameScene(onPopBackStack: () -> Unit, viewModel: AddEditGameViewModel = hiltViewModel()) {
    val snackbarHostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()
    val showDatePicker = remember { mutableStateOf(false) }

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

    Scaffold(containerColor = Color.Black, bottomBar = { BottomBar() }, snackbarHost = { SnackbarHost(snackbarHostState) }) { padding ->
        Box(modifier = Modifier.fillMaxSize().padding(padding)) {
            Column(modifier = Modifier.fillMaxSize().padding(16.dp), verticalArrangement = Arrangement.spacedBy(16.dp)) {
                TextFieldItem("Title: ", viewModel.title, onValueChange = { newTitle -> viewModel.onEvent(AddEditGameEvent.OnTitleChange(newTitle)) })
                TextFieldItem("Description: ", viewModel.description, onValueChange = { newDescription -> viewModel.onEvent(AddEditGameEvent.OnDescriptionChange(newDescription)) })
                TextFieldItem("Banner URL: ", viewModel.bannerUrl, onValueChange = { newBannerUrl -> viewModel.onEvent(AddEditGameEvent.OnBannerUrlChange(newBannerUrl)) })

                Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.SpaceBetween) {
                    Text(text = "Release Date: " + viewModel.releaseDate, color = Color.White)
                    IconButton(onClick = { showDatePicker.value = true }) {
                        Icon(imageVector = Icons.Default.DateRange, contentDescription = "Select Date", tint = Color.White)
                    }
                }

                if (showDatePicker.value) {
                    val datePickerState = rememberDatePickerState()
                    DatePickerDialog(onDismissRequest = { showDatePicker.value = false }, confirmButton = {
                            TextButton(onClick = {
                                showDatePicker.value = false
                                    datePickerState.selectedDateMillis?.let { millis -> viewModel.onEvent(AddEditGameEvent.OnReleaseDateChange(millis)) }
                                }
                            ) { Text("OK") }
                        },
                        dismissButton = { TextButton(onClick = { showDatePicker.value = false }) { Text("Cancel") } }
                    ) {
                        DatePicker(state = datePickerState)
                    }
                }

                TextFieldItem("Price: ", viewModel.price, onValueChange = { newPrice -> viewModel.onEvent(AddEditGameEvent.OnPriceChange(newPrice)) })
            }
            IconButton(modifier = Modifier.align(Alignment.BottomEnd).padding(16.dp), onClick = { viewModel.onEvent(AddEditGameEvent.OnSaveGameClick) }) {
                Image(painter = painterResource(id = R.drawable.outline_add_task_24), contentDescription = "Add", modifier = Modifier.size(56.dp))
            }
        }
    }
}