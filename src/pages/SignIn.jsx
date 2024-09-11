import { useState } from 'react';
// components
import RegularSignInForm from '../components/signInPage/RegularSignInForm';
import GoogleSignInForm from '../components/signInPage/GoogleSignInForm';
// react icons 
import { TfiWrite } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";


const SignIn = () => {
  const [selectedSignUpOption, setSelectedSignUpOption] = useState('regular')

  return (
    <div className='sing-in-page'>
      <div className="container">
        <div className='sing-in-page-content p-4 rounded-5'>

          <h3 className="text-center fw-bold mb-4">
            Prijavi se
          </h3>

          <section className="sign-up-select-options border-bottom pb-4 mb-4">
            <button type='button' className={selectedSignUpOption == 'regular' ? "select-option btn border text-muted me-2" : "btn border text-muted me-2"} onClick={() => setSelectedSignUpOption('regular')}>
              <TfiWrite />
            </button>
            <button type='button' className={selectedSignUpOption == 'google' ? "select-option btn border text-muted" : "btn border text-muted"} onClick={() => setSelectedSignUpOption('google')}>
              <FaGoogle />
            </button>
          </section>

          {selectedSignUpOption == 'regular' ? <RegularSignInForm /> : <GoogleSignInForm />}
        </div>
      </div>
    </div>
  )
}

export default SignIn