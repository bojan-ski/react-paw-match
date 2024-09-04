const PetListingsBtnOption = ({col, disableOption, handleResetConditionOptions}) => {
    return (
        <>
            {!disableOption && (
                <div className={`col-12 ${col} mb-3`}>
                    <button type="submit" className="fw-bold btn btn-primary w-100">
                        Primeni
                    </button>
                </div>
            )}

            {disableOption && (
                <div className={`col-12 ${col} mb-3`}>
                    <button type="button" className="fw-bold btn btn-warning text-white w-100" onClick={handleResetConditionOptions}>
                        Reset
                    </button>
                </div>
            )}

        </>
    )
}

export default PetListingsBtnOption