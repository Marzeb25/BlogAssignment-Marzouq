import {useState} from 'react'
import { NavLink, useParams } from "react-router-dom"
function Deleteblog(props){
    const params= useParams();
    const blogDetail=props.blogData.filter(_id => _id._id==params.blogId)
    return(
        <div>
            <h1>{blogDetail[0].title}</h1>
            <h2>{blogDetail[0].description}</h2>
            <h2>{blogDetail[0].author.name}</h2>
            <h2>Are you sure you want delete?</h2>
            <form>
                <input type='hidden' id='blogid' defaultValue={blogDetail[0]._id}></input>
                <button type='submit' onClick={props.onDelete}>Delete</button>
            </form>

        </div>

    )
}
export default Deleteblog