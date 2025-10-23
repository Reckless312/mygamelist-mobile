package com.example.app.ui.view.home_scene

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.data.GameRepository
import com.example.app.util.Routes
import com.example.app.util.UiEvent
import dagger.hilt.android.lifecycle.HiltViewModel
import jakarta.inject.Inject
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch

@HiltViewModel
class GameListViewModel @Inject constructor(private val repository: GameRepository) : ViewModel() {

    val games = repository.getGames()
    private val _uiEvent = Channel<UiEvent>()
    val uiEvent = _uiEvent.receiveAsFlow()

    fun onEvent(event: GameListEvent) {
        when(event) {
            is GameListEvent.OnGameClicked -> {
                sendUiEvent(UiEvent.Navigate(Routes.GAME_DETAIL + "?gameId=${event.game.id}"))
            }
            is GameListEvent.OnAddGameClicked -> {
                sendUiEvent(UiEvent.Navigate(Routes.ADD_GAME))
            }
        }
    }

    private fun sendUiEvent(event: UiEvent) {
        viewModelScope.launch {
            _uiEvent.send(event)
        }
    }
}