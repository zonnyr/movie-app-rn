import React, { useState, useEffect} from 'react'
import { View, Image, ScrollView } from 'react-native'
import { IconButton, Text, Title } from 'react-native-paper';
import { getMovieByIdApi } from '../api/movie';
import ModalVideo from '../components/ModalVideo';
import { Rating } from 'react-native-ratings';
import { styles } from '../theme/appTheme';
import { BASE_PATH_IMG } from '../utils/constants';
import usePrefences from '../hooks/usePrefences';
// import starDark from '../assets/img/starDark.png'
// import starLight from '../assets/img/starLight.png'

const Movie = ({route}: any) => {

    const { id } = route.params
    const [movie, setMovie] = useState(null)
    const [showVideo, setShowVideo] = useState(false)
    const [videoOverview, setVideoOverview] = useState('')
    const [videoDate, setVideoDate] = useState('')

    useEffect(() => {

        getMovieByIdApi(id).then((response) => {
            setMovie(response)
            setVideoOverview(response.overview)
            setVideoDate(response.release_date)
        })

    }, [])

    if (!movie) return null

    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <MovieImage
                    posterPath={movie}
                />
                <MovieTrailler setShowVideo={setShowVideo} />
                <MovieTitle
                    movie={movie}
                />
                <MovieRating
                    vote={movie}
                />
                <Text
                    style={styles.overview}
                >
                    {videoOverview}
                </Text>
                <Text
                    style={[
                        styles.overview,
                        {marginBottom: 30}
                    ]}
                >
                    Fecha de lanzamiento: {videoDate}
                </Text>
            </ScrollView>
            <ModalVideo
                show={showVideo}
                setShow={setShowVideo}
                idMovie={id}
            />
        </>
    )
}

export default Movie

const MovieImage = ({posterPath}: any) => {
    
    const {poster_path} = posterPath
    
    return (
        <View
        style={styles.viewPoster}
        >
            <Image
                style={styles.poster}
                source={{uri: `${BASE_PATH_IMG}/w500${poster_path}`}}
            />
        </View>
    )

}

const MovieTrailler = ({setShowVideo}: any) => {

    return (
        <View
            style={styles.viewPlay}
        >
            <IconButton 
                icon='play'
                color='#000'
                size={30}
                style={styles.play}
                onPress={() => setShowVideo(true)}
            />
        </View>
    )

}

const MovieTitle = ({movie}: any) => {
    
    return (
        <View style={styles.viewInfo}>
            <Title>{movie.title}</Title>
            <View style={styles.viewGenres}>
                {movie.genres.map((genre: any) => (
                    <Text
                        key={genre.id}
                        style={styles.genreMovie}
                    >
                        {genre.name}
                    </Text>
                ))}
            </View>
        </View>
    )

}

const MovieRating = ({vote}: any) => {

    const {vote_count, vote_average} = vote
    const media = vote_average / 2

    const { theme } = usePrefences()

    return (
        <View style={styles.viewRating}>
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
            <Text style={{fontSize: 12, color: '#8697a5'}}>
                {vote_count} votos
            </Text>
        </View>
    )
}