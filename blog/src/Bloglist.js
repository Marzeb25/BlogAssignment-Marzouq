import { Link, NavLink } from 'react-router-dom';
import './Bloglist.css';
const Bloglist = (props) => {
     console.log(props)
    return(
        <div>
            <NavLink to='/addblog'><button type='button' className='button'>Add New Blog</button></NavLink>
        <div className="blog-container">
           
            {props.blogData.map(list => (
                <NavLink to={`/singleBlog/${list._id}`}>
                <div className="blog-thumbnail col-4" key={list._id}>
                <div className="img-wrapper">
                    <img src={list.imgurl}/>
                </div>
                <div className='blog-content'>
                    <div className='blog-content-header'>
                        {list.title}
                    </div>
                    <div className='blog-conent-description'>
                        {list.description}
                    </div>
                    <div className='blog-content-author'>
                        <div className='author-name'>
                            {list.author.name}
                        </div>
                        <div className='blog-date'>
                            {list.date}
                        </div>
                    </div>
                </div>
            </div>
            </NavLink>
            ))}
        </div>
    </div>
    )
}
export default Bloglist