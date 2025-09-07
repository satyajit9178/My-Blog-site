import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CatagorySelection from './CatagorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs,setBlogs]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const pageSize=12; //blogs per page
  const [selectCategory,setSelectCategory]=useState(null);
  const [activeCategory,setActiveCategory]=useState(null);

   useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch('/blogData.json'); // ✅ fetch static JSON
      const data = await response.json();
      setBlogs(data); // ✅ store whole dataset (BlogCard handles filter + slice)
    }
    fetchBlogs();
  }, []);

  const handlePageChange=(pageNumber)=>{
   
    setCurrentPage(pageNumber);
  }

  const handleCtagoryChange=(category)=>{
    setSelectCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>
      {/*catagory section */}
      <div className=''>
        <CatagorySelection onSelectCategory={handleCtagoryChange}  activeCategory={activeCategory}/>
      </div>

      {/**Blogcard section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCard blogs={blogs} currentPage={currentPage} selectCategory={selectCategory} pageSize={pageSize}/>

        {/**Sidebar component */}
        <SideBar/>
      </div>

      {/**Pagination section */}
      <div><Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize}/></div>
    </div>
  )
}

export default BlogPage
