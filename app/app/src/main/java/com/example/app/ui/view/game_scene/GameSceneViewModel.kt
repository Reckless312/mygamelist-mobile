package com.example.app.ui.view.game_scene

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.data.Game
import com.example.app.data.GameRepository
import com.example.app.util.Routes
import com.example.app.util.UiEvent
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class GameSceneViewModel @Inject constructor(private val repository: GameRepository, savedStateHandle: SavedStateHandle): ViewModel(){
    var game by mutableStateOf(Game(-1, "", "", "", "", 0f))
        private set

    private val _uiEvent = Channel<UiEvent>()
    val uiEvent = _uiEvent.receiveAsFlow()

    init {
        val gameId = savedStateHandle.get<Int>("gameId")!!
        if (gameId != -1) {
            viewModelScope.launch {
                repository.getGameById(gameId)?.let { game ->
                    this@GameSceneViewModel.game = game
                }
            }
        }
    }

    fun onEvent(event: GameSceneEvent) {
        when (event) {
            is GameSceneEvent.OnDeleteButtonPressed -> {
                sendUiEvent(UiEvent.ShowDialog)
            }
            is GameSceneEvent.OnUpdateButtonPressed -> {
                sendUiEvent(UiEvent.Navigate(Routes.ADD_GAME + "?gameId=${event.id}"))
            }
            is GameSceneEvent.OnConfirmDelete -> {
                repository.getGameById(event.id)?.let {
                    repository.deleteGame(it)
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