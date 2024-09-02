const ProfilePageOptions = ({selectedProfilePageOption, setSelectedProfilePageOption}) => {
    return (
        <section className="profile-page-options mb-5">
            <button className={`btn border px-3 me-3 ${selectedProfilePageOption == 'my-listings' && 'selected-profile-page-options'}`} onClick={() => setSelectedProfilePageOption('my-listings')}>
                Moji oglasi
            </button>

            <button className={`btn border px-3 me-3 ${selectedProfilePageOption == 'new-listing' && 'selected-profile-page-options'}`} onClick={() => setSelectedProfilePageOption('new-listing')}>
                Objavi novi oglas
            </button>

            <button className={`btn border px-3 ${selectedProfilePageOption == 'bookmarked-listings' && 'selected-profile-page-options'}`} onClick={() => setSelectedProfilePageOption('bookmarked-listings')}>
                Omiljeni oglasi
            </button>
        </section>
    )
}

export default ProfilePageOptions