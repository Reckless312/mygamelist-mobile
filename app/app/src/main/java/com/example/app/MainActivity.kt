package com.example.app

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.app.data.Game

class MainActivity : ComponentActivity() {
    private lateinit var recyclerView: RecyclerView
    private lateinit var gameList: ArrayList<Game>
    private lateinit var gameAdapter: GameRecycleViewAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        recyclerView = findViewById(R.id.recycleView)
        recyclerView.setHasFixedSize(true)
        recyclerView.layoutManager = LinearLayoutManager(this)
        gameList = ArrayList()
        loadGames()
        gameAdapter = GameRecycleViewAdapter(gameList)
        recyclerView.adapter = gameAdapter

//        gameAdapter.onItemClick = {
//            val intent = Intent(this, GameDetailsActivity::class.java)
//            intent.putExtra("game", it)
//            startActivity(intent)
//        }
    }

    private fun loadGames() {
        val titles = resources.getStringArray(R.array.game_title)
        val descriptions = resources.getStringArray(R.array.game_description)
        val images = resources.getStringArray(R.array.game_image)
        val prices = resources.getStringArray(R.array.game_price)
        val releaseDates = resources.getStringArray(R.array.game_release_date)

        for (i in 0 until titles.size) {
            gameList.add(
                Game(
                    i,
                    titles[i],
                    descriptions[i],
                    images[i],
                    releaseDates[i],
                    prices[i].toFloat()
                )
            )
        }
    }
}
