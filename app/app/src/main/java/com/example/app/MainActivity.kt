package com.example.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.app.ui.view.add_edit_scene.AddEditGameScene
import com.example.app.ui.view.game_scene.GameScene
import com.example.app.ui.view.home_scene.HomeScreen
import com.example.app.util.Routes
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            val navController = rememberNavController()
            NavHost(navController = navController, startDestination = Routes.GAME_LIST) {
                composable(Routes.GAME_LIST){
                    HomeScreen(onNavigate = { event ->
                        navController.navigate(event.route)
                    })
                }
                composable(Routes.ADD_GAME + "?gameId={gameId}", arguments = listOf(
                    navArgument("gameId") {
                        type = NavType.IntType
                        defaultValue = -1
                    }
                )){
                    AddEditGameScene(onPopBackStack = { navController.popBackStack() })
                }
                composable(Routes.GAME_DETAIL + "?gameId={gameId}", arguments = listOf(
                    navArgument("gameId") {
                        type = NavType.IntType
                        defaultValue = -1
                    })){
                    GameScene(onNavigate = {event -> navController.navigate(event.route)},
                        onPopBackStack = { navController.popBackStack() })
                }
            }
        }
    }
}
