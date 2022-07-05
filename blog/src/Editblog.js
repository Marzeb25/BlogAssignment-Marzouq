import {useState} from 'react'
import { useParams } from "react-router-dom"
import "./AddBlog.css"
const Editblog =(props) => {
    const params= useParams();
    const blogDetail=props.blogData.filter(_id => _id._id==params.blogId)
    console.log(blogDetail)
    const [title, setTitle]=useState('');
    function titleChangeEvent(event){
        setTitle(event.target.value);
        console.log(title);
    }
    const [Description, setDescription]=useState('');
    function DescriptionChangeEvent(event){
        setDescription(event.target.value);
        console.log(Description);
    }
    const [Image, setImage]=useState('');
    function ImageChangeEvent(event){
        setImage(event.target.value);
        console.log(Image);
    }
    const [Author, setAuthor]=useState('');
    function AuthorChangeEvent(event){
        setAuthor(event.target.value);
        console.log(Author);
    }
    const [blog, setBlog]=useState('');
    
    
        return(
        <div className="add-container">
            <h3>Add blog form</h3>
            <form onSubmit={props.onEdit}>
                <label>Title</label>
                <input type="text" id='title' className="form-control"  defaultValue={blogDetail[0].title} onChange={titleChangeEvent} />
                <label>Description</label>
                <input type="text" id='description' className="form-control" defaultValue={blogDetail[0].description} onChange={DescriptionChangeEvent}/>
                <label>Image-URL</label>
                <input type="text" id='imgUrl' className="form-control" defaultValue={blogDetail[0].imgurl} onChange={ImageChangeEvent}/>
                <label>Author Name</label>
                <input type="text" id='author' className="form-control" defaultValue={blogDetail[0].author.name} onChange={AuthorChangeEvent}/>
                <input type='hidden' id='blogid' defaultValue={blogDetail[0]._id} />
                <button type='submit'>SUBMIT PANNU</button>
            </form>
        </div>
    )
}
export default Editblog