import {FlatList, View} from "react-native";
import {useGames} from "@/assets/values/store";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import GameCard from "@/components/GameCard";
import {useCallback} from "react";

export default function Index() {
    const {games} = useGames();

    const renderItem = useCallback(({item}: {item: Game}) => (
        <GameCard game={item}/>
    ), []);

  return (
    <View className="flex-1 bg-black">
        <TopBar/>
        <FlatList
            data={games}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{alignItems: "center"}}
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={50}
            initialNumToRender={10}
            windowSize={21}>
        </FlatList>
        <BottomBar/>
    </View>
  );
}
