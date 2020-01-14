export default class InstaService {
    
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }


    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`could not fetch ${url}, recieved ${res.status}`);
        }

        return await res.json();
    }

    getAllPosts = async () => {

        const res = await this.getResource('/posts/');

        return res;

    }


    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');


        return res.map(this._transformPosts); 
    }

    getAllUsers = async () => {
        const res = await this.getResource('/posts/');
        

        


        return res.map(item => {
            return this._transformPosts(item, 'user')
            
            
        });
    }


    _transformPosts = (post, user) => {

        if (user === 'user') {
            return {
                name: post.name,
                altname: post.altname,
                photo: post.photo,
            }


        } else {
            return {
                src: post.src,
                alt: post.alt,
            }
        }

       
    }

}