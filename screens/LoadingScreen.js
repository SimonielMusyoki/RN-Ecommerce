import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { COLORS, SIZES } from '../constants';

const LoadingScreen = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', padding: SIZES.width*0.05, alignItems: 'center'}}>
            <Image 
                source={{ uri: '../assets/ic_launcher.png'}}
                resizeMode="contain"
                style={{
                    width: 72,
                    height: 72,
                }}
            />
            <View style={{ flexDirection:'row', marginBottom: SIZES.radius}}>
                <Text style={{ fontSize: 18 }}>BY</Text>
                <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: COLORS.primary}}>Chancelot</Text>
            </View>
        </View>
        
    )
}

export default LoadingScreen;