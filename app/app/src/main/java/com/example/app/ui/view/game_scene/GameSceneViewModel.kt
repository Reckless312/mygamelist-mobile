package com.example.app.ui.view.game_scene

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.data.Game
import com.example.app.data.GameIRepository
import com.example.app.util.Routes
import com.example.app.util.UiEvent
import dagger.hilt.android.lifecycle.HiltViewModel
import jakarta.inject.Inject
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch

@HiltViewModel
class GameSceneViewModel @Inject constructor(private val repository: GameIRepository, savedStateHandle: SavedStateHandle): ViewModel(){
    var game by mutableStateOf<Game?>(null)
        private set

    private val _uiEvent = Channel<UiEvent>()
    val uiEvent = _uiEvent.receiveAsFlow()

    init {
        val gameId = savedStateHandle.get<Int>("gameId")!!
        if (gameId != -1) {
            viewModelScope.launch {
                try{
                    repository.getGameById(gameId).collect {game ->
                        this@GameSceneViewModel.game = game
                    }
                }catch (e: Exception) {
                    println("Error on retrieving data: ${e.message}")
                    sendUiEvent(UiEvent.ShowSnackbar("Failed to get game"))
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
                viewModelScope.launch {
                    try{
                        repository.getGameById(event.id).collect{ game ->
                            if (game != null) {
                                repository.deleteGame(game)
                                sendUiEvent(UiEvent.PopBackStack)
                            }
                        }
                    } catch (e: Exception) {
                        println("Error on deleting data: ${e.message}")
                        sendUiEvent(UiEvent.ShowSnackbar("Failed to delete game"))
                    }
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