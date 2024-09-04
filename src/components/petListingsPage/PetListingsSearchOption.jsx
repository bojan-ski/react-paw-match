// components
import PetListingsBtnOption from "./PetListingsBtnOption"


const PetListingsSearchOption = ({ conditions, disableOption, handleSetConditionOptions, handleSubmittedConditionOptions, handleResetConditionOptions }) => {
    return (
        <section className="pet-listings-search-option mb-5 pb-3 border-bottom">
            <form onSubmit={handleSubmittedConditionOptions}>
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-md-5 mb-3">
                        <input type="text" className="form-control" id="petBread" value={conditions ? conditions.petBread : ''} placeholder="Unesite rasu ljubimca" onChange={handleSetConditionOptions} disabled={disableOption} />
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-5 mb-3">
                        <input type="text" className="form-control" id="petLocation" value={conditions ? conditions.petLocation : ''} placeholder="Unesite naziv mesta" onChange={handleSetConditionOptions} disabled={disableOption} />
                    </div>

                    {/* row item 3 - submit/reset buttons */}
                    <PetListingsBtnOption col='col-md-2' disableOption={disableOption} handleResetConditionOptions={handleResetConditionOptions}/>
                    
                    {/* {!disableOption && (
                        <div className="col-12 col-md-2 mb-3">
                            <button type="submit" className="fw-bold btn btn-primary w-100">
                                Primeni
                            </button>
                        </div>
                    )}

                    {disableOption && (
                        <div className="col-12 col-md-2 mb-3">
                            <button type="button" className="fw-bold btn btn-warning w-100 text-white" onClick={handleResetConditionOptions}>
                                Reset
                            </button>
                        </div>
                    )} */}
                </div>
            </form>
        </section>
    )
}

export default PetListingsSearchOption