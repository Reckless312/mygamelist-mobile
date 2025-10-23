package com.example.app.ui.view.add_edit_scene

sealed class AddEditGameEvent {
    data class OnTitleChange(val title: String) : AddEditGameEvent()
    data class OnDescriptionChange(val description: String) : AddEditGameEvent()
    data class OnBannerUrlChange(val bannerUrl: String) : AddEditGameEvent()
    data class OnReleaseDateChange(val releaseDate: String) : AddEditGameEvent()
    data class OnPriceChange(val price: String) : AddEditGameEvent()

    object OnSaveGameClick : AddEditGameEvent()
}
