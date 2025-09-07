import React from 'react'
import Banner from '../component/Banner'
import BlogPage from '../component/BlogPage'

const Home = () => {
  
  return (
    <div>
      <title>Home</title>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home
