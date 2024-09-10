// components
import FooterLinks from "./FooterLinks"
import FooterRights from "./FooterRights"


const Footer = () => {
  return(
    <footer className="pt-4 pb-3 footer bg-dark">
        <div className="container">
            <FooterLinks/>

            <FooterRights/>
        </div>
    </footer>
  )
}

export default Footer