package com.example.app.ui.view.home_scene

import androidx.compose.runtime.MutableState
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.data.Game
import com.example.app.data.GameIRepository
import com.example.app.util.Routes
import com.example.app.util.UiEvent
import dagger.hilt.android.lifecycle.HiltViewModel
import jakarta.inject.Inject
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch

@HiltViewModel
class GameListViewModel @Inject constructor(private val repository: GameIRepository) : ViewModel() {
    private val _games = MutableStateFlow<List<Game>>(emptyList())
    val games = _games.asStateFlow()

    private val _uiEvent = Channel<UiEvent>()
    val uiEvent = _uiEvent.receiveAsFlow()

    init {
        viewModelScope.launch {
            try {
                repository.getGames().collect { games ->
                    _games.value = games
                }
            } catch (e : Exception) {
                println("Failed to fetch games: ${e.message}")
                sendUiEvent(UiEvent.ShowSnackbar("Failed to fetch games"))
            }
        }
    }

    fun onEvent(event: GameListEvent) {
        when(event) {
            is GameListEvent.OnGameClicked -> {
                sendUiEvent(UiEvent.Navigate(Routes.GAME_DETAIL + "?gameId=${event.game.id}"))
            }
            is GameListEvent.OnAddGameClicked -> {
                sendUiEvent(UiEvent.Navigate(Routes.ADD_GAME + "?gameId=-1"))
            }
        }
    }

    private fun sendUiEvent(event: UiEvent) {
        viewModelScope.launch {
            _uiEvent.send(event)
        }
    }
}