const PetListingsFilterOption = ({ conditions, disableOption, handleSetConditionOptions, handleSubmittedConditionOptions, handleResetConditionOptions }) => {
    return (
        <section className="pet-listings-filter-option mb-5 pb-3 border-bottom">
            <form onSubmit={handleSubmittedConditionOptions}>
                <div className="row align-items-end">

                    {/* row item 1 - display selected pet type */}
                    <div className='col-12 col-md-3 mb-3'>
                        <label className='form-label fw-bold'>
                            Tip ljubimca:
                        </label>
                        <select className="form-select" value={conditions ? conditions.petType : "--"} id="petType" onChange={handleSetConditionOptions} disabled={disableOption}>
                            <option value="--">--</option>
                            <option value="pas">Pas</option>
                            <option value="mačka">Mačka</option>
                        </select>
                    </div>

                    {/* row item 2 - display selected pet gender */}
                    <div className='col-12 col-md-3 mb-3'>
                        <label className='form-label fw-bold'>
                            Rod:
                        </label>
                        <select className="form-select" value={conditions ? conditions.petGender : "--"} id="petGender" onChange={handleSetConditionOptions} disabled={disableOption}>
                            <option value="--">--</option>
                            <option value="muško">Muško</option>
                            <option value="žensko">Žensko</option>
                        </select>
                    </div>

                    {/* row item 3 - display selected pet energy level */}
                    <div className='col-12 col-md-3 mb-3'>
                        <label className='form-label fw-bold'>
                            Energija ljubimca:
                        </label>
                        <select className="form-select" value={conditions ? conditions.petEnergyLevel : "--"} id="petEnergyLevel" onChange={handleSetConditionOptions} disabled={disableOption}>
                            <option value="--">--</option>
                            <option value="nisko">Nisko</option>
                            <option value="srednje">Srednje</option>
                            <option value="visoko">Visoko</option>
                        </select>
                    </div>

                    {/* row item 4 - display good with children option */}
                    <div className='col-12 col-md-3 mb-3'>
                        <label className='form-label fw-bold'>
                            Dobar sa decom:
                        </label>
                        <select className="form-select" value={conditions ? conditions.goodWithChildren : "--"} id="goodWithChildren" onChange={handleSetConditionOptions} disabled={disableOption}>
                            <option value="--">--</option>
                            <option value="da">Da</option>
                            <option value="ne">Ne</option>
                        </select>
                    </div>

                    {/* row item 5 - display good other pets option */}
                    <div className='col-12 col-md-3 mb-3'>
                        <label className='form-label fw-bold'>
                            Dobar sa ostalim kućnim ljubimcima:
                        </label>
                        <select className="form-select" value={conditions ? conditions.goodWithOtherPets : "--"} id="goodWithOtherPets" onChange={handleSetConditionOptions} disabled={disableOption}>
                            <option value="--">--</option>
                            <option value="da">Da</option>
                            <option value="ne">Ne</option>
                        </select>
                    </div>

                    {/* row item 6 - display special needs option */}
                    <div className='col-12 col-md-3 mb-3'>
                        <label className='form-label fw-bold'>
                            Posebne potrebe:
                        </label>
                        <select className="form-select" value={conditions ? conditions.specialNeeds : "--"} id="specialNeeds" onChange={handleSetConditionOptions} disabled={disableOption}>
                            <option value="--">--</option>
                            <option value="da">Da</option>
                            <option value="ne">Ne</option>
                        </select>
                    </div>

                    {/* row item 7 - display selected pet age */}
                    <div className="col-12 col-md-3 mb-3">
                        <label className='form-label fw-bold'>
                            Godište:
                        </label>
                        <select className="form-select" value={conditions ? conditions.petAge : "--"} id="petAge" onChange={handleSetConditionOptions} disabled={disableOption}>
                            <option value="--">--</option>
                            {Array.from({ length: 2024 - 2010 + 1 }, (_, idx) => {
                                const year = 2010 + idx;

                                return <option key={year} value={year}>
                                    {year}
                                </option>;
                            })}
                        </select>
                    </div>

                    {/* row item 8 - submit/reset buttons */}
                    {!disableOption && (
                        <div className="col-12 col-md-3 mb-3">
                            <button type="submit" className="fw-bold btn btn-primary w-100">
                                Primeni
                            </button>
                        </div>
                    )}

                    {disableOption && (
                        <div className="col-12 col-md-3 mb-3">
                            <button type="button" className="fw-bold btn btn-warning text-white w-100" onClick={handleResetConditionOptions}>
                                Reset
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </section>
    )
}

export default PetListingsFilterOption