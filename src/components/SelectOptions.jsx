const SelectOptions = ({ sectionCss, selectedOption, setSelectedOption, selectedOptionOne, selectedOptionTwo, selectedOptionOneMark, selectedOptionTwoMark }) => {
    return (
        <section className={`${sectionCss} select-options mb-3`}>
            <button type='button' className={selectedOption == selectedOptionOne ? "select-option btn border text-muted me-2" : "btn border text-muted me-2"} onClick={() => setSelectedOption(selectedOptionOne)}>
                {selectedOptionOneMark}
            </button>
            <button type='button' className={selectedOption == selectedOptionTwo ? "select-option btn border text-muted" : "btn border text-muted"} onClick={() => setSelectedOption(selectedOptionTwo)}>
                {selectedOptionTwoMark}
            </button>
        </section>
    )
}

export default SelectOptions