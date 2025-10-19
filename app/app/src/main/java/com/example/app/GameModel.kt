package com.example.app

import java.util.Date

data class GameModel (
    val title: String,
    val description: String,
    val bannerUrl: String,
    val releaseDate: Date,
    val price: Float,
)