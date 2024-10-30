import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    const {id, title, cover, author, published_date, author_img, reading_time, hashtags } = blog;
    return (
        <div className="mb- mt-10">
            <img src={cover} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex items-center gap-4">
                    <img className="w-12" src={author_img} alt="" />
                    <div >
                        <h3 className="text-lg font-medium">{author}</h3>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2"><FaBookmark /></button>
                </div>
            </div>
            <h1 className="text-xl font-medium mt-4 mb-4">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>
                     )
                }
            </p>
            <button onClick={() => handleReadingTime(id,reading_time)} className="font-medium text-blue-600 mt-4">Mark as read</button>
        </div>
    );
};

Blog. propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func

}

export default Blog;