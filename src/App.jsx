import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleReadingTime = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // console.log(newReadingTime);
    const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto mt-4'>
        <Blogs handleAddToBookmark = {handleAddToBookmark} handleReadingTime ={handleReadingTime}></Blogs>
        <Bookmarks bookmarks ={bookmarks} readingTime ={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
