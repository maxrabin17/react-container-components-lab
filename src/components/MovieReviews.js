// Code MovieReviews Here
import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = ({ reviews }) => { 
    return (
        <div className="review-list">
            {reviews.map(review => 
                <MovieReview
                    keyIndex={review.link}
                    byline={review.byline}
                    image={review.image}
                    link={review.link}
                    summary={review.summary}
                    name={review.name}
                />
            
            )}
        </div>
    )
}

export default MovieReviews

