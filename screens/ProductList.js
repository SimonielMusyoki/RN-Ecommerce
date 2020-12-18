import React from 'react';
import { Button } from 'react-native';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES, FONTS } from '../constants';

const ProductList = ({route, navigation}) => {

    const { data } = route.params;
    
    const renderItem = ({ item }) => {
        return (
            <View style={{ 
                width: SIZES.width *0.5,
                height: 370, 
                
            }}>
                <TouchableOpacity 
                    style={{
                        marginHorizontal: SIZES.padding * 0.25,
                        backgroundColor: COLORS.white,
                        justifyContent: 'center', 
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate("Details", {
                        data: item
                    })}
                >
                    <Image 
                        source={item.image}
                        resizeMode="contain"
                        style={{
                            width: SIZES.width*0.4,
                            height: SIZES.height * 0.3
                        }}
                    />
                    <Text style={{...FONTS.body2, color: COLORS.black, textAlign: "center"}}>{item.name}</Text>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>{item.price_new}</Text>
                    <Text style={{...FONTS.body3, color: COLORS.black,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{item.price_old}</Text>

                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        backgroundColor: COLORS.primary,
                        padding: SIZES.padding
                    }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h4}}>{ item.discount}</Text>
                    </View>
                    <View style={{ marginVertical: SIZES.padding}}>
                        <Text>🌟🌟🌟🌟⭐️ 4.3 (1301)</Text>
                    </View>
                    <View style={{
                        paddingBottom: SIZES.padding
                    }}>
                        <Button
                            onPress={()=> console.log("Add to cart click")}
                            title="Add to Cart"
                            color={COLORS.primary}
                            />
                    </View>
                    
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ flex: 1}}>
                <FlatList 
                    data={data}
                    keyExtractor={(item, index)=>`${item.brand}-${index}`}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    )
}

export default ProductList;