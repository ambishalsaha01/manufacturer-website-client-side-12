import React, { useEffect, useState } from 'react';

const GetParts = () => {
    const [parts, setParts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/part/')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return [parts, setParts]
};

export default GetParts;