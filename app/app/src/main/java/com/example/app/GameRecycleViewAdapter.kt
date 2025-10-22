package com.example.app

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.app.data.Game
import com.squareup.picasso.Picasso

class GameRecycleViewAdapter(private val gameList: ArrayList<Game>) : RecyclerView.Adapter<GameRecycleViewAdapter.MyViewHolder>() {
    var onItemClick: ((Game) -> Unit)? = null

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.recycle_view_row, parent, false)
        return MyViewHolder(view)
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        val game = gameList[position]
        holder.gameTitle.text = game.title
        Picasso.get().load(game.bannerUrl).into(holder.gameImage)

        holder.itemView.setOnClickListener {
            onItemClick?.invoke(game)
        }
    }

    override fun getItemCount(): Int {
        return gameList.size
    }

    class MyViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val gameImage: ImageView = itemView.findViewById(R.id.imageView)
        val gameTitle: TextView = itemView.findViewById(R.id.textView2)
    }
}