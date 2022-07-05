import {useState} from 'react'
import "./AddBlog.css"
const AddBlog =(props) => {
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
            <form onSubmit={props.onFormSubmitHandler}>
                <label>Title</label>
                <input type="text" id='title' className="form-control" onChange={titleChangeEvent}/>
                <label>Description</label>
                <input type="text" id='description' className="form-control" onChange={DescriptionChangeEvent}/>
                <label>Image-URL</label>
                <input type="text" id='imgUrl' className="form-control" onChange={ImageChangeEvent}/>
                <label>Author Name</label>
                <input type="text" id='author' className="form-control" onChange={AuthorChangeEvent}/>
                <button type='submit'>SUBMIT PANNU</button>
            </form>
        </div>
    )
}
export default AddBlog