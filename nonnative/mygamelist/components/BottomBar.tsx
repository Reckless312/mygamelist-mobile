import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function BottomBar() {
    return (
        <View className="w-full h-20 bg-[#0F0F14] relative">
            <Svg width="100%" height="80" viewBox="0 0 400 80" className="absolute top-0 left-0">
                <Path d="M0,40 C100,-40 300,120 400,40 L400,80 L0,80 Z" fill="#2F25B1"/>
            </Svg>
        </View>
    );
}
