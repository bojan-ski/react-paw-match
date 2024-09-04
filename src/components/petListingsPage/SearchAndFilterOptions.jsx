import { useState } from "react"
// components
import PetListingsFilterOption from "./PetListingsFilterOption"
import PetListingsSearchOption from "./PetListingsSearchOption"


const SearchAndFilterOptions = ({ fetchListings, conditions, setConditions }) => {
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
            <PetListingsSearchOption conditions={conditions} disableOption={disableOption} handleSetConditionOptions={handleSetConditionOptions} handleSubmittedConditionOptions={handleSubmittedConditionOptions} handleResetConditionOptions={handleResetConditionOptions} />

            <PetListingsFilterOption conditions={conditions} disableOption={disableOption} handleSetConditionOptions={handleSetConditionOptions} handleSubmittedConditionOptions={handleSubmittedConditionOptions} handleResetConditionOptions={handleResetConditionOptions} />
        </>
    )
}

export default SearchAndFilterOptions