import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findMoviesByTitle, retrieveMovies } from "../Slices/movies";
import { Button, Form } from "react-bootstrap";

const Searchbox = () => {
    const [searchTitle, setSearchTitle] = useState("")
    const [isLoading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const onChangeSearchTitle = e => {
        setSearchTitle(e.target.value)
    }

    const findByTitle = (e) => {
        e.preventDefault()
        setLoading(true)

        if(searchTitle !== "") {
            dispatch(findMoviesByTitle({ title: searchTitle })).then(() => {
                setLoading(false)
            })
        } else {
            dispatch(retrieveMovies()).then(() => {
                setLoading(false)
            })
        }
    }

    return(
        <Form onSubmit={findByTitle} className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Search by Title" onChange={onChangeSearchTitle} value={searchTitle}/>
            <Button type="submit" variant="outline-success" disabled={isLoading}>{ isLoading ? 'Loading...' : 'Search' }</Button>
        </Form>
    )
}

export default Searchbox