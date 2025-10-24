package com.example.app.ui.view.game_scene

sealed class GameSceneEvent {
    object OnDeleteButtonPressed: GameSceneEvent()
    data class OnUpdateButtonPressed(val id: Int): GameSceneEvent()
    data class OnConfirmDelete(val id: Int): GameSceneEvent()
}