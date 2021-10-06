import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Title } from 'react-native-paper';
import { getNewsMoviesApi, getAllGenresApi, getGenresMoviesApi } from '../api/movie';
import CarouselVertical from '../components/CarouselVertical';
import CarouselMulti from '../components/CarouselMulti';
import { styles } from '../theme/appTheme';
import { PropsHomeScreen } from '../interfaces/Props';

const Home = ({navigation}: PropsHomeScreen) => {

    const [newMovies, setNewMovies] = useState(null)
    const [genresList, setGenresList] = useState([])
    const [genresSelected, setGenresSelected] = useState(28)
    const [genresMovies, setGenresMovies] = useState(null)


    useEffect(() => {
        
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results)
        })

        getAllGenresApi().then((response) => {
            setGenresList(response.genres)
        })

    }, [])

    useEffect(() => {

        getGenresMoviesApi(genresSelected).then((response) => {
            setGenresMovies(response.results)
        })

    }, [genresSelected])

    const onChangeGenre = (newGenreId: any) => {
        setGenresSelected(newGenreId)
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.newMovies}>
                {
                    newMovies && (
                        <View style={styles.news}>
                            <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
                            <CarouselVertical data={newMovies} navigation={navigation} />
                        </View>
                    )
                }
            </View>

            <View style={styles.genresHome}>
                <Title style={styles.newsTitle} >Peliculas por generos</Title>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={styles.genresList}
                >
                    {
                        genresList.map((genre: any) => (
                            <Text 
                                key={genre.id}
                                style={[
                                    styles.genresListText,
                                    {
                                        color: genre.id !== genresSelected ? '#8697a5' : '#ffffff'
                                    }
                                ]}
                                onPress={() => onChangeGenre(genre.id)}
                            >
                                {genre.name}
                            </Text>
                        ))
                    }
                </ScrollView>
                {genresMovies && (
                    <CarouselMulti 
                        data={genresMovies}
                        navigation={navigation}
                    />
                )}
            </View>

        </ScrollView>
    )
}

export default Home
