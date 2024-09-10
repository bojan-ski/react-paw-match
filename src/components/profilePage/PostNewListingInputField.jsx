const PostNewListingInputField = ({ label, id, type = 'text', placeholder = '', required = true, value, onChange, maxLength, max }) => (
    <div className="mb-3">
        <label className='form-label fw-bold'>
            {label}
        </label>
        <input
            className='form-control'
            type={type}
            id={id}
            value={value}
            maxLength={maxLength}
            max={max}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    </div>
);

export default PostNewListingInputField