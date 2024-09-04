import { useState } from "react"
// components
import PetListingsFilterOption from "./PetListingsFilterOption"
import PetListingsSearchOption from "./PetListingsSearchOption"


const SearchAndFilterOptions = ({ fetchListings, conditions, setConditions }) => {
    const [selectedConditionOption, setSelectedConditionOption] = useState('search')
    const [disableOption, setDisableOption] = useState(false)

    const handleSetConditionOptions = e => {
        setConditions(curState => ({
            ...curState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmittedConditionOptions = e => {
        e.preventDefault()
        console.log(conditions);

        if (conditions != undefined) {
            setDisableOption(true)

            fetchListings(0, conditions)
        }
    }

    const handleResetConditionOptions = () => {
        setDisableOption(false)

        setConditions()

        fetchListings()
    }

    return (
        <>
            <section className="pet-listings-select-options mb-3">
                <button type='button' className={selectedConditionOption == 'search' ? "select-option btn border text-muted me-2" : "btn border text-muted me-2"} onClick={() => setSelectedConditionOption('search')}>
                    Search
                </button>
                <button type='button' className={selectedConditionOption == 'filter' ? "select-option btn border text-muted" : "btn border text-muted"} onClick={() => setSelectedConditionOption('filter')}>
                    Filter
                </button>
            </section>

            {selectedConditionOption == 'search' ? (
                <PetListingsSearchOption conditions={conditions} disableOption={disableOption} handleSetConditionOptions={handleSetConditionOptions} handleSubmittedConditionOptions={handleSubmittedConditionOptions} handleResetConditionOptions={handleResetConditionOptions} />
            ) : (
                <PetListingsFilterOption conditions={conditions} disableOption={disableOption} handleSetConditionOptions={handleSetConditionOptions} handleSubmittedConditionOptions={handleSubmittedConditionOptions} handleResetConditionOptions={handleResetConditionOptions} />
            )}
        </>
    )
}

export default SearchAndFilterOptions