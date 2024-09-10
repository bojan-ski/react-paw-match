// data
import partners from '../../data/partners';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const Partners = () => {
    return (
        <section className="partners mb-5">
            <div className="container">

                <h4 className="fw-bold text-center mb-4">
                    Partners
                </h4>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 0,
                    }}
                    speed={7000}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 6,
                        }
                    }}
                >
                    {partners.map((partner, idx) => {
                        return <SwiperSlide key={idx}>
                            <p className='fw-bold mb-0'>
                                {partner}
                            </p>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Partners