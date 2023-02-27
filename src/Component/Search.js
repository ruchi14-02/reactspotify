
import React,{useState}  from 'react'


function Search(props) {
    const[artist ,setArtist] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(`artist name =`, artist)
        props.artistSearch(artist)
    }
    return(
   
    <div className="row">
       <div className = "col-md-6 offset-md-3">
           <div className ="card">
            <form autoComplete='off' onSubmit={submitHandler}>
                <div className='form-group'>
                    <label htmlFor='artist'>
                        artist name
                    </label>
                    <div className='input-group'>
                        <input type = "search" name ="artist"id ="artist" value={artist} onChange={(e) =>setArtist(e.target.value)} className ="form-control" required/>
                        <input type ="submit" value="search" className='btn btn-success'></input>
                    </div>
                </div>
            </form>
           </div>

       </div>
    </div>



    )
}

export default Search