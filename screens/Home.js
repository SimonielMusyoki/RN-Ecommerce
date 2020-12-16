import React from 'react';
import { SearchBar } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
    Platform
} from 'react-native';

import {
    COLORS,
    FONTS,
    icons,
    images,
    SIZES,
} from '../constants'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {

    const [searchText, setSearchText] = React.useState('');
    const imageList = [
        images.photo_cover_1,
        images.photo_cover_9,
        images.photo_cover_2,
        images.photo_cover_8,
        images.photo_cover_3,
        images.photo_cover_4,
        images.photo_cover_5,
        images.photo_cover_6,      
        
    ];

    const brands = [
        {
            id: 1,
            name: "Ferrari",
            logo: images.ferari
        },
        {
            id: 2,
            name: "Lamborghini",
            logo: images.lamborghini
        },
        {
            id: 4,
            name: "Tesla",
            logo: images.tesla
        },
        {
            id: 3,
            name: "Bughatti",
            logo: images.bughatti
        },
        

    ]

    const hotCategories = [
        {
            image: images.product_1,
            description: "Honda 125V",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
        {
            image: images.product_6,
            description: "Lifan 1289-H",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
        {
            image: images.product_3,
            description: "Yamaha 2019 C5",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
        {
            image: images.product_4,
            description: "TVS 126V Horse",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
    ];

    const cars = [
        {
            image: 'https://cdn.motor1.com/images/mgl/x4oQv/s3/ferrari-portofino-m.jpg',
            description: "Ferrari Portofino M",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
        {
            image: 'https://cdn.motor1.com/images/mgl/01yvV/s6/lamborghini-sc20.webp',
            description: "Lamborghini SC20",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
        {
            image: 'https://media.ford.com/content/fordmedia/feu/de/de/news/2017/05/12/racing-to-the-future--how-ford-created-the-gt-supercar-to-test-t/jcr:content/image.img.881.495.jpg/1500234421559.jpg',
            description: "Ford Mustang Mach-E",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
        {
            image: 'https://i.insider.com/5136501b69beddf456000025?width=300&format=jpeg&auto=webp',
            description: " Latest Ferrari Supercar",
            rating: 4.5,
            price_new: "$1,250",
            price_old: "$1,400",
            fulfiled: 'Yes'
        },
    ];

    function renderHeader(){
        return (
            <View>
                <SearchBar 
                placeholder="Search"
                lightTheme={true}
                inputContainerStyle={{
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
                style= {{
                    borderRadius: SIZES.radius,
                    
                }}
                onChangeText={(value)=> setSearchText(value)}
                />
            </View>
        )
    }

    function renderSlider() {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity style={{ 
                    height: 250, 
                    overflow:'hidden',
                    backgroundColor: COLORS.darkGray2,
                    paddingHorizontal: SIZES.radius * 0.2,
                    paddingVertical: SIZES.radius * 0.05,
                    marginBottom: -40
                    }}
                >
                    <Image 
                        source={item} 
                        resizeMode="cover"

                        style={{ 
                            height: 200, 
                            width: SIZES.width * 0.8, 
                            borderRadius: SIZES.radius * 0.5,
                            paddingBottom: -10,
                         }}
                    />
                </TouchableOpacity>
                
            )
        }
            
        
        return (
            <FlatList 
                data={imageList}
                keyExtractor = {(item, index) => Math.random() * index}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        )
    }

    function renderCategories() {
        return (
            <View style={{ 
                flexDirection: "row", 
                justifyContent: 'space-between',
                backgroundColor: COLORS.darkGray2,
                padding: SIZES.padding,
                elevation: 15,
                margin: SIZES.padding * 0.5,
                borderRadius: SIZES.radius,
                padding: SIZES.padding * 2,
                }}>
                <TouchableOpacity style={{
                    width: SIZES.width * 0.25 - 8,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>                    
                        <Image 
                            source={icons.car_1} 
                            resizeMode="contain" 
                            style={{
                                height: 100,
                                width: 90,                                
                            }}
                        />
                    </View>

                    <Text style={{ textAlign: 'center', ...FONTS.body2}}>Cars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: SIZES.width * 0.25 - 8,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        borderRadius: 50,
                    }}>                    
                        <Image 
                            source={icons.motor_cycle} 
                            resizeMode="contain" 
                            style={{
                                height: 100,
                                width: 90,                                
                            }}
                        />
                    </View>

                    <Text style={{ textAlign: 'center', ...FONTS.body2}}>Bikes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: SIZES.width * 0.25 - 8,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>                    
                        <Image 
                            source={icons.spare_parts} 
                            resizeMode="contain" 
                            style={{
                                height: 100,
                                width: 90,                                
                            }}
                        />
                    </View>

                    <Text style={{ textAlign: 'center', ...FONTS.body2}}>Parts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: SIZES.width * 0.25 - 8,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>                    
                        <Image 
                            source={icons.fuels_2} 
                            resizeMode="contain" 
                            style={{
                                height: 100,
                                width: 90,                                
                            }}
                        />
                    </View>

                    <Text style={{ textAlign: 'center', ...FONTS.body2}}>Utils</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderHotProducts() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity style={{
                    width: SIZES. width * 0.5 - 20,
                    height: SIZES.height * 0.32,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 6,
                    backgroundColor: COLORS.white
                }}>
                    <Image 
                        source={item.image}
                        resizeMode= "cover"
                        style={{
                            width: SIZES. width * 0.4 - 20,
                            height: SIZES.height * 0.2,
                            borderRadius: SIZES.padding,
                            marginTop: SIZES.radius / 4
                        }}
                    />
                    <Text style={{...FONTS.body3, color: COLORS.black, textAlign: "center"}}>{item.description}</Text>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>{item.price_new}</Text>
                    <Text style={{...FONTS.body3, color: COLORS.black,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{item.price_old}</Text>
                </TouchableOpacity>
            )
        }
            
        

        return (
            <View style={{ justifyContent: "space-around", flexWrap:"wrap", margin: SIZES.padding}}>
                <View style={{ width: SIZES.width, flexDirection: 'row', justifyContent:"space-between"}}>
                    <Text style={{...FONTS.h3, color: COLORS.primary, marginLeft: SIZES.padding}}>HOT BIKES</Text>
                    <TouchableOpacity  style={{marginRight: SIZES.padding * 3}}>
                        <Text style={{...FONTS.h4, color: COLORS.primary,textDecorationLine: 'underline' }}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>
                <View 
                    style={{
                            width: SIZES.width * 0.95,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.white,
                    }}
                >
                    <FlatList 
                        data={hotCategories}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                        
                    />
                </View>
                
            </View>
        )
    }

    function renderBrands() {

        const renderItem = ({item}) => {
            return (
                <View style={{
                    marginHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius
                }}>
                    <TouchableOpacity  style={{
                        height: 80,
                        width: 80,
                        justifyContent: 'center',
                        alignItems:"center"
                    }}>
                    <Image 
                        source={item.logo}
                        resizeMode="contain"
                        style={{
                            width: 70,
                            height: 70,
                        }}
                    />
                </TouchableOpacity>
            </View>
            )
        }

        return (
            <View style={{
                margin: SIZES.padding,
                backgroundColor: COLORS.darkGray2,
                paddingVertical: SIZES.padding,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <FlatList 
                    data={brands}
                    keyExtractor={item=>item.id}
                    renderItem={renderItem}
                    numColumns={4}
                />
            </View>
            
        )
    }

    function renderCars() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity style={{
                    width: SIZES. width * 0.5 - 20,
                    height: SIZES.height * 0.35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 6,
                    backgroundColor: COLORS.white
                }}>
                    <Image 
                        source={{
                            uri: item.image
                        }}
                        resizeMode= "cover"
                        style={{
                            width: SIZES. width * 0.4 - 20,
                            height: SIZES.height * 0.2,
                            borderRadius: SIZES.padding,
                            marginTop: SIZES.radius
                        }}
                    />
                    <Text style={{...FONTS.body3, color: COLORS.black, textAlign: "center"}}>{item.description}</Text>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>{item.price_new}</Text>
                    <Text style={{...FONTS.body3, color: COLORS.black,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{item.price_old}</Text>
                </TouchableOpacity>
            )
        }
            
        

        return (
            <View style={{ justifyContent: "space-around", flexWrap:"wrap", margin: SIZES.padding}}>
                <View style={{ width: SIZES.width, flexDirection: 'row', justifyContent:"space-between"}}>
                    <Text style={{...FONTS.h3, color: COLORS.primary, marginLeft: SIZES.padding}}>Sports Cars</Text>
                    <TouchableOpacity  style={{marginRight: SIZES.padding * 3}}>
                        <Text style={{...FONTS.h4, color: COLORS.primary,textDecorationLine: 'underline' }}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>
                <View 
                    style={{
                            width: SIZES.width * 0.95,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: COLORS.white
                    }}
                >
                    <FlatList 
                        data={cars}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                        
                    />
                </View>
                
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            { renderHeader() }
            { renderSlider() }
            { renderCategories() }
            { renderHotProducts() }
            { renderBrands() }
            { renderCars() }
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == "android" ? 30 : 0,
    }
});

export default Home;
