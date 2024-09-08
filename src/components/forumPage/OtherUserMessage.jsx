const OtherUserMessage = ({message}) => {
    return (
        <div className="mb-3 fst-italic">
            <p className="bg-info">
                {message}
            </p>
        </div>
    )
}

export default OtherUserMessage