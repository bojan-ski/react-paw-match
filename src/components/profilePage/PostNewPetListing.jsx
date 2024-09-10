import { useState } from "react";
// api func
import storeUploadedImage from "../../api/storeUploadedImage";
import publishNewListing from "../../api/publishNewListing";
// page
import Loading from '../../pages/Loading'
// components
import SectionHeader from "../SectionHeader";
import PostNewListingButtonGroup from "./PostNewListingButtonGroup";
import PostNewListingInputField from "./PostNewListingInputField";
// toastify
import { toast } from "react-toastify";


const PostNewPetListing = ({ userProfileDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [listingFormData, setListingFormData] = useState({
    userRef: userProfileDetails.userID,
    listingCreatedBy: userProfileDetails.userName,
    petProfileImage: null,
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
    petDescription: '',
    petAddress: '',
    petLocation: '',
    petImagesGallery: [],
    contactFullName: '',
    contactPhoneNumber: '',
    contactEmailAddress: '',
  });

  const { petProfileImage, petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petDescription, petAddress, petLocation, petImagesGallery, contactFullName, contactPhoneNumber, contactEmailAddress } = listingFormData


  const onMutate = (e) => {
    const { files, id, value } = e.target;

    if (id === 'petImagesGallery') {
      const newFiles = Array.from(files).slice(0, 5 - petImagesGallery.length);
      setListingFormData(prevState => ({
        ...prevState,
        [id]: [...prevState.petImagesGallery, ...newFiles]
      }));
      e.target.value = '';
    } else if (id === 'petProfileImage') {
      setListingFormData(prevState => ({
        ...prevState,
        petProfileImage: files[0]
      }));
    } else {
      setListingFormData(prevState => ({
        ...prevState,
        [id]: value.toLowerCase()
      }));
    }
  };

  const removeImage = (index) => {
    setListingFormData(prevState => ({
      ...prevState,
      petImagesGallery: prevState.petImagesGallery.filter((_, i) => i !== index)
    }));
  }

  const handleCreateNewListingSubmit = async (e) => {
    e.preventDefault()

    // spinner
    setIsLoading(true)

    if (!petProfileImage) {
      toast.warning("Profilna slika ljubimca je obavezna.");

      // spinner
      setIsLoading(false)
      return;
    }

    if (petImagesGallery.length === 0) {
      toast.warning("Morate dodati barem jednu sliku u galeriji.");

      // spinner
      setIsLoading(false)
      return;
    }

    // if image/images (gallery) are more then 1MB
    const correctGalleryImageSize = Array.from(petImagesGallery).every(image => {
      if (image.size >= 1000000) {
        return false;
      }
      return true;
    })

    if (correctGalleryImageSize && petProfileImage.size <= 1000000) {
      // pet profile image
      const petProfileImageUrl = await storeUploadedImage('petProfileImages', petProfileImage, userProfileDetails.userName, contactEmailAddress)

      // pet images gallery
      let petImagesGalleryUrls = await Promise.all(
        [...petImagesGallery].map(petImage => storeUploadedImage('petGalleryImages', petImage, userProfileDetails.userName, contactEmailAddress))
      ).catch(() => {
        // spinner
        setIsLoading(false)

        // error message in case there is a problem with uploading images
        toast.error('Greška prilikom otpremanja slika, molimo Vas probajte ponovo')

        return
      })

      // post new listing to DB
      // console.log(listingFormData, imageUrls);
      const response = await publishNewListing(listingFormData, petProfileImageUrl, petImagesGalleryUrls)

      // spinner
      setIsLoading(false)

      if (response) {
        // success message
        toast.success('Uspešno ste postavili Vaš oglas')

        // setListingFormData({
        //   userRef: userProfileDetails.userID,
        //   listingCreatedBy: userProfileDetails.userName,
        //   petProfileImage: null,
        //   petType: 'pas',
        //   petBread: '',
        //   petGender: 'muško',
        //   petAge: '2010',
        //   petWeight: '',
        //   petEnergyLevel: 'nisko',
        //   goodWithChildren: 'da',
        //   goodWithOtherPets: 'da',
        //   specialNeeds: 'ne',
        //   specialNeedsDescription: '',
        //   petAddress: '',
        //   petLocation: '',
        //   petImagesGallery: [],
        //   contactFullName: '',
        //   contactPhoneNumber: '',
        //   contactEmailAddress: '',
        // });

        // after the user has posted a new listing, the user is redirected to the Dashboard page
        // window.location.href = '/'
      }
    } else {
      // spinner
      setIsLoading(false)

      // error message if one or more images are over 1MB
      toast.warning('Ograničenje za otpremanje slike je do 1MB, molimo Vas probajte ponovo')

      return
    }
  }

  if (isLoading) return <Loading />

  return (
    <section className='post-new-listing'>
      <div className="post-new-listing-form py-2 rounded-5">

        {/* new listing header */}
        <SectionHeader title='Postavi novi oglas' marginBot='mb-3' />

        {/* new listing body start */}
        <div className="new-listing-body">

          <form className="p-4 rounded-5" onSubmit={handleCreateNewListingSubmit}>
            <div className="row">

              {/* row item 1 */}
              <div className="col-12 col-lg-6">

                {/* pet profile image */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Profilna Slika - veličine do 1mb
                  </label>

                  {/* Hidden file input */}
                  <input
                    className='d-none'
                    type='file'
                    id='petProfileImage'
                    onChange={onMutate}
                    accept='.jpg,.png,.jpeg'
                  />

                  {/* btn to trigger file input */}
                  <button
                    type="button"
                    className="d-block btn btn-primary"
                    onClick={() => document.getElementById('petProfileImage').click()}
                  >
                    Dodaj Profilnu Sliku
                  </button>

                  {/* Image preview */}
                  {petProfileImage && (
                    <div className="mt-3">
                      <img
                        src={URL.createObjectURL(petProfileImage)}
                        alt="Pet Profile"
                        className="img-thumbnail"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </div>

                {/* pet type */}
                <PostNewListingButtonGroup
                  label='Tip ljubimca'
                  id='petType'
                  options={[
                    { label: 'Pas', value: 'pas' },
                    { label: 'Mačka', value: 'mačka' }
                  ]}
                  selectedValue={petType}
                  onClick={onMutate}
                />

                {/* pet bread */}
                <PostNewListingInputField
                  label='Rasa ljubimca'
                  id='petBread'
                  type='text'
                  placeholder='Persijska mačka, Doberman, ...'
                  value={petBread}
                  onChange={onMutate}
                  maxLength={25}
                />

                {/* pet gender */}
                <PostNewListingButtonGroup
                  label='Rod'
                  id='petGender'
                  options={[
                    { label: 'Muško', value: 'muško' },
                    { label: 'Žensko', value: 'žensko' }
                  ]}
                  selectedValue={petGender}
                  onClick={onMutate}
                />

                {/* pet age & pet weight */}
                <div className="mb-3">
                  <div className="row">

                    {/* pet age */}
                    <div className="col-6">
                      <label className="form-label fw-bold">
                        Godište
                      </label>
                      <select className="form-select" id='petAge' value={petAge} onChange={onMutate}>
                        {Array.from({ length: 2024 - 2010 + 1 }, (_, idx) => {
                          const year = 2010 + idx;

                          return <option key={year} value={year}>
                            {year}
                          </option>;
                        })}
                      </select>
                    </div>

                    {/* pet weight */}
                    <div className="col-6 d-flex justify-content-center align-items-end">
                      <PostNewListingInputField
                        label='Težina'
                        id='petWeight'
                        type='number'
                        placeholder='1/2/5/10...'
                        value={petWeight}
                        onChange={onMutate}
                        max='99'
                      />
                      <p className='fw-bold ms-2'>kg</p>
                    </div>
                  </div>
                </div>

                {/* pet energy level */}
                <PostNewListingButtonGroup
                  label='Energija ljubimca'
                  id='petEnergyLevel'
                  options={[
                    { label: 'Nisko', value: 'nisko' },
                    { label: 'Srednje', value: 'srednje' },
                    { label: 'Visoko', value: 'visoko' }
                  ]}
                  selectedValue={petEnergyLevel}
                  onClick={onMutate}
                />

                {/* good with children */}
                <PostNewListingButtonGroup
                  label='Dobar sa decom'
                  id='goodWithChildren'
                  options={[
                    { label: 'Da', value: 'da' },
                    { label: 'Ne', value: 'ne' }
                  ]}
                  selectedValue={goodWithChildren}
                  onClick={onMutate}
                />
              </div>

              {/* row item 2 */}
              <div className="col-12 col-lg-6">

                {/* good with other pets */}
                <PostNewListingButtonGroup
                  label='Dobar sa ostalim kućnim ljubimcima'
                  id='goodWithOtherPets'
                  options={[
                    { label: 'Da', value: 'da' },
                    { label: 'Ne', value: 'ne' }
                  ]}
                  selectedValue={goodWithOtherPets}
                  onClick={onMutate}
                />

                {/* special needs */}
                <PostNewListingButtonGroup
                  label='Posebne potrebe'
                  id='specialNeeds'
                  options={[
                    { label: 'Da', value: 'da' },
                    { label: 'Ne', value: 'ne' }
                  ]}
                  selectedValue={specialNeeds}
                  onClick={onMutate}
                />

                {/* special needs - description */}
                {listingFormData.specialNeeds === 'da' && (
                  <div className="mb-3">
                    <label className='form-label fw-bold'>
                      Posebne potrebe - Opis
                    </label>
                    <textarea
                      className='form-control'
                      id="specialNeedsDescription"
                      value={specialNeedsDescription}
                      onChange={onMutate}
                      maxLength='250'
                      rows={4}
                      placeholder="Opis posebnih potreba ljubimca"
                      required
                    />
                  </div>
                )}

                {/* pet description */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Dodatne informacije
                  </label>
                  <textarea
                    className='form-control'
                    id="petDescription"
                    value={petDescription}
                    onChange={onMutate}
                    maxLength='250'
                    rows={4}
                    placeholder="Dodatne informacije vezanih za ljubimca"
                    required
                  />
                </div>

                {/* pet address */}
                <PostNewListingInputField
                  label='Adresa'
                  id='petAddress'
                  type='text'
                  placeholder='Adresa na kojoj se nalazi kućni ljubimac'
                  value={petAddress}
                  onChange={onMutate}
                  maxLength={30}
                />

                {/* pet location */}
                <PostNewListingInputField
                  label='Mesto'
                  id='petLocation'
                  type='text'
                  placeholder='Naziv grada, sela...'
                  value={petLocation}
                  onChange={onMutate}
                  maxLength={20}
                />

                {/* pet images gallery */}
                <div className="mb-3">
                  <label className='form-label fw-bold'>
                    Slike - do 5 slika, veličine do 1mb
                  </label>

                  {/* Hidden file input */}
                  <input
                    className='d-none'
                    type='file'
                    id='petImagesGallery'
                    onChange={onMutate}
                    accept='.jpg,.png,.jpeg'
                    multiple
                    disabled={petImagesGallery.length >= 5}
                  />

                  {/* btn to trigger file input */}
                  <button
                    type="button"
                    className="d-block btn btn-primary"
                    onClick={() => document.getElementById('petImagesGallery').click()}
                    disabled={petImagesGallery.length >= 5}
                  >
                    Dodaj Slike
                  </button>
                </div>

                {/* Image preview section */}
                <div className="images-preview mb-3 d-flex">
                  {petImagesGallery.length > 0 && petImagesGallery.map((file, index) => (
                    <div key={index} className="image-item text-center me-3">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`preview-${index}`}
                        className="img-thumbnail d-block mb-2"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeImage(index)}
                      >
                        R
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* row item 3 */}
              <div className="col-12">

                {/* Contact information */}
                <h4 className="fw-bold mt-4 mb-3">
                  Kontakt informacije:
                </h4>

                {/* contact full name */}
                <PostNewListingInputField
                  label='Vaše ime i prezime'
                  id='contactFullName'
                  type='text'
                  placeholder='Petar Petrović'
                  value={contactFullName}
                  onChange={onMutate}
                />

                {/* contact phone number */}
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
                      max='999999999'
                      required
                    />
                  </div>
                </div>

                {/* contact email address */}
                <PostNewListingInputField
                  label='Email adresa'
                  id='contactEmailAddress'
                  type='email'
                  placeholder='email@gmail.com'
                  value={contactEmailAddress}
                  onChange={onMutate}
                />

              </div>
            </div>

            {/* submit btn */}
            <div className="submit-button text-center mt-3">
              <button type='submit' className='px-5 py-3 fw-bold text-white btn btn-success'>
                Objavi Oglas
              </button>
            </div>
          </form>
        </div>
        {/* new listing body end */}

      </div>
    </section>
  );
}

export default PostNewPetListing