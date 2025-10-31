import {Image, Text, TouchableOpacity} from "react-native";
import {Link} from "expo-router";
import {memo} from "react";

function GameCard({game}: { game: Game}) {
    return(
        <Link href={`/game/${game.id}`} asChild>
            <TouchableOpacity className="bg-custom_gray mx-2 my-2 w-[280px] rounded-xl p-2">
                <Text className="text-white text-sm">{game.name}</Text>
                <Image source={{uri: game.image}} className="w-fit h-40" resizeMode="contain"/>
            </TouchableOpacity>
        </Link>
    )
}

export default memo(GameCard);