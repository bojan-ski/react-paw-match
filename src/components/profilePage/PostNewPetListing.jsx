import { useState } from "react";
// context
import { useGlobalContext } from "../../context";
// page
import Loading from '../../pages/Loading'


const PostNewPetListing = () => {
  const { userProfileDetails } = useGlobalContext()

  const [isLoading, setIsLoading] = useState(false);
  const [listingFormData, setListingFormData] = useState({
    userRef: userProfileDetails.userID,
    listingCreatedBy: userProfileDetails.userName,
    petType: 'pas',
    petBread: '',
    petGender: 'muško',
    petAge: '2010',
    petWeight: '',
    petEnergyLevel: 'nisko',
    goodWithChildren: 'da',
    goodWithOtherPets: 'da',
    specialNeeds: 'ne',
    specialNeedsDescription: '',
    petAddress: '',
    petLocation: '',
    petImagesGallery: [],
    contactFullName: '',
    contactPhoneNumber: '',
    contactEmailAddress: '',
  })

  const { petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petAddress, petLocation, petImagesGallery, contactFullName, contactPhoneNumber, contactEmailAddress } = listingFormData

  const onMutate = (e) => {
    const { files, id, value } = e.target;

    setListingFormData(prevState => ({
      ...prevState,
      [id]: files ? files : value.toLowerCase()
    }));
  }


  const handleCreateNewListingSubmit = e => {
    e.preventDefault()

    console.log(listingFormData);
  }



  if (isLoading) return <Loading />


  return (
    <section className='post-new-listing'>

      <div className="post-new-listing-form py-2 rounded-4">
        {/* new-listing-header */}
        <div className="new-listing-header mb-3">
          <h2 className="text-center fw-bolder">
            Postavi novi oglas
          </h2>
        </div>

        {/* new-listing-body */}
        <div className="new-listing-body">

          <form className="p-4 rounded-5" onSubmit={handleCreateNewListingSubmit}>
            <div className="row">

              {/* row item 1 */}
              <div className="col-12 col-lg-6">

                {/* pet type */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Tip ljubimca
                  </label>
                  <div className='new-listing-btn-options'>
                    <button
                      type='button'
                      className={petType === 'pas' ? 'form-btn-active' : 'form-btn'}
                      id='petType'
                      value='pas'
                      onClick={onMutate}
                    >
                      Pas
                    </button>
                    <button
                      type='button'
                      className={petType === 'mačka' ? 'form-btn-active' : 'form-btn'}
                      id='petType'
                      value='mačka'
                      onClick={onMutate}
                    >
                      Mačka
                    </button>
                  </div>
                </div>

                {/* pet bread */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Rasa ljubimca
                  </label>
                  <input
                    className='form-control'
                    type='text'
                    id='petBread'
                    value={petBread}
                    onChange={onMutate}
                    maxLength='25'
                    placeholder="Persijska mačka, Doberman, ..."
                    required
                  />
                </div>

                {/* pet gender */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Rod
                  </label>
                  <div className='new-listing-btn-options'>
                    <button
                      type='button'
                      className={petGender === 'muško' ? 'form-btn-active' : 'form-btn'}
                      id='petGender'
                      value='muško'
                      onClick={onMutate}
                    >
                      Muško
                    </button>
                    <button
                      type='button'
                      className={petGender === 'žensko' ? 'form-btn-active' : 'form-btn'}
                      id='petGender'
                      value='žensko'
                      onClick={onMutate}
                    >
                      Žensko
                    </button>
                  </div>
                </div>

                {/* pet age & pet weight */}
                <div className="mb-3">
                  <div className="row">

                    {/* row item 1 - pet age */}
                    <div className="col-6">
                      <label className="form-label fw-bold">
                        Godište
                      </label>
                      <select className="form-select" id='petAge' onChange={onMutate}>
                        {Array.from({ length: 2024 - 2010 + 1 }, (_, idx) => {
                          const year = 2010 + idx;

                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    {/* row item 2 - pet weight */}
                    <div className="col-6">
                      <label className='form-label fw-bold'>
                        Težina
                      </label>
                      <div className='d-flex align-items-center'>
                        <input
                          className='form-control'
                          type='text'
                          id='petWeight'
                          value={petWeight}
                          onChange={onMutate}
                          maxLength='2'
                          placeholder="1/2/5/10..."
                          required
                        />
                        <p className='fw-bold ms-2 mb-0'>kg</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pet energy level */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Energija ljubimca
                  </label>
                  <div className='new-listing-btn-options'>
                    <button
                      type='button'
                      className={petEnergyLevel === 'nisko' ? 'form-btn-active' : 'form-btn'}
                      id='petEnergyLevel'
                      value='nisko'
                      onClick={onMutate}
                    >
                      Nisko
                    </button>
                    <button
                      type='button'
                      className={petEnergyLevel === 'srednje' ? 'form-btn-active' : 'form-btn'}
                      id='petEnergyLevel'
                      value='srednje'
                      onClick={onMutate}
                    >
                      Srednje
                    </button>
                    <button
                      type='button'
                      className={petEnergyLevel === 'visoko' ? 'form-btn-active' : 'form-btn'}
                      id='petEnergyLevel'
                      value='visoko'
                      onClick={onMutate}
                    >
                      Visoko
                    </button>
                  </div>
                </div>

                {/* good with children */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Dobar sa decom
                  </label>
                  <div className='new-listing-btn-options'>
                    <button
                      type='button'
                      className={goodWithChildren === 'da' ? 'form-btn-active' : 'form-btn'}
                      id='goodWithChildren'
                      value='da'
                      onClick={onMutate}
                    >
                      Da
                    </button>
                    <button
                      type='button'
                      className={goodWithChildren === 'ne' ? 'form-btn-active' : 'form-btn'}
                      id='goodWithChildren'
                      value='ne'
                      onClick={onMutate}
                    >
                      Ne
                    </button>
                  </div>
                </div>

                {/* good with other pets */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Dobar sa ostalim kućnim ljubimcima
                  </label>
                  <div className='new-listing-btn-options'>
                    <button
                      type='button'
                      className={goodWithOtherPets === 'da' ? 'form-btn-active' : 'form-btn'}
                      id='goodWithOtherPets'
                      value='da'
                      onClick={onMutate}
                    >
                      Da
                    </button>
                    <button
                      type='button'
                      className={goodWithOtherPets === 'ne' ? 'form-btn-active' : 'form-btn'}
                      id='goodWithOtherPets'
                      value='ne'
                      onClick={onMutate}
                    >
                      Ne
                    </button>
                  </div>
                </div>

                {/* special needs */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Posebne potrebe
                  </label>
                  <div className='new-listing-btn-options'>
                    <button
                      type='button'
                      className={specialNeeds === 'da' ? 'form-btn-active' : 'form-btn'}
                      id='specialNeeds'
                      value='da'
                      onClick={onMutate}
                    >
                      Da
                    </button>
                    <button
                      type='button'
                      className={specialNeeds === 'ne' ? 'form-btn-active' : 'form-btn'}
                      id='specialNeeds'
                      value='ne'
                      onClick={onMutate}
                    >
                      Ne
                    </button>
                  </div>
                </div>
              </div>

              {/* row item 2 */}
              <div className="col-12 col-lg-6">

                {/* special needs - textarea */}
                {specialNeeds === 'da' && (
                  <div className="mb-3">
                    <label className='form-label fw-bold'>
                      Posebne potrebe - Opis
                    </label>
                    <textarea className='form-control' id="specialNeedsDescription" value={specialNeedsDescription} onChange={onMutate} maxLength='200' rows={5} placeholder="Opis posebnih potreba ljubimca" required />
                  </div>
                )}

                {/* pet address */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Adresa
                  </label>
                  <input
                    className='form-control'
                    type='text'
                    id='petAddress'
                    value={petAddress}
                    onChange={onMutate}
                    maxLength='25'
                    placeholder="Adreasa na kojoj se nalazi kućni ljubimac"
                    required
                  />
                </div>

                {/* pet location */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Mesto
                  </label>
                  <input
                    className='form-control'
                    type='text'
                    id='petLocation'
                    value={petLocation}
                    onChange={onMutate}
                    maxLength='20'
                    placeholder="Naziv grada, sela..."
                    required
                  />
                </div>

                {/* pet images gallery */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Slike - do 5 slika, veličine do 1MB
                  </label>
                  <input
                    className='form-control'
                    type='file'
                    id='petImagesGallery'
                    onChange={onMutate}
                    accept='.jpg,.png,.jpeg'
                    multiple
                  // required
                  />
                </div>

                {/* contact info*/}
                <div className="my-5">
                  <h4 className="fw-bold">
                    Kontakt informacije:
                  </h4>

                  {/* owner full name */}
                  <div className="mb-3">
                    <label className='form-label fw-bold'>
                      Vaše ime i prezime
                    </label>
                    <input
                      className='form-control'
                      type='text'
                      id='contactFullName'
                      value={contactFullName}
                      onChange={onMutate}
                      maxLength='25'
                      placeholder="Petar Petrović"
                      required
                    />
                  </div>

                  {/* contact phone */}
                  <div className="mb-3">
                    <label className='form-label fw-bold'>
                      Telefon
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="phone-number">+381</span>
                      <input
                        className='form-control'
                        type='number'
                        id='contactPhoneNumber'
                        aria-describedby="phone-number"
                        value={contactPhoneNumber}
                        onChange={onMutate}
                        placeholder="601112222, 11222333"
                        required
                      />
                    </div>
                  </div>

                  {/* contact email */}
                  <div>
                    <label className='form-label fw-bold'>
                      Email adresa
                    </label>
                    <input
                      className='form-control'
                      type='email'
                      id='contactEmailAddress'
                      value={contactEmailAddress}
                      onChange={onMutate}
                      maxLength='30'
                      placeholder="email@gmail.com"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* submit btn */}
            <div className="submit-button text-center">
              <button type='submit' className='px-5 py-3 fw-bold text-white btn btn-success'>
                Objavi Oglas
              </button>
            </div>
          </form>

        </div>
      </div>

    </section>
  )
}

export default PostNewPetListing