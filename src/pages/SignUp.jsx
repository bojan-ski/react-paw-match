import { useState } from 'react';
// components
import SelectOptions from '../components/SelectOptions';
import RegularSignUpForm from '../components/signUpPage/RegularSignUpForm';
import GoogleSignUpForm from '../components/signUpPage/GoogleSignUpForm';
// react icons 
import { TfiWrite } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {
  const [selectedSignUpOption, setSelectedSignUpOption] = useState('regular')

  return (
    <div className='sing-up-page'>
      <div className="container">
        <div className='sing-up-page-content p-4 rounded-5'>

          <h3 className="text-center fw-bold mb-4">
            Registruj se
          </h3>

          <SelectOptions sectionCss='sign-up-select-options border-bottom pb-4' selectedOption={selectedSignUpOption} setSelectedOption={setSelectedSignUpOption} selectedOptionOne='regular' selectedOptionTwo='google' selectedOptionOneMark={<TfiWrite />} selectedOptionTwoMark={<FaGoogle />}/>

          {/* <section className="sign-up-select-options border-bottom pb-4 mb-4">
            <button type='button' className={selectedSignUpOption == 'regular' ? "select-option btn border text-muted me-2" : "btn border text-muted me-2"} onClick={() => setSelectedSignUpOption('regular')}>
              <TfiWrite />
            </button>
            <button type='button' className={selectedSignUpOption == 'google' ? "select-option btn border text-muted" : "btn border text-muted"} onClick={() => setSelectedSignUpOption('google')}>
              <FaGoogle />
            </button>
          </section> */}

          {selectedSignUpOption == 'regular' ? <RegularSignUpForm /> : <GoogleSignUpForm />}        
        </div>        
      </div>
    </div>
  )
}

export default SignUp