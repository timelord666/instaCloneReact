import React from 'react';
import User from './User';
import Pallet from './Palett';


const Profile = () => {
    return (
        <div className='container profile'>
            <User src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMg1sMbDFCVgVkeEf0zXVgn1FW7shR5BZI5NoL1EvwB0pP8F3&s'
                 alt='girl'
                 name='Alexa'
                 />
            <Pallet/>
        </div>
    )
}


export default Profile;