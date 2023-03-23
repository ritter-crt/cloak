
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { SliderWrap } from './SliderWrap';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const Slider = ({children, settings}) => {
  const sliderOptions = {
    slidesPerView: 1,
    pagination: true,
    navigation: true,
    loop: true,
    // autoplay: {
    //  delay: 1000,
    //  disableOnInteraction: false,
    // },
    ...settings
    // Uncomment autoply option then you can see the swiper play automatically
    // you can override setting options pass settings props to this component
  };
  // swiper takes options as props
  // you can find more about options on the website link above

  return (
    <SliderWrap
      dots={sliderOptions?.pagination}
      arrows={sliderOptions?.navigation}
      // I pass dots and arrow props to custom pagination and navigation in styled-component
    >
      <Swiper
        {...sliderOptions}
      >
        {children}
      </Swiper>
    </SliderWrap>
  );
};

export {SwiperSlide as Slide};
export default Slider;