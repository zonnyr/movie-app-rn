export interface PropsNewMovies {
    navigation: Navigation;
    data: Datum[];
}

export interface Datum {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
}

// #########################

export interface PropsNewMovies2 {
    navigation: Navigation;
    data: Data;
}

export interface Data {
    item:  Item;
    index: number;
}

export interface Item {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

// ##############################333

export interface Genres {
    genres: Genre[];
}

export interface Genre {
    id:   number;
    name: string;
}

// ##############################

export interface PropsHomeScreen {
    navigation: Navigation;
    route:      Route;
}

export interface Navigation {
}

export interface Route {
    key:  string;
    name: string;
}
