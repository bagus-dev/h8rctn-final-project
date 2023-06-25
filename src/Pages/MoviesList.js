import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveMovies } from "../Slices/movies";

const MoviesList = () => {
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const initFetch = useCallback(() => {
        dispatch(retrieveMovies())
    }, [dispatch])

    useEffect(() => {
        initFetch()
    }, [initFetch])

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    {
                        movies.Response === "True" &&
                        
                        movies.Search.map((movie, index) => (
                            <div className="col-md-3 mb-5 d-flex align-items-stretch" key={index}>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={movie.Poster} className="img-fluid rounded-start" alt="Poster" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{ movie.Title }</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        movies.Response !== "True" &&

                        <div>
                            <h3>{ movies.Error }</h3>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default MoviesList