import http from "../http-common";

const getAll = () => {
    return http.get('?apikey=a3d32dd0&s=marvel')
}

const findByTitle = title => {
    return http.get(`?apikey=a3d32dd0&s=${title}`)
}

const MovieService = {
    getAll,
    findByTitle
}

export default MovieService