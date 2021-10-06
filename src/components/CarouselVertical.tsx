import React, { useState, useEffect } from 'react'
import { View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { Text, Title } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel'
import { getGenreMoviesApi } from '../api/movie';
import { PropsNewMovies } from '../interfaces/Props';
import { styles } from '../theme/appTheme';
import { BASE_PATH_IMG } from '../utils/constants';



const { width } = Dimensions.get('window')
const ITEM_WIDTH = Math.round(width*0.7)

const CarouselVertical = ({data, navigation}: PropsNewMovies) => {
    
    return (
        <Carousel
            layout={'default'}
            data={data}
            renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
            sliderWidth={width}
            itemWidth={ITEM_WIDTH}
        /> 
    )
}

export default CarouselVertical

const RenderItem = ({data, navigation}: any) => {

    const { id, title, poster_path, genre_ids } = data.item
    const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`

    const [genres, setGenres] = useState<any>([])

    useEffect(() => {
        getGenreMoviesApi(genre_ids)
            .then((response: any) => {
                setGenres(response)
            })
    }, [])

    const onNavigation = () => {
        navigation.navigate('movie', { id })
    }

    return (
        <TouchableWithoutFeedback
            onPress={onNavigation}
        >
            <View
                style={styles.card}
            >
                <Image
                    style={styles.image}
                    source={{uri: imageUrl}}
                />
                <Title style={styles.title}>{title}</Title>
                <View
                    style={styles.genres}
                >
                    {
                        genres && (
                            genres.map((genre: String, index: number) => (
                                <Text
                                    key={index}
                                    style={styles.genre}
                                >
                                    {genre}
                                    {index !== genres.length -1 && ', '}
                                </Text>
                            ))
                        )
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}
