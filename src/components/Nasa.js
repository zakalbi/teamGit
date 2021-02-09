import { useState, useEffect } from "react";
import './Nasa.css'

const Nasa = ({lat, long}) => {
    const latInt = Math.trunc(lat);
    const lonInt = Math.trunc(long);
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lonInt}&lat=${latInt}&date=2018-01-01&&dim=0.15&api_key=KQzGO4mQOG6KmcpYpvd9BKm4HfRJXkOs1LIe0WdN`
    const [imgUrl, setImgUrl] = useState('');
    const pleaseWork = async() => {
        const response = await fetch(url)
        const picture = await response.json()
        setImgUrl(picture.url)
    }
    useEffect(() => {
        console.log(lat);
        pleaseWork()
    }, [lat, long, url]);
    console.log(imgUrl);
    return (
        <div>
            <h1>NASA</h1>
            {imgUrl}
            <div>
                <img src={imgUrl} className='nasa-image' />
            </div>
        </div>
    );   
};
export default Nasa;