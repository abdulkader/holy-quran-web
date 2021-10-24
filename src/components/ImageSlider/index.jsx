import React, { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ImageSlider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <Fragment>
      <div className="navigation-wrapper relative">
        <div ref={sliderRef} className="keen-slider">
          {data?.map((item) => (
            <div className="keen-slider__slide number-slide1" key={item?.url}>
              <img src={item?.url} alt={item?.label} />
            </div>
          ))}
        </div>
        {slider && data?.length > 1 && (
          <div
            className={cx(
              'dots',
              'absolute w-full z-10 top-auto bottom-0 flex align-middle justify-end p-2'
            )}
          >
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  className={cx(
                    'dot w-2.5 h-2.5 appearance-none mx-0.5 rounded-full',
                    currentSlide === idx ? 'bg-primary-500' : 'bg-primary-200'
                  )}
                />
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

ImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImageSlider;
