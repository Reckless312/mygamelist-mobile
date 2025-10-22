package com.example.app.ui.view.common

import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.app.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopBar() {
    TopAppBar(
        title = { Text("") }, // Empty title as in the original design
        colors = TopAppBarDefaults.topAppBarColors(
            containerColor = Color(0xFF0F0F14)
        ),
        actions = {
            IconButton(onClick = { /* TODO: Handle add action */ }) {
                Icon(
                    painter = painterResource(id = R.drawable.outline_add_24),
                    contentDescription = "Add game",
                    tint = Color.White
                )
            }
        }
    )
}

@Preview
@Composable
fun TopBarPreview() {
    TopBar()
}
