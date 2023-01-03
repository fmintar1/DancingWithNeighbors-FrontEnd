import React, { useState, useEffect } from 'react';
import Header from '../global/header';

const Contact = () => {
    const[usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/user-profiles')
        .then(res=>
            // console.log(res))
            res.json())
        .then
        // (json=>console.log(json))
        (usersArray=>{
            setUsersList(usersArray
                // .map((accounts) => {return accounts.name})    
            )})
    }, [])

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
    
    const imgURL = "data:image/jpeg;base64," + imageBlob;
    // const dataURL = URL.createObjectURL(imageBlob)

    return (
        <section>
            <Header/>
            <table>
                <thead>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Birthdate</th>
                    <th>Location</th>
                    <th>Styles</th>
                    <th>Availability</th>
                </thead>
                {usersList.map((users, key) => {
                    return(
                        <tbody key={key}>
                            <img src={imgURL} className="profilePicture"/>
                            {/* <td>{dataURL}</td> */}
                            <td>{users.name}</td>
                            <td>{users.birthdate}</td>
                            <td>{users.location}</td>
                            <td>{users.styles}</td>
                            <td>{users.availability}</td>
                        </tbody>
                    )
                })}
            </table>
        </section>
    )
}

export default Contact;