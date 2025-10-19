package com.example.app

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class GameModel(
    val title: String,
    val description: String,
    val bannerUrl: String,
    val releaseDate: String,
    val price: Float
) : Parcelable