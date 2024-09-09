import { useEffect } from "react"
// api func
import useFetchBlogPageData from "../hooks/useFetchBlogPageData"
//components
import BlogPostsCard from "../components/blogPage/BlogPostsCard"
import PageHeader from "../components/PageHeader"
import PaginationApi from "../components/PaginationApi"
import NoDataAvailableMessage from "../components/NoDataAvailableMessage"


const Blog = () => {
  const itemsPerPage = 1;
  const { blogPosts, fetchBlogPosts, page } = useFetchBlogPageData(itemsPerPage);

  // Fetch the first page on mount
  useEffect(() => {
    console.log('Blog page - useEffect');

    fetchBlogPosts();
  }, [])

  return (
    <div className="blog-page">

      <PageHeader title='Blog' />

      <div className="container">

        {blogPosts && blogPosts.length > 0 ? (
          <>
            <section className="blog-posts-list mb-3">
              <div className='row'>
                {blogPosts.map(blogPost => <BlogPostsCard key={blogPost.id} blogPost={blogPost} />)}
              </div>
            </section>

            <PaginationApi itemsPerPage={itemsPerPage} data={blogPosts} fetchData={fetchBlogPosts} page={page} />
          </>
        ) : (
          <NoDataAvailableMessage text='Trenutno nema objavljenih Blog post-ova'/>
        )}
      </div>
    </div>
  )
}

export default Blog