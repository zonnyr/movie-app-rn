import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    movie: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    movieNews: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newMovies:{
    },
    news: {
        marginTop: 10,
    },
    newsTitle: {
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 22,
    },
    card:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10
    },
    imageNews: {
        width: "100%",
        height: "100%"
    },
    imagePopular: {
        width: 120,
        height: 200,
        borderRadius: 10
    },
    imageCarouselMulti: {
        width: "85%",
        height: 170,
        borderRadius: 20
    },
    viewPoster:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        textShadowRadius: 10,
    },
    poster:{
        width: '100%',
        height: 500,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    titleCarouselMulti: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 16,
    },
    genres: {
        flexDirection: 'row',
        marginHorizontal: 10,
    }, 
    genre: {
        fontSize: 12,
        color: '#8967a5',
    },
    genreMovie: {
        color: '#8967a5',
        marginRight: 20,
    },
    genresHome: {
        marginTop: 5,
        marginBottom: 50,
    },
    genresList: {
        marginTop: 5,
        marginBottom: 15,
        paddingHorizontal: 20,
        padding: 10,
    },
    genresListText: {
        marginRight: 20,
        fontSize: 16,
    },
    modal: {
        backgroundColor: "#000000",
        height: '120%',
        alignItems: 'center',
    },
    close: {
        backgroundColor: '#1ea1f2',
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        bottom: 100
    },
    viewPlay: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    play: {
        backgroundColor: '#fff',
        marginTop: -40,
        marginRight: 30,
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    video: {
        alignSelf: 'stretch',
        height: 300
    },
    viewInfo: {
        marginHorizontal: 20,
    },
    viewGenres: {
        flexDirection: 'row',
    },
    viewRating: {
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewRatingPopular: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    overview: {
        marginHorizontal: 20,
        marginTop: 20,
        textAlign: 'justify',
        color: '#8967a5',
    },
    left: {
        marginRight: 20,
    },
    right: {
        marginLeft: 20
    },
    loadMoreContainer: {
        paddingTop: 10,
        paddingBottom: 30,
    },
    loadMore: {
        backgroundColor: 'transparent'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    input: {
        marginTop: -3,
        backgroundColor: '#15212b'
    }
})