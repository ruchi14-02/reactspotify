import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {auth} from '../Token'


const URL = "https://api.spotify.com"
 
export default function Track() {
    const params = useParams()
    const [track, setTrack] = useState([])

const[audio,setAudio] = useState(null) //audio player
const[playing,setPlaying] = useState(false) //play and pause actions
const[preUrl, setPreUrl] =useState(null) //previee url



const searchTracks = async() => {
    fetch(`${URL}/v1/artists/${params.artistId}/top-tracks?market=IN`,{
        method : "GET",
        headers:{
            Authorization:auth.token
        
    },redirect:"follow"
}).then(res =>res.json())
.then(out =>{
    console.log("top tracks  = ",out)
   setTrack(out.tracks)
}).catch(err =>console.log(err.message))
    
}
useEffect(()=>{
    searchTracks()
},[])


//trackIcon
const trackIcon = (url) =>{
    if(!url)
    return <strong className='text-danger'>No track</strong>
    if(playing && preUrl === url)
    return<button  className='btn btn-sm btn-warning'>pause</button>
    return<button  className='btn btn-sm btn-success'>play</button>
}

//play actions
const playAudio =(url) =>{
    let myAudio = new Audio(url)
    if(!playing){
        myAudio.play();
        setPlaying(true)
        setAudio(myAudio)
        setPreUrl(url)
    }else{
        //pause
        audio.pause();
        if(preUrl === url){
            setPlaying(false); //paused
        }else{
            //pause to play
            myAudio.play()
            setPreUrl(url)
            setAudio(myAudio)
        }
    }
}
    return(
   <div className = "container">
    <div className="row">
       <div className = "display-3 text-success">
           <h5 className ="display-3 text-center text-info">Track</h5>
<p className='text-info text-center font-size:2px'>{params.artistId}</p>
       </div>
    </div>

    <div className='row'>
        {
            track.map((item,index) =>{
const {id,name,album,preview_url} =item
return(
<div className='col-md-3 mt-2' key={index}>
    <div className ="card" onClick={() => playAudio(preview_url)}>
<img src = {album.images[1].url} alt ={name} className ="card-img-top"/>
<div className='card-body'>
    <h6 className='text-center'>{name}</h6>
</div>
<div className='card-footer'>
    {(trackIcon(preview_url))}
</div>
    </div>
</div>
)
            })
        }
    </div>
   </div>


    )
}
 