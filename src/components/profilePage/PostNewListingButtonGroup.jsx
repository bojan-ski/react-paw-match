const PostNewListingButtonGroup = ({ label, id, options, selectedValue, onClick }) => (
    <div className="mb-3">
        <label className='form-label fw-bold'>
            {label}
        </label>
        <div className='new-listing-btn-options'>
            {options.map(option => (
                <button
                    key={option.value}
                    type='button'
                    className={selectedValue === option.value ? 'form-btn-active' : 'form-btn'}
                    id={id}
                    value={option.value}
                    onClick={onClick}
                >
                    {option.label}
                </button>
            ))}
        </div>
    </div>
);

export default PostNewListingButtonGroup