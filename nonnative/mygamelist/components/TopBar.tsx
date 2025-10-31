import {Image, TouchableOpacity} from "react-native";
import {Link} from "expo-router";

const TopBar = () => {
    return (
        <Link href={"/add_update"} asChild>
            <TouchableOpacity className="bg-custom_gray h-24  flex justify-center items-end">
                <Image source={require("@/assets/images/add-icon.png")} className="w-8 h-8 mr-4 mt-4"/>
            </TouchableOpacity>
        </Link>
    )
}

export default TopBar;