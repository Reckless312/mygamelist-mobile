package com.example.app

import android.os.Build
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.activity.ComponentActivity
import com.squareup.picasso.Picasso

class GameDetailsActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_game_details)

        val game = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            intent.getParcelableExtra("game", GameModel::class.java)
        } else {
            @Suppress("DEPRECATION")
            intent.getParcelableExtra("game")
        }
        
        if (game != null) {
            val titleView: TextView = findViewById(R.id.textView)
            val descriptionView: TextView = findViewById(R.id.textView3)
            val priceView: TextView = findViewById(R.id.textView5)
            val releaseDateView: TextView = findViewById(R.id.textView4)
            val imageView: ImageView = findViewById(R.id.imageView3)

            val priceText = "Price: " + game.price.toString() + "$"
            val releaseDateText = "Release Date: " + game.releaseDate


            titleView.text = game.title
            descriptionView.text = game.description
            priceView.text = priceText
            releaseDateView.text = releaseDateText
            Picasso.get().load(game.bannerUrl).into(imageView)
        }
    }
}