import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { getSearchMovieApi } from '../api/movie'
import { styles } from '../theme/appTheme'
import { BASE_PATH_IMG } from '../utils/constants'

const { width } = Dimensions.get('window')

const Search = ({navigation}: any) => {

    const [movies, setMovies] = useState<any>([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (search.length > 2) {
            getSearchMovieApi(search).then((response)=>{
                setMovies(response.results)
            })
        }
    }, [search])
    
    return (
        <SafeAreaView>
            <Searchbar
                placeholder="Busca tu pelicula"
                // icon="arrow-left"
                style={styles.input}
                onChangeText={(e) => setSearch(e)}
                value={search}
            />
            <ScrollView>
                <View style={styles.container}>
                    {
                        movies.map((movie: any,index: number) => (
                            <Movie key={index} movie={movie} navigation={navigation} />
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search

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
                {width: width / 2}
            ]}>
                {poster_path ? (
                    <Image 
                        style={styles.imageNews} 
                        source={{uri: `${BASE_PATH_IMG}/w500${poster_path}`}} 
                    />
                ) : (
                    <Text>{title}</Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}