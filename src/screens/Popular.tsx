import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Text, Title, Button } from 'react-native-paper'
import { Rating } from 'react-native-ratings';
import { getPoularMoviesApi } from '../api/movie';
import usePrefences from '../hooks/usePrefences';
import { styles } from '../theme/appTheme';
import { BASE_PATH_IMG } from '../utils/constants';
// import noImage from '../assets/img/default-imgage.png';
// import starDark from '../assets/img/starDark.png'
// import starLight from '../assets/img/starLight.png'

const Popular = ({navigation}: any) => {

    const [movies, setMovies] = useState<any>([])
    const [showBtnMore, setShowBtnMore] = useState(true)
    const [page, setPage] = useState(1)

    const { theme } = usePrefences()

    useEffect(() => {
        getPoularMoviesApi(page).then((response) => {
            const totalPage = response.total_pages
            if (page < totalPage) {
                if(!movies) {
                    setMovies(response.results)
                }else {
                    setMovies([...movies, ...response.results])
                }
            }else {
                setShowBtnMore(false)
            }
        })
    }, [page])

    return (
        <ScrollView>
            {
                movies.map(( movie:any, index:number)=> (
                    <Movie 
                        key={index} 
                        movie={movie}
                        theme={theme}
                        navigation={navigation}
                    />
                ))
            }
            {showBtnMore && (
                <Button
                    mode='contained'
                    contentStyle={styles.loadMoreContainer}
                    style={styles.loadMore}
                    labelStyle={{color: theme === 'dark' ? '#fff' : '#000' }}
                    onPress={() => setPage(page + 1)}
                >
                    Cargar mas...
                </Button>
            )}
        </ScrollView>
    )
}

export default Popular

const Movie = ({movie, theme, navigation}: any) => {

    const { id, poster_path, title, release_date, vote_count, vote_average } = movie

    const goMovie = () => {
        navigation.navigate('movie', {id})
    }

    return (
        <TouchableWithoutFeedback
            onPress={goMovie}
        >
            <View style={styles.movie}>
                <View
                    style={styles.left}
                >
                    <Image
                        style={styles.imagePopular}
                        source={
                            poster_path 
                            ? {uri:`${BASE_PATH_IMG}/w500${poster_path}`} 
                            // : noImage
                            : {uri:``}
                        }
                    />
                </View>
                <View
                    style={styles.right}
                >
                    <Title>{title}</Title>
                    <Title>{release_date}</Title>
                    <MovieeRating 
                        voteCount={vote_count} 
                        voteAverage={vote_average} 
                        theme={theme} 
                    />
                </View>
            </View>
        

        </TouchableWithoutFeedback>
    )

}

const MovieeRating = ({theme, voteCount, voteAverage}: any) => {
    
    const media = voteAverage / 2

    return (
        <>
        <View style={[
            styles.viewRating,
            {marginHorizontal: 0}
        ]}>
            <Rating
                type='custom'
                // ratingImage={theme === 'dark' ? starDark : starLight}
                ratingColor='#ffc205'
                ratingBackgroundColor={theme === 'dark' ? '#192734' : '#f0f0f0'}
                startingValue={media}
                imageSize={20}
                style={{marginRight:15}}
            />
            <Text style={{fontSize: 16, marginRight:5}}>
                {media}
            </Text>
        </View>
        <View>
            <Text style={{fontSize: 12, color: '#8697a5', marginTop: 5}}>
                {voteCount} votos
            </Text>

        </View>
        </>
    )
}