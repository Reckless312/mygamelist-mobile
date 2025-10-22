package com.example.app.ui.viewmodel

import com.example.app.data.Game

sealed class GameListEvent {
    data class OnGameClicked(val game: Game) : GameListEvent()
    object OnAddGameClicked : GameListEvent()
}