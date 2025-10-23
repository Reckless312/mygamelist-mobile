package com.example.app.data

data class Game(
    var id: Int,
    val title: String,
    val description: String,
    val bannerUrl: String,
    val releaseDate: String,
    val price: Float
)