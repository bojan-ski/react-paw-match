// components
import FooterNavLinks from './FooterNavLinks'
import FooterSocialLinks from './FooterSocialLinks'

const FooterLinks = () => {
    return (
        <section className='mb-3 border-bottom'>
            <div className="row">

                {/* row item 1 */}
                <div className="col-6">
                    <FooterNavLinks />
                </div>

                {/* row item 2 */}
                <div className="col-6">
                    <FooterSocialLinks />
                </div>
            </div>
        </section>
    )
}

export default FooterLinks