import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3  bg-gray-300 ml-4  mt-2 pt-4">
            <div>
                <h3 className="text-4xl">Reading time:{readingTime}</h3>
            </div>
            {/* book mark blog is the length of the bookmarks came from blog a single object at a time */}
            <h2 className="text-3xl text-center">BookMark Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;