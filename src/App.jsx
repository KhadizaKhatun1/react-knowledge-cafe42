import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0)
  // const [readingTime,setReadingTime]=useState(0)
  // definition of handleAddToBookmark
  const handleAddToBookmark=blog=>{
    // for multiple time use
    const newBookMarks=[...bookmarks,blog]
    setBookmarks(newBookMarks)
  }
  const handleMarkAsRead=(id,time)=>{
    // we did not use spread operator cause it is not array rather a number.
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime)
    // remove mark as read
    // console.log('remove bookmark',id)
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id)
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
