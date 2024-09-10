// data
import testimonials from '../../data/testimonials';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";


const Testimonials = () => {
    return (
        <section className='testimonials mb-5'>


            <h2 className="text-center fw-bold mb-3">
                Testimonials
            </h2>


            {/* testimonials - swiper/slider */}
            <div className="testimonials-carousel">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                    speed={1000}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}
                >
                    {testimonials?.map(testimonial => {
                        return (
                            <SwiperSlide key={testimonial.userID} className="text-center">
                                <div className="swiper-content bg-white p-3 rounded-4">

                                    <div className="swiper-content-testimonial mb-3">
                                        <p className='fst-italic mb-0'>
                                            {testimonial.userTestimonial}
                                        </p>
                                    </div>

                                    <div className="swiper-content-author">
                                        <h6 className='fw-bold mb-1'>
                                            {testimonial.userName}
                                        </h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials