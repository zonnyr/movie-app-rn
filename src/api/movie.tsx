import { API_HOST, API_KEY, LANG } from '../utils/constants';
import { Genre, Genres } from '../interfaces/Props';

export const getNewsMoviesApi = (page: Number = 1) => {
    const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`

    return fetch(url).then((response) => {
        return response.json()
    }).then((result)=> {
        return result
    })
}

export const getGenreMoviesApi = (idGenre: Number[]) => {
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`

    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result: Genres) => {
        const arrayGenres: string[] = []
        idGenre.forEach((id: Number) => {
            result.genres.forEach((item: Genre) => {
                if (item.id === id) arrayGenres.push(item.name)
            })
        });
        return arrayGenres
    })

}

export const getAllGenresApi = () => {
    
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`

    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((result => {
            return result
        }))
}

export const getGenresMoviesApi = (idGenres: Number) => {
    const url = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=${idGenres}&language=${LANG}`
    
    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((result => {
            return result
        }))

}

export const getMovieByIdApi = (idMovie: Number) => {

    const url = `${API_HOST}/movie/${idMovie}?api_key=${API_KEY}&language=${LANG}`
    
    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((result => {
            return result
        }))

}

export const getVideoMovieApi = (idMovie: Number) => {

    const url = `${API_HOST}/movie/${idMovie}/videos?api_key=${API_KEY}&language=${LANG}`
    
    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((result => {
            return result
        }))

}

export const getPoularMoviesApi = (page: Number = 1) => {

    const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`
    
    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((result => {
            return result
        }))

}

export const getSearchMovieApi = (search: string) => {

    const url = `${API_HOST}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${search}`
    
    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((result => {
            return result
        }))

}