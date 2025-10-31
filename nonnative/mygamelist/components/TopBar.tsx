import {View, Image} from "react-native";

const TopBar = () => {
    return (
        <View className="bg-custom_gray h-24  flex justify-center items-end">
            <Image source={require("@/assets/images/add-icon.png")} className="w-8 h-8 mr-4 mt-4"/>
        </View>
    )
}

export default TopBar;