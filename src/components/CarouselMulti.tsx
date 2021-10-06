import React from 'react'
import { View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { Title } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel';
import { styles } from '../theme/appTheme';
import { BASE_PATH_IMG } from '../utils/constants';

const { width } = Dimensions.get('window')
const ITEM_WIDTH = Math.round(width * 0.3)

const CarouselMulti = ({data, navigation}: any) => {



    return (
        <Carousel
            layout='default'
            data={data}
            renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
            sliderWidth={width}
            itemWidth={ITEM_WIDTH}
            firstItem={1}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
        />
    )
}

export default CarouselMulti

const RenderItem = ({data, navigation}: any) => {

    const { id, title, poster_path } = data.item
    const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`
    
    const onNavigation = (id: number) => {
        navigation.navigate('movie', { id })
    }
    
    return (
        <TouchableWithoutFeedback
            onPress={() => onNavigation(id)}
        >
            <View
                style={styles.card}
            >
                <Image
                    style={styles.imageCarouselMulti}
                    source={{uri: imageUrl}}
                />
                <Title style={styles.titleCarouselMulti} numberOfLines={1}>
                    {title}
                </Title>
            </View>
        </TouchableWithoutFeedback>
    )

}