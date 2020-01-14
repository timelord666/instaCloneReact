import React, {Component} from 'react';
import User from './User';


export default class post extends Component {
    render() {
        return (

            <div className='post'>
                <User src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMg1sMbDFCVgVkeEf0zXVgn1FW7shR5BZI5NoL1EvwB0pP8F3&s'
                 alt='man'
                 name='Alexa'
                 min 
                 />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='post__name'>
                    some account
                </div>
                <div className='post__descr'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.At placeat odio excepturi laborum eum sit perspiciatis id sint amet fuga sapiente, quod vero non, neque vitae illum quis, quaerat dicta iste ? Voluptatibus distinctio velit impedit eaque magni placeat dolores dignissimos tempora, laborum ducimus blanditiis, corporis enim ? Voluptatibus debitis ipsum omnis ?
                </div>
            </div>
        )
    }
}