import React, {Component} from 'react';
import User from './User';
import InstaService from './services/InstaService';
import ErrorMessage from './Error';


export default class Users extends Component {
    insServ = new InstaService();
    state = {
        error: false,
        users: [],
    }


    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.insServ.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }


    onUsersLoaded = users => {
        
        this.setState({
            error: false,
            users,
        })
    }


    onError = () => {
        this.setState({
            error: true,
        })
    }
    

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo} = item;
            return (
                <User
                    src={photo}
                    alt={altname}
                    name={name}
                    min
                />
            )
            
        })
    }


    render() {

        const {error, users} = this.state;

        if (error) {
            return (
                <ErrorMessage />
            )
        }


        const items = this.renderItems(users);


        return (
        <div className='right'>
            <User src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMg1sMbDFCVgVkeEf0zXVgn1FW7shR5BZI5NoL1EvwB0pP8F3&s'
                 alt='man'
                 name='Alexa'
                 />
                 <div className='users__block'>
                    {items}
                 </div>
        </div>
    )
    }

    
}