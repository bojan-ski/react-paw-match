const SectionHeader = ({ title, marginBot }) => {
    return (
        <div className={`user-posted-listings-header ${marginBot}`}>
            <h2 className="text-center fw-bolder">
                {title}
            </h2>
        </div>
    )
}

export default SectionHeader