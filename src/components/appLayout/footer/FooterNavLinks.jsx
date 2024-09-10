import { NavLink } from "react-router-dom"


const FooterNavLinks = () => {
    return (
        <div className="footer-nav-links row">

            {/* row item 1 */}
            <div className="col-6">
                <ul className="ps-0">
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/' className='capitalize text-white'>
                            Početna
                        </NavLink>
                    </li>
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/oglasi' className='capitalize text-white'>
                            Oglasi
                        </NavLink>
                    </li>
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/nalog' className='capitalize text-white'>
                            Moj Nalog
                        </NavLink>
                    </li>
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/blog' className='capitalize text-white'>
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* row item 2 */}
            <div className="col-6">
                <ul className="ps-0">
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/forum' className='capitalize text-white'>
                            Forum
                        </NavLink>
                    </li>
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/kontakt' className='capitalize text-white'>
                            Kontakt
                        </NavLink>
                    </li>
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/pravila-koriscenja' className='capitalize text-white'>
                            Pravila Koriscenja
                        </NavLink>
                    </li>
                    <li className="footer-nav-link mb-2">
                        <NavLink to='/pravila-privatnosti' className='capitalize text-white'>
                            Pravila Privatnosti
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterNavLinks