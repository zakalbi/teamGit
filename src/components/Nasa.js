
import { useState, useEffect } from "react";
const Nasa = ({ lat, long }) => {
    const latInt = Math.trunc(lat);
    const lonInt = Math.trunc(long)
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lonInt}&lat=${latInt}&date=2018-01-01&&dim=0.15&api_key=KQzGO4mQOG6KmcpYpvd9BKm4HfRJXkOs1LIe0WdN`
    const [imgUrl, setImgUrl] = useState('');

    const pleaseWork = async () => {

// import { useEffect, useEffect } from "react";

// let lon = "86.1581";
// let lat = "39.7684";
// let date = "2020-01-01"

// const Nasa = () => {
//     const url = `https://api.nasa.gov/planetary/earth/imageryKQzGO4mQOG6KmcpYpvd9BKm4HfRJXkOs1LIe0WdN`;
//     const [data, setData] = useState();

//     const initData = async () => {
//         const response = await fetch(url);
//         const nasa = await response.json();

//         console.log(nasa);

//         setData(nasa);
//     }

//     useEffect(() => {
//         initData();
//     }, [])
//     return (
//         <div>
//             <h1>NASA</h1>
//         </div>
//     );
// };

// export default Nasa;

/*

SEPARATE

*/

// import { useEffect, useState } from "react";
// // import "./NASA.css";
// let lon = "86.1581";
// let lat = "39.7684";
// let date = "2020-01-01";

// const Nasa = () => {
//     const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&api_key=6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ`;
//     const [data, setData] = useState();

//     const initData = async () => {
//         const response = await fetch(url);
//         const image = await response.json();

//         console.log(image);
//         setData(image);
//     };

//     useEffect(() => {
//         initData();
//     }, []);

//     return <div>image</div>;
// };

// export default Nasa;

/*

    SEPARATE!

*/

// import React, { Component } from 'react';
// import './Nasa.css';

// export default class NASA extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             lat: '',
//             long: '',
//             NASAurl: 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ',
//             img: '',
//             key: '6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ'
//         }

//     }

//     componentWillMount() {
//         console.log("NASA API is about to mount.");
//     }

//     componentDidMount = () => {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition((position) => {
//             this.setState({
//                 long: (position.coords.longitude),
//                 lat: (position.coords.latitude)
//             })

//             console.log("Latitude is :", position.coords.latitude);
//             console.log("Longitude is :", position.coords.longitude);
//             console.log("NASA component sucessfully mounted.");

//             fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ')
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json);
//                 this.setState({
//                     img: json.url
//                 })
//                 console.log(this.state.img);
//             })
//           })
//         }
//       }

//     render(){
//         return(
//             <div id='nasaDiv'>
//                 <h2 id='nasah2'>If the image src worked, it would show it under this!</h2>
//                 <br />
//                 <img id='apiReturn' src={this.state.img} alt='NASA API photo'/>
//                 <br />
//                 <hr />
//             </div>
//         )
//     }
// }


/*

    SEPARATE!

*/

// import {useState, useEffect} from 'react';
// export const usePosition = () => {
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);

//   const onChange = ({coords}) => {
//     setPosition({
//       latitude: coords.latitude,
//       longitude: coords.longitude,
//     });
//   };
//   const onError = (error) => {
//     setError(error.message);
//   };
//   useEffect(() => {
//     const geo = navigator.geolocation;
//     if (!geo) {
//       setError('Geolocation is not supported');
//       return;
//     }
//     watcher = geo.watchPosition(onChange, onError);
//     return () => geo.clearWatch(watcher);
//   }, []);
//   return {...position, error};
// }

// import React from "react";

import { useState, useEffect } from "react";
import './Nasa.css';


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


// import React, { Component } from "react";
// import "./Nasa.css";
// export default class NASA extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             lat: "",
//             long: "",
//             NASAurl: "https://api.nasa.gov/planetary/apod?api_key=u4SALSuBVA6Ig1sArtT5FMVzG5kc4FSx0viQbcAw",
//             img: "",
//             key: "u4SALSuBVA6Ig1sArtT5FMVzG5kc4FSx0viQbcAw"
//         }
//     }
// };
// componentWillMount() {
//     console.log("NASA API is about to mount.")
// }
// componentDidMount(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             this.setState({
//                 long: (position.coords.longitude),
//                 lat: (position.coords.latitude),
//             });

//             console.log("Latitude is :", position.coords.latitude);
//             console.log("Longitude is :", position.coords.longitude);
//             console.log("NASA component successfully mounted.");
//             fetch("https//api.nasa.gov/neo/rest/v1/neo/browse?api_key=6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ")
//                 .then(res => res.json())
//                 .then(json => {
//                     console.log(json);
//                     this.setState({
//                         img: json.url
//                     })
//                     console.log(this.state.img);
//                 });
//         });
//     };

//     render()
//     return (
//         <div id="nasaDiv">
//             <h2 id="nasah2">If the image src worked, it would show it under this!</h2>
//             <br />
//             <img id="apiReturn" src={this.state.img} alt='NASA API photo' />
//             <br />
//             <hr />
//         </div>
//     );
// };




// export default NASA;




            <div className='nasaReturn'>
                <img src={imgUrl} className='nasa-image' />
            </div>
        </div>
    );   
};

export default Nasa;


// const Nasa = (props) => {
//     const [locImage, setLocImage] = useState();
//     const initData = () => {
//         const latInt = Math.trunc(props.lat);
//         const lonInt = Math.trunc(props.lon);
//         const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lonInt}&lat=${latInt}&date=2018-01-01&&dim=0.15&api_key=KQzGO4mQOG6KmcpYpvd9BKm4HfRJXkOs1LIe0WdN`;
//         fetch(url)
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res.url)
//                 setLocImage(res.url)
//             })
//             .catch(err => console.log(err))
//     }, //[props.lat, props.lon]
    

    
//     // useEffect() => {
//     //     if (props.lat && props.lon) {
//     //         initData()
//     //     }
//     // }, [props.lat, props.lon, initData];

//     // if (!nasaData) return <div />;
//     return (
//         <div>
//             <img src={nasaData.url} alt={nasaData.title} />
//         </div>
//     ); 
// }

// export default Nasa;

