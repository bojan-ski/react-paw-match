// asset 
import heroImg from '../../assets/dashboard/heroImg.jpeg'


const Hero = () => {
  return (
    <section className="hero mb-5">
      <div className="row">

        {/* row item 1 */}
        <div className="col-12 col-lg-5 d-flex align-items-center">

          <div className='hero-heading'>
            <h1 className='fw-bold mb-4'>
              PružiDom
            </h1>

            <h6 className='text-muted'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, maiores! Quidem, autem officia? Officia, inventore.
            </h6>
          </div>
          
        </div>

        {/* row item 1 */}
        <div className="col-7 d-none d-lg-block hero-img text-end">
          <img src={heroImg} alt="slika" className='img-fluid' />
        </div>

      </div>
    </section>
  )
}

export default Hero