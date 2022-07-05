import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom";
function BlogSingle(props){
    const params= useParams();
    console.log("params",params)
    const blogDetail=props.blogData.filter(_id => _id._id==params.blogId)
    // console.log(blogDetail)
    return (
        <div>
            <h1>{blogDetail[0].title}</h1>
            <h2>{blogDetail[0].description}</h2>
            <h2>{blogDetail[0].author.name}</h2>
            <NavLink to={`/Editblog/${blogDetail[0]._id}`}><button type='button' className='button'>Edit Blog</button></NavLink>
            <NavLink to={`/Deleteblog/${blogDetail[0]._id}`}><button type="button" className="button">Delete Blog</button></NavLink>
        </div>
    )
}
export default BlogSingle







