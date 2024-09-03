// utils func
import scrollToTop from "../utils/scrollToTop";


const PaginationApi = ({ listings, fetchListings, page, conditions }) => {
    const handleNextPage = () => {
        // fetchListings(page + 1, conditions);
        conditions ? fetchListings(page + 1, conditions): fetchListings(page + 1);
        scrollToTop()
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            // fetchListings(page - 1, conditions);
            conditions ? fetchListings(page - 1, conditions): fetchListings(page - 1);
            scrollToTop()
        }
    };

    return (
        < section className="pagination d-flex align-items-center justify-content-between" >
            <p className="fw-bold text-muted mb-0 fs-5">
                Stranica:
                <span className="text-dark ms-2">
                    {page + 1}
                </span>
            </p>

            <div className="pagination-btn-container">
                <button className="btn btn-primary me-3" onClick={handlePreviousPage} disabled={page === 0}>
                    Prev
                </button>
                <button className="btn btn-primary" onClick={handleNextPage} disabled={listings.length === 0}>
                    Next
                </button>
            </div>
        </section >
    )
}

export default PaginationApi