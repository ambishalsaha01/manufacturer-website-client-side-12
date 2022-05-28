import React, { useEffect, useState } from 'react';

const GetParts = () => {
    const [parts, setParts] = useState([])
    useEffect(()=>{
        fetch('https://thawing-fjord-45381.herokuapp.com/part')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return [parts, setParts]
};

export default GetParts;