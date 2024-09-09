import { useEffect, useState } from "react"
// api func
import useFetchBlogPageData from "../hooks/useFetchBlogPageData"
//components
import PageHeader from "../components/PageHeader"
import BlogSearchOption from "../components/blogPage/BlogSearchOption"
import BlogPostsCard from "../components/blogPage/BlogPostsCard"
import PaginationApi from "../components/PaginationApi"
import NoDataAvailableMessage from "../components/NoDataAvailableMessage"


const Blog = () => {
  const itemsPerPage = 6;
  const { blogPosts, fetchBlogPosts, page } = useFetchBlogPageData(itemsPerPage);

  // Fetch the first page on mount
  useEffect(() => {
    console.log('Blog page - useEffect');

    fetchBlogPosts();
  }, [])

  // search feature - state
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="blog-page">

      <PageHeader title='Blog' />

      <div className="container">

        <BlogSearchOption searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchBlogPosts={fetchBlogPosts} />

        {blogPosts && blogPosts.length > 0 ? (
          <>
            <section className="blog-posts-list mb-3">
              <div className='row'>
                {blogPosts.map(blogPost => <BlogPostsCard key={blogPost.id} blogPost={blogPost} />)}
              </div>
            </section>

            <PaginationApi itemsPerPage={itemsPerPage} data={blogPosts} fetchData={fetchBlogPosts} page={page} conditions={searchTerm} />
          </>
        ) : (
          <NoDataAvailableMessage text='Trenutno nema objavljenih Blog post-ova' />
        )}
      </div>
    </div>
  )
}

export default Blog