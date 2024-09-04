const PetListingsFilterComponent = ({ label, value, id, options, onChange, disabled }) => {
    return (
        <div className='col-12 col-md-3 mb-3'>
            <label className='form-label fw-bold'>
                {label}
            </label>
            <select
                className="form-select"
                value={value}
                id={id}
                onChange={onChange}
                disabled={disabled}
            >
                <option value="--">--</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PetListingsFilterComponent

