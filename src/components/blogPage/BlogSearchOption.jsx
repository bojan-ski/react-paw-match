import { useState } from "react"
// toastify
import { toast } from "react-toastify"


const BlogSearchOption = ({ searchTerm, setSearchTerm, fetchBlogPosts }) => {
    const [disableOption, setDisableOption] = useState(false)

    const handleSearchTerm = e => {
        e.preventDefault()            

        if (searchTerm == '' || searchTerm.trim().length == 0) return toast.warning('Molimo Vas da uneste validan tekst')

        setDisableOption(true)

        fetchBlogPosts(0, searchTerm.trim())
    }

    const handleReset = () => {
        setDisableOption(false)

        setSearchTerm('')

        fetchBlogPosts()
    }    

    return (
        <section className="blog-page-search-option mb-5 pb-3 border-bottom">
            <form onSubmit={handleSearchTerm}>
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-md-9 mb-3">
                        <input type="text" className="form-control" value={searchTerm} placeholder="Unesite naziv Blog-a" onChange={e => setSearchTerm(e.target.value)} disabled={disableOption} />
                    </div>

                    {/* row item 2 */}
                    {!disableOption && (
                        <div className="col-12 col-md-3 mb-3">
                            <button type="submit" className="fw-bold btn btn-primary text-white w-100">
                                Primeni
                            </button>
                        </div>
                    )}

                    {disableOption && (
                        <div className="col-12 col-md-3 mb-3">
                            <button type="button" className="fw-bold btn btn-warning w-100 text-white" onClick={handleReset}>
                                Reset
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </section>
    )
}

export default BlogSearchOption