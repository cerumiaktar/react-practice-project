import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div>
            <h1 className="text-xl font-medium">Blogs: {blogs.length}</h1>
            {
                blogs.map((blog, idx) => <Blog key={idx} blog ={blog} handleAddToBookmark={handleAddToBookmark} handleReadingTime ={handleReadingTime}></Blog> )
            }
        </div>
    );
};

Blogs. propTypes ={
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;