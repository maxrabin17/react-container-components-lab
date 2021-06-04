import React from 'react'

const MovieReview = ({name, summary, byline, image, link, keyIndex}) => {
    // console.log()
    return (
        <div className="review" key={keyIndex}>
            <h4>{name} --- By: {byline}</h4>
            <img src={image}/>
            <a href={link}>{link}</a>
            <p>{summary}</p>
        </div>
    )
}

export default MovieReview
