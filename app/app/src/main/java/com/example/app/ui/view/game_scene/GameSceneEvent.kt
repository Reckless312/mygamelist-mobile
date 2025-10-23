package com.example.app.ui.view.game_scene

sealed class GameSceneEvent {
    data class OnDeleteButtonPressed(val id: Int): GameSceneEvent()
    data class OnUpdateButtonPressed(val id: Int): GameSceneEvent()
}