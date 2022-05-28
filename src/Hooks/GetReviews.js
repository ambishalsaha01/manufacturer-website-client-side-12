import React, { useEffect, useState } from 'react';

const GetReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://thawing-fjord-45381.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return [reviews, setReviews]
};

export default GetReviews;