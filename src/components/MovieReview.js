import React from 'react'

const MovieReview = ({name, summary, byline, image, link, keyIndex}) => {
    // console.log()
    return (
        <div className="review" key={keyIndex}>
            <h4>{name} --- By: {byline}</h4>
            <img src={image}/>
                <div>
                    <a href={link}>Link to Review</a>
                    <p>{summary}</p>
                </div>
        </div>
    )
}

export default MovieReview
