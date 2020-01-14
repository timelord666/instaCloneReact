import React, {Component} from 'react';
import InstaService from './services/InstaService';
import ErrorMessage from './Error';


export default class Pallet extends Component {
    insSer = new InstaService();
    state = {
        error: false,
        photos: [],
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.insSer.getAllPhotos()
        .then(this.onPhotoLoaded)
        .catch(this.onError);
    }

    onError = () => {
        this.setState({
            error: true,
        })
    }

    onPhotoLoaded = photos => {
        this.setState({
            error: false,
            photos,
        })
    }

    renderItem(arr) {
        return arr.map(item => {
            return (
                <img src={item.src} alt={item.alt}></img>
            )
        })
    }

    render() {
        const {error,photos} = this.state;

        if (error) {
            return <ErrorMessage/>;
        }

        const items = this.renderItem(photos);

        return(
            <div className='palette'>
                {items}
            </div>
        )
    }
}

