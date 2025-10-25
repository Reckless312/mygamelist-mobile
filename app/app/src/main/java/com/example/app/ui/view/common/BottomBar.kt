package com.example.app.ui.view.common

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material3.BottomAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import com.example.app.R

@Composable
fun BottomBar(modifier: Modifier = Modifier) {
    Box(modifier = modifier.fillMaxWidth()) {
        BottomAppBar(modifier = Modifier.height(80.dp), containerColor = Color(0xFF0F0F14)) {}
        Image(painter = painterResource(id = R.drawable.wave_background), contentDescription = null, modifier = Modifier.fillMaxWidth(),
            contentScale = ContentScale.FillBounds)
    }
}
