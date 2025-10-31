import {Image, TouchableOpacity} from "react-native";
import {router} from "expo-router";

const TopBar = () => {
    return (
        <TouchableOpacity className="bg-custom_gray h-24 flex justify-center items-end" onPress={() => router.push('/add_update/-1')}>
            <Image source={require("@/assets/images/add-icon.png")} className="w-8 h-8 mr-4 mt-4"/>
        </TouchableOpacity>
    )
}

export default TopBar;