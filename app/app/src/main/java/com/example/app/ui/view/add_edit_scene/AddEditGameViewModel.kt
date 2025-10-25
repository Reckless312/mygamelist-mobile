package com.example.app.ui.view.add_edit_scene

import android.annotation.SuppressLint
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.app.data.Game
import com.example.app.data.GameIRepository
import com.example.app.util.UiEvent
import dagger.hilt.android.lifecycle.HiltViewModel
import jakarta.inject.Inject
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch
import java.time.Instant
import java.time.LocalDate
import java.time.ZoneId
import java.time.format.DateTimeFormatter

@HiltViewModel
class AddEditGameViewModel @Inject constructor(private val repository: GameIRepository, savedStateHandle: SavedStateHandle) : ViewModel(){
    var game by mutableStateOf<Game?>(null)
        private set

    var title by mutableStateOf("")
        private set

    var description by mutableStateOf("")
        private set

    var bannerUrl by mutableStateOf("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg?t=1759973532")
        private set

    var releaseDate by mutableStateOf("")
        private set

    var price by mutableStateOf("")
        private set

    private val _uiEvent = Channel<UiEvent>()
    val uiEvent = _uiEvent.receiveAsFlow()

    init {
        val gameId = savedStateHandle.get<Int>("gameId")!!
        if (gameId != -1) {
            viewModelScope.launch {
                try{
                    repository.getGameById(gameId).collect { game ->
                        title = game?.title ?: ""
                        description = game?.description ?: ""
                        bannerUrl = game?.bannerUrl ?: ""
                        releaseDate = game?.releaseDate ?: ""
                        price = game?.price.toString()
                        this@AddEditGameViewModel.game = game
                    }
                } catch (e: Exception) {
                    println("Failed receiving game: ${e.message}")
                    sendUiEvent(UiEvent.ShowSnackbar(message = "Failed receiving game"))
                }
            }
        }
    }

    @SuppressLint("NewApi")
    fun onEvent(event: AddEditGameEvent) {
        when(event) {
            is AddEditGameEvent.OnTitleChange -> {
                title = event.title
            }
            is AddEditGameEvent.OnDescriptionChange -> {
                description = event.description
            }
            is AddEditGameEvent.OnBannerUrlChange -> {
                bannerUrl = event.bannerUrl
            }
            is AddEditGameEvent.OnReleaseDateChange -> {
                val selectedDate = Instant.ofEpochMilli(event.releaseDate).atZone(ZoneId.systemDefault()).toLocalDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
                releaseDate = selectedDate
            }
            is AddEditGameEvent.OnPriceChange -> {
                price = event.price
            }
            is AddEditGameEvent.OnSaveGameClick -> {
                viewModelScope.launch {
                    val fields: ArrayList<String> = arrayListOf(title, description, bannerUrl, releaseDate)

                    for (field in fields) {
                        if (field.isBlank()) {
                            sendUiEvent(UiEvent.ShowSnackbar(message = "All fields must be filled"))
                            return@launch
                        }
                    }

                    if (title.length < 3) {
                        sendUiEvent(UiEvent.ShowSnackbar(message = "Title must be at least 3 characters long"))
                        return@launch
                    }

                    if (description.length < 5) {
                        sendUiEvent(UiEvent.ShowSnackbar(message = "Description must be at least 5 characters long"))
                        return@launch
                    }

                    try{
                        val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
                        LocalDate.parse(releaseDate, formatter)
                    }
                    catch(e: Exception){
                        sendUiEvent(UiEvent.ShowSnackbar(message = "Release date must be in the format yyyy-MM-dd"))
                        return@launch
                    }

                    if (price.toFloatOrNull() == null) {
                        sendUiEvent(UiEvent.ShowSnackbar(message = "Price must be a number"))
                        return@launch
                    }

                    repository.getGameByTitle(title)?.let {
                        if (it.id != game?.id) {
                            sendUiEvent(UiEvent.ShowSnackbar(message = "Game with this title already exists"))
                            return@launch
                        }
                    }

                    try{
                        repository.insertGame(Game(title = title, description = description, bannerUrl = bannerUrl, releaseDate = releaseDate, price = price.toFloat(), id = game?.id))
                    } catch (e: Exception) {
                        println("Failed inserting game: ${e.message}")
                        sendUiEvent(UiEvent.ShowSnackbar(message = "Failed inserting game"))
                        return@launch
                    }

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