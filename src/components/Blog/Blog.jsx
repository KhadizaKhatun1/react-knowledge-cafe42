// to handle prop types
import PropTypes from 'prop-types';
import {FaRegBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    // console.log(blog)
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={author_img}></img>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-2xl text-red-600' onClick={()=>handleAddToBookmark(blog)}> <FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {/* hashtag is an array that's why we are mapping here */}
                {/* when there is no unique value use index cause map has three things value,index and array */}
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline' onClick={()=>handleMarkAsRead(id,reading_time)}>Mark As Read</button>
        </div>
    );
};
// to use proptype
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;