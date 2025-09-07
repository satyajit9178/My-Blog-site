import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";

const BlogCard = ({blogs,currentPage,selectCategory,pageSize}) => {
  const filteredBlogs=blogs.filter((blogs)=>!selectCategory || blogs.category===selectCategory)
  .slice((currentPage -1)*pageSize,currentPage*pageSize);//how many index to be shown from the blogs

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        filteredBlogs.map((blog)=>
          <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
            <div className='flex flex-row gap-10'>
              <img src={blog.image} alt="" className='w-full'/>
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
            <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
            <p className='text-gray-500 text-sm'>Published: {blog.published_date}</p>
          </Link>
        )
      }
    </div>
  )
}

export default BlogCard
