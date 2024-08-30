const PostNewListingInputField = ({ label, id, type = 'text', placeholder = '', required = true, value, onChange }) => (
    <div className="mb-3">
        <label className='form-label fw-bold'>
            {label}
        </label>
        <input
            className='form-control'
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    </div>
);

export default PostNewListingInputField