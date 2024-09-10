import { Link } from "react-router-dom"
// react icons
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { BsInstagram, BsTwitter } from "react-icons/bs"


const FooterSocialLinks = () => {
    return (
        <ul className="footer-social-links list-unstyled d-flex justify-content-end">
            <li className="footer-social-link me-4">
                <Link to='https://www.facebook.com' className="text-white fw-bold p-2" target="_blank">
                    <FaFacebookF size={20} />
                </Link>
            </li>
            <li className="footer-social-link me-4">
                <Link to='https://twitter.com' className="text-white fw-bold p-2" target="_blank">
                    <BsTwitter size={20} />
                </Link>
            </li>
            <li className="footer-social-link me-4">
                <Link to='https://www.linkedin.com' className="text-white fw-bold p-2" target="_blank">
                    <FaLinkedin size={20} />
                </Link>
            </li>
            <li className="footer-social-link">
                <Link to='https://www.instagram.com' className="text-white fw-bold p-2" target="_blank">
                    <BsInstagram size={20} />
                </Link>
            </li>
        </ul>
    )
}

export default FooterSocialLinks