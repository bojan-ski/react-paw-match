// axios
import axios from "axios"
//data
import contactTopic from "../data/contactTopic"
// components
import PageHeader from '../components/PageHeader'
// toastify
import { toast } from 'react-toastify'
import FormInput from "../components/FormInput"


const Contact = () => {
  const handleContactFormSubmit = async e => {
    e.preventDefault()

    if (e.target.elements[2].value == 'Odaberite') {
      toast.warning('Molimo Vas da odaberete "Temu" Vaše poruke')
      return
    }

    const emailContent = {
      from_name: e.target.elements[0].value.trim(),
      from_email: e.target.elements[1].value.trim(),
      email_topic: e.target.elements[2].value,
      message: e.target.elements[3].value.trim()
    }

    const data = {
      service_id: `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
      template_id: `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
      user_id: `${import.meta.env.VITE_EMAILJS_API_KEY}`,
      template_params: emailContent
    };

    try {     
      const response = await axios.post(`${import.meta.env.VITE_EMAILJS_URL}`, data)

      if (response) {
        // success message
        toast.success('Vaša poruka je poslata');

        e.target.elements[0].value = '';
        e.target.elements[1].value = '';
        e.target.elements[2].value = 'Odaberite';
        e.target.elements[3].value = '';
      }


    } catch (error) {
      // error message
      // console.log(error);      
      toast.error('Došlo je do greške prilikom slanja vaše poruke, molimo Vas probajte ponovo')

      return 
    }
  }

  return (
    <div className='contact-page'>

      <PageHeader title='Contact' />

      <div className="container">

        <form className="p-5 rounded-4" onSubmit={handleContactFormSubmit}>
          <h6 className="fw-bold text-center text-muted border-bottom pb-4 mb-5">
            Ukoliko imate dodatnih pitanja vezano za bilo koju od naših aktivnosti i delokruga rada molimo Vas da nas kontaktirate preko ove forme.
          </h6>

          <div className="row">

            {/* row item 1 */}
            <div className="col-12 col-lg-4 mb-4">
              <FormInput label='Vaše ime i prezime' name='userContactFormName' type='text' placeholder='Unesite vaše ime i prezime' required={true}/>

              {/* <label htmlFor="userContactFormName" className="form-label fw-bold">
                Vaše ime i prezime
              </label>
              <input type="text" className="form-control px-3 py-2" id="userContactFormName" placeholder="Unesite vaše ime i prezime" required /> */}
            </div>

            {/* row item 2 */}
            <div className="col-12 col-lg-4 mb-4">
            <FormInput label='Vaša elektronska pošta' name='userContactFormEmail' type='email' placeholder='Unesite vašu elektronsku pošta' required={true}/>

              {/* <label htmlFor="userContactFormEmail" className="form-label fw-bold">
                Vaša elektronska pošta
              </label>
              <input type="email" className="form-control px-3 py-2" id="userContactFormEmail" placeholder="Unesite vašu elektronsku pošta" required /> */}
            </div>

            {/* row item 3 */}
            <div className="col-12 col-lg-4 mb-4">
              <label htmlFor="topic" className="form-label fw-bold">
                Tema kontakta
              </label>
              <select id="topic" className="form-select px-3 py-2">
                <option>Odaberite</option>
                {contactTopic.map((topic, idx) => {
                  return <option key={idx} value={topic} className="option">
                    {topic}
                  </option>
                })}
              </select>
            </div>

            {/* row item 4 */}
            <div className="col-12 mb-4">
              <label htmlFor="userContactFormMessage" className="form-label fw-bold">
                Poruka
              </label>
              <textarea rows="5" className="form-control" id="userContactFormMessage" placeholder="Tekst vaše poruke..." required />
            </div>
          </div>

          {/* submit button */}
          <button type="submit" className="btn btn-primary">
            Pošaljite
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact