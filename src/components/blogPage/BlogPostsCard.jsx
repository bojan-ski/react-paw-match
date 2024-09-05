import { Link } from "react-router-dom";


const BlogPostsCard = ({ blogPost }) => {
    // console.log(blogPost);
    const { id, data } = blogPost
    const { blogPostTitle, blogPostSectionTwo, blogPostCreated } = data

    return (
        <div className="col-12 col-lg-4 p-3">
            <div className="blog-post-card bg-white border rounded-4 p-4">

                <div className="blog-post-card-main border-bottom pb-3 mb-3">
                    <h3 className="text-center mb-3">
                        {blogPostTitle}
                    </h3>
                    <p className="mb-0 text-muted">
                        {blogPostSectionTwo.slice(0, 150)} ...
                    </p>
                </div>

                <div className="blog-post-card-footer d-flex align-items-center justify-content-between">
                    <Link to={`${id}`} className="btn btn-success fw-bold">
                        Pročitaj više
                    </Link>
                    <p className="fw-bold mb-0">
                        {blogPostCreated.slice(7, -1)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPostsCard