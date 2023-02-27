import React,{useEffect,useState} from 'react'
import {auth} from '../Token/index'
import { NavLink } from 'react-router-dom'
import Search from "./Search"

const URL = "https://api.spotify.com" //primary aopi

function Home() {
    const [artist, setArtist] = useState([])
const searchArtist = async(name)=>{
    fetch(`${URL}/v1/search?q=${name}&type=artist`,{
        method:"GET",
        headers:{
            Authorization :auth.token
        },redirect:"follow"
    }).then(res =>res.json())
    .then(out =>{
        console.log("artist details = ",out)
        setArtist(out.artists.items)
    }).catch(err =>console.log(err.message))
}
    //api call
useEffect(()=>{
    searchArtist("SPB")
},[])
    return(
   <div className = "container">
    <div className="row">
       <div className = "display-3 text-success">
           <h3 className ="display-3 test-center text-success">Home</h3>

       </div>
    </div>
    <Search artistSearch ={searchArtist}/>
    <div className='row'>
        {
            artist.map((item,index)=>{
                const{id,name,popularity,genres,followers,type} = item
                return(
                    <div className='col-md-4 mt-2' key={index}>
                        <div className=' card'>
                            <div className='card-header'>
                                <h6 className='card-title'>{name}</h6>
                            </div>
                            <div className='card-body'>
                                <ul className='list-group'>
                                    <li className='list-group-item'>
                                        <strong>popularity</strong>
                                        <span className='float-end'>{popularity}</span>
                                    </li>

                                    <li className='list-group-item'>
                                        <strong>genres</strong>
                                        <span className='float-end'>{genres}</span>
                                    </li>

                                    <li className='list-group-item'>
                                        <strong>type</strong>
                                        <span className='float-end'>{type}</span>
                                    </li>

                                    <li className='list-group-item'>
                                        <strong>followers</strong>
                                        <span className='float-end'>{followers.total}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <NavLink to ={`/track/${id}`}className="btn btn-danger float-end">Track</NavLink>
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

export default Home