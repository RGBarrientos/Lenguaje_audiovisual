class Item {
    private name: string;
    private price: number;
    private releaseDate: string;

    constructor(name: string, price: number, releaseDate: string) {
        this.name = name;
        this.price = price;
        this.releaseDate = releaseDate;
    }

    public getName(): string {
        return this.name;
    }
    public setName(nameNew: string) {
        return this.name = nameNew;
    }
    public getPrice(): number {
        return this.price;
    }
    public getReleaseDate(): string {
        return this.releaseDate;
    } 
}

class VideoGameOC extends Item {
    private genre: string;
    constructor(name: string, price: number, releaseDate: string, genre: string) {
        super(name, price, releaseDate);
        this.genre = genre;
    }

    public getGenre(): string {
        return this.genre;
    }
    public setGenre(genreNew: string) {
        this.genre = genreNew;
    }
}

class Movie extends Item {
    private director: string;

    private duration: number; //Duracion

    constructor(name: string, price: number, releaseDate: string, director: string, duration: number) {
        super(name, price, releaseDate);
        this.director = director;

        this.duration = duration;
    }

    public setDirector(directorNew: string){
        this.director = directorNew;
    }

    public getDirector(): string {
        return this.director;
    }

    public setDuration(durationNew: number){
        this.duration = durationNew;
    }

    public getDuration(): number {
        return this.duration;
    }
}

class VideoGameMoviesStore extends ItemStoreGetter{
    private videoGames: VideoGameOC[];
    private movies: Movie[];
    constructor(videoGames: VideoGameOC[], movies: Movie[]) {
        super();
        this.videoGames = videoGames;
        this.movies = movies;
    }
}

////////////////////////

class MovieStore{
    private Movies: Movie[];

    constructor(movies: Movie[]){
        this.Movies = movies;
    }

    getByDirector(director: string, items: Movie[]){
        return items.filter((item) => item.getDirector() === director);
    }

    getByDuration(duration: number, items: Movie[]){
        return items.filter((item) => item.getDuration() === duration);
    }

    getByDirectorAndDuration(director: string, duration: number, items: Movie[]){
        var directorR = items.filter((item) => item.getDirector() === director);
        var durationR = items.filter((item) => item.getDuration() === duration);
        return {directorR, durationR};
        //return items.filter((item) => ((item.getDirector() === director) && (item.getDuration() === duration)));
    }
}

class VideoGameStoreWithoutMovies extends MovieStore{
    private videoGames: VideoGameOC[];

    constructor(videoGames: VideoGameOC[], movies: Movie[]){
        super(movies);
        this.videoGames = videoGames;
    }

    getGameByGenere(genre: string, items: VideoGameOC[]){
        return items.filter((item) => item.getGenre() === genre);
    }
}
