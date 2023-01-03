import React, { useState, useEffect } from 'react';

const Images = ({ id }) => {
    const [imageBlob, setImageBlob] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/user-profiles')
        .then(res=>
        // console.log(res))
            res.json())
        .then
        // (json=>console.log(json))
            (usersArray=>{
                setImageBlob(usersArray
                .map((accounts) => {return accounts.image})    
                )})
        }, [])
    
}
export default Images;