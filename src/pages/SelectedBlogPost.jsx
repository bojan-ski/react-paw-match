import { useLoaderData } from "react-router-dom";
// api func
import fetchSelectedBlogPostDataFromFirebase from "../api/fetchSelectedBlogPostDataFromFirebase";
//components
import BackButton from "../components/BackButton"


// LOADER
export const loader = async ({ params }) => {
    const selectedBlogPost = await fetchSelectedBlogPostDataFromFirebase(params.id)
    // console.log(selectedBlogPost);    
    return selectedBlogPost
}

const SelectedBlogPost = () => {
    const selectedBlogPost = useLoaderData()

    return (
        <div className="selected-blog-post-page">
            <div className="container">

                <section className="mb-5 d-flex align-items-center justify-content-between">
                    <BackButton backPath='/blog' />

                    <p className="fw-bold mb-0">
                        {selectedBlogPost?.blogPostCreated}
                    </p>
                </section>

                <h2 className="text-center fw-bold mb-5">
                    {selectedBlogPost?.blogPostTitle}
                </h2>

                <section className="mb-3">
                    <p className="mb-3">
                        {selectedBlogPost?.blogPostSectionOne}
                    </p>
                    <p className="mb-3">
                        {selectedBlogPost?.blogPostSectionTwo}
                    </p>
                    <p className="mb-3">
                        {selectedBlogPost?.blogPostSectionThree}
                    </p>
                </section>

            </div>
        </div>
    )
}

export default SelectedBlogPost