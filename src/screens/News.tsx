import React, {useState, useEffect} from 'react'
import { Dimensions, Image, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { getNewsMoviesApi } from '../api/movie'
import { styles } from '../theme/appTheme'
import { BASE_PATH_IMG } from '../utils/constants'
import usePrefences from '../hooks/usePrefences'
// import starDark from '../assets/img/starDark.png'
// import starLight from '../assets/img/starLight.png'

const { width } = Dimensions.get('window')

const News = ({navigation}: any) => {

    const [movies, setMovies] = useState<any>([])
    const [page, setPage] = useState(1)
    const [showBtnMore, setShowBtnMore] = useState(true)
    const {theme} = usePrefences()

    useEffect(() => {
        getNewsMoviesApi(page).then((response) => {
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
            <View style={styles.container}>
                {
                    movies.map((movie: any, index: number) => (
                        <Movie key={index} movie={movie} navigation={navigation} />
                    ))
                }
            </View>
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

export default News

const Movie = ({movie, navigation}: any) => {
    
    const { id, title, poster_path } = movie

    const goMovie = () => {
        navigation.navigate('movie', {id})
    }

    return (
        <TouchableWithoutFeedback
            onPress={goMovie}
        >
            <View style={[
                styles.movieNews,
                {width: width/2}
            ]}>
                {poster_path ? (
                    <Image
                        style={styles.imageNews}
                        source={{uri: `${BASE_PATH_IMG}/w500${poster_path}`}}
                    />
                ) : (
                    <Text>{title}</Text>
                )
                }
            </View>
        
        </TouchableWithoutFeedback>
    )
}
