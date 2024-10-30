import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="bg-red-200 p-6 ml-10 rounded-lg">
            <div>
                <h1 className="text-xl font-medium bg-amber-700 p-4 rounded-lg text-white mb-2">Time:{readingTime}</h1>
            </div>
            <h1 className="text-xl font-medium mb-2">Bookmarked:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx}  bookmark ={bookmark}></Bookmark> )
            }
        </div>
    );
};

Bookmarks. propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.func
}
export default Bookmarks;