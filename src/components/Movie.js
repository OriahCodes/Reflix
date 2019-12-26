import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/movie.css'

class Movie extends Component {

    handleRent = async (event) => {
        let legitRental = await this.props.handleBudget(this.props.movieInfo.isRented)
        if (legitRental) { this.props.handleRent(this.props.movieInfo)}
        
        event.stopPropagation()
        console.log(event.cancelable)

        // event.preventDefault()
    }

    render() {
        let movie = this.props.movieInfo
        let boxType = this.props.boxType
        return (
            // <Link to={`/movie/${movie.id}`}>
                <div className="movie" style={{backgroundImage:`url(${movie.img})`}}>
                    {boxType === "catalog" ?
                        movie.isRented ? 
                            <i className="fas fa-minus-circle minus" onClick={this.handleRent}></i> :
                            <i className="fas fa-plus-circle plus" onClick={this.handleRent}></i>
                        : <></>
                    }
                </div>
            // </Link>
        )
    }
}

export default Movie;