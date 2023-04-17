import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';
import { SliderWrap } from './SliderWrap';
import { small_id } from '../utils';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const Slider = ({ children, settings }) => {
  const sliderOptions = {
    slidesPerView: 1,
    pagination: true,
    navigation: true,
    loop: true,
    ...settings,
  };

  return (
    <SliderWrap
      key={small_id}
      dots={sliderOptions?.pagination}
      arrows={sliderOptions?.navigation}
    >
      <Swiper {...sliderOptions}>{children}</Swiper>
    </SliderWrap>
  );
};

export { SwiperSlide as Slide };
export default Slider;
