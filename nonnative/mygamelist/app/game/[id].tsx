import React from "react";
import {Text, View, Image, TouchableOpacity, Alert} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {useGames} from "@/assets/values/store";

export default function Game(){
    const { id } = useLocalSearchParams();
    const { getGameById, removeGame } = useGames();

    const game = getGameById(Number(id));

    const handleDelete = () => {
        Alert.alert('Delete', 'Are you sure you want to delete this game?', [
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
            },
            {text: 'OK', onPress: () => { removeGame(game!); router.back(); }},
        ]);
    }

    if (!game) {
        return (
            <View>
                <Text>Game not found</Text>
            </View>
        )
    }

    return (
        <View className="flex-1 bg-black pt-14">
            <Image source={{uri: game.image}} className="w-full h-60 px-4" resizeMode="contain"/>
            <View className="px-4">
                <Text className="text-white text-3xl font-bold mt-4">{game.name}</Text>
                <Text className="text-white text-lg mt-2">{game.description}</Text>
                <Text className="text-white text-base mt-2">Release Date: {game.release_date}</Text>
                <Text className="text-white text-base mt-2">Price: ${game.price}</Text>
                <View className="flex-row justify-between mt-4">
                    <TouchableOpacity className="bg-red-600 px-4 py-2 rounded" onPress={(handleDelete)}>
                        <Text className="text-white text-sm">Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-600 px-4 py-2 rounded" onPress={() => router.push(`/add_update/${game?.id || -1}`)}>
                        <Text className="text-white text-sm">Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}