package com.example.app.ui.view.add_edit_scene

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color

@Composable
fun TextFieldItem(text: String, value: String, onValueChange: (String) -> Unit) {
    Column(modifier = Modifier.fillMaxWidth()) {
        Text(text = text, color = Color.White)
        TextField(value = value, onValueChange = { newValue -> onValueChange(newValue) }, modifier = Modifier.fillMaxWidth())
    }
}