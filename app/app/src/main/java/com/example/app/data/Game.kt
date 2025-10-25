package com.example.app.data

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class Game(
    @PrimaryKey(autoGenerate = true) var id: Int? = null,
    var title: String,
    var description: String,
    var bannerUrl: String,
    var releaseDate: String,
    var price: Float
)
