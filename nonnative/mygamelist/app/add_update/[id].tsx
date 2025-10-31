import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {TextInput, Text, TouchableOpacity, Image, View} from "react-native";
import {useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomBar from "@/components/BottomBar";
import {useGames} from "@/assets/values/store";
import {router, useLocalSearchParams} from "expo-router";

export default function AddUpdate() {
    const { id } = useLocalSearchParams();

    const { addGame, updateGame, getGameById } = useGames();
    const game = id ? getGameById(Number(id)) : undefined;

    const [title, setTitle] = useState(game?.name || "");
    const [description, setDescription] = useState(game?.description || "");
    const [releaseDate, setReleaseDate] = useState(game?.release_date || "");
    const [price, setPrice] = useState(game?.price.toString() || "");
    const [image, setImage] = useState(game?.image || "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2592160/header.jpg?t=1761753863");

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setOpen(false);
        setDate(currentDate);
        setReleaseDate(currentDate.toISOString().split('T')[0]);
    };

    const handleSubmit = () => {
        const inputs = [title, description, releaseDate, price, image];

        for (const input of inputs) {
            if (!input) {
                alert('Please fill in all fields');
                return;
            }
        }

        if (title.length < 3) {
            alert('Title must be at least 3 characters long');
            return;
        }

        if (description.length < 5) {
            alert('Description must be at least 5 characters long');
            return;
        }

        const selectedPrice = Number(price);

        if (isNaN(selectedPrice)) {
            alert('Price must be a number');
            return;
        }

        if (selectedPrice < 0) {
            alert('Price must be a positive number');
            return;
        }

        if (game !== undefined) {
            updateGame({id: game.id, name: title, description: description, release_date: releaseDate, price: selectedPrice, image: image});
        }
        else{
            addGame({id: -1, name: title, description: description, release_date: releaseDate, price: selectedPrice, image: image});
        }
        router.back();
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-black">
                <View className="flex-1 px-4 pt-4">
                    <Text className="text-white text-lg mb-2">Title:</Text>
                    <TextInput value={title} onChangeText={setTitle} className="bg-custom_gray text-white text-base p-3 rounded mb-4" placeholderTextColor="#666"/>
                    <Text className="text-white text-lg mb-2">Description:</Text>
                    <TextInput value={description} onChangeText={setDescription} className="bg-custom_gray text-white text-base p-3 rounded mb-4" placeholderTextColor="#666" multiline/>
                    <Text className="text-white text-lg mb-2">Image URL:</Text>
                    <TextInput value={image} onChangeText={setImage} className="bg-custom_gray text-white text-base p-3 rounded mb-4" placeholderTextColor="#666"/>
                    <Text className="text-white text-lg mb-2">Release Date:</Text>
                    <TouchableOpacity className="bg-custom_gray p-3 rounded mb-4" onPress={() => setOpen(true)}>
                        <Text className="text-white text-base">
                            {releaseDate || 'Select Date'}
                        </Text>
                    </TouchableOpacity>
                    {open && (
                        <DateTimePicker value={date} mode="date" display="default" onChange={onChange}/>
                    )}
                    <Text className="text-white text-lg mb-2">Price:</Text>
                    <TextInput value={price} onChangeText={setPrice} className="bg-custom_gray text-white text-base p-3 rounded mb-4" placeholderTextColor="#666" keyboardType="numeric"/>
                    
                    <View className="flex-1 justify-end items-end mb-4">
                        <TouchableOpacity onPress={handleSubmit}>
                            <Image source={require("@/assets/images/add-icon.png")} className="w-16 h-16"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <BottomBar/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}