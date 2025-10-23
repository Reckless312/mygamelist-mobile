package com.example.app.ui.viewmodel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.data.Game
import com.example.app.data.GameRepository
import com.example.app.ui.view.add_edit_scene.AddEditGameEvent
import com.example.app.util.UiEvent
import dagger.hilt.android.lifecycle.HiltViewModel
import jakarta.inject.Inject
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch

@HiltViewModel
class AddEditGameViewModel @Inject constructor(
    private val repository: GameRepository, savedStateHandle: SavedStateHandle
) : ViewModel(){
    var game by mutableStateOf<Game?>(null)
        private set

    var title by mutableStateOf("")
        private set

    var description by mutableStateOf("")
        private set

    var banner_url by mutableStateOf("")
        private set

    var releaseDate by mutableStateOf("")
        private set

    var price by mutableFloatStateOf(0f)
        private set

    private val _uiEvent = Channel<UiEvent>()
    val uiEvent = _uiEvent.receiveAsFlow()

    init {
        val gameId = savedStateHandle.get<Int>("gameId")!!
        if (gameId != -1) {
            viewModelScope.launch {
                repository.getGameById(gameId)?.let { game ->
                    title = game.title
                    description = game.description
                    banner_url = game.bannerUrl
                    releaseDate = game.releaseDate
                    price = game.price
                    this@AddEditGameViewModel.game = game
                }
            }
        }
    }

    fun onEvent(event: AddEditGameEvent) {
        when(event) {
            is AddEditGameEvent.OnTitleChange -> {
                title = event.title
            }
            is AddEditGameEvent.OnDescriptionChange -> {
                description = event.description
            }
            is AddEditGameEvent.OnBannerUrlChange -> {
                banner_url = event.bannerUrl
            }
            is AddEditGameEvent.OnReleaseDateChange -> {
                releaseDate = event.releaseDate
            }
            is AddEditGameEvent.OnPriceChange -> {
                price = event.price
            }
            is AddEditGameEvent.OnSaveGameClick -> {
                // just do actual checks
                viewModelScope.launch {
                    repository.insertGame(Game(
                        title = title,
                        description = description,
                        bannerUrl = banner_url,
                        releaseDate = releaseDate,
                        price = price,
                        id = -1
                    ))
                    sendUiEvent(UiEvent.PopBackStack)
                }
            }
        }
    }

    private fun sendUiEvent(event: UiEvent) {
        viewModelScope.launch {
            _uiEvent.send(event)
        }
    }
}