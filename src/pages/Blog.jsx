import { useLoaderData } from "react-router-dom"
// api func
import fetchAllBlogPostsFromFirebase from "../api/fetchAllBlogPostsFromFirebase"
//components
import BlogPostsCard from "../components/blogPage/BlogPostsCard"
import PageHeader from "../components/PageHeader"


// LOADER
export const loader = async () => {
  const allBlogPosts = await fetchAllBlogPostsFromFirebase()
  console.log(allBlogPosts); 
  return allBlogPosts
}

const Blog = () => {
  const allBlogPosts = useLoaderData()

  return (
    <div className="blog-page">

      <PageHeader title='Blog' />

      <div className="container">

        {allBlogPosts && allBlogPosts.length > 0 ? (
          <>
            <section className="blog-posts-list mb-3">
              <div className='row'>
                {allBlogPosts.map(blogPost => <BlogPostsCard key={blogPost.id} blogPost={blogPost}/>)}
              </div>
            </section>
          </>
        ) : (
          <h2 className="fw-bold text-center">
            Trenutno nema objavljenih Blog post-ova
          </h2>
        )}
      </div>
    </div>
  )
}

export default Blog