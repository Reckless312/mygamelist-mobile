package com.example.app.ui.view.home_scene

import com.example.app.data.Game

sealed class GameListEvent {
    data class OnGameClicked(val game: Game) : GameListEvent()
    object OnAddGameClicked : GameListEvent()
}