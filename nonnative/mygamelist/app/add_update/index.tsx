import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {TextInput, Text, TouchableOpacity, Image, View} from "react-native";
import {useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomBar from "@/components/BottomBar";

export default function AddUpdate({game}: { game?: Game}) {
    const [title, setTitle] = useState(game?.name || "");
    const [description, setDescription] = useState(game?.description || "");
    const [releaseDate, setReleaseDate] = useState(game?.release_date || "");
    const [price, setPrice] = useState(game?.price.toString() || "");
    const [image, setImage] = useState(game?.image || "");

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setOpen(false);
        setDate(currentDate);
        setReleaseDate(currentDate.toISOString().split('T')[0]);
    };

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
                        <TouchableOpacity>
                            <Image source={require("@/assets/images/add-icon.png")} className="w-16 h-16"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <BottomBar/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}