import React from 'react';
import {
    View,
    Text,
    Image,
    ToastAndroid,
    TouchableOpacity
} from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants';

const ProductDetails = ({route, navigation}) => {

    const { data } = route.params;
    const showToastWithGravity = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Successfully Added to Cart",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        );
      };
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={data.image}
                resizeMode="contain"
                style={{
                    height: SIZES.height* 0.4,
                    width: SIZES.width *0.9
                }}
            />
            <Text style={{...FONTS.body1, paddingVertical: SIZES.padding}}> {data.name}</Text>
            <View style={{ flexDirection: 'row'}}>
                <Text>By</Text>
                <Text style={{...FONTS.h1}}> {data.brand}</Text>
            </View>
            <View>
                <Text style={{ color: COLORS.primary, ...FONTS.h2, paddingVertical: SIZES.padding}}>NOW: {data.price_new}</Text>
                <Text style={{ textDecorationLine:"line-through", paddingBottom: SIZES.padding, ...FONTS.body3}}>WAS: {data.price_old}</Text>
            </View>
            <TouchableOpacity onPress={showToastWithGravity }>
                <View style={{ backgroundColor: COLORS.primary, borderRadius: SIZES.radius,marginVertical: SIZES.padding}}>
                    <Text style={{ paddingVertical: SIZES.padding, paddingHorizontal: SIZES.radius * 2, color: COLORS.white, ...FONTS.h2}}>Add To Cart</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetails;