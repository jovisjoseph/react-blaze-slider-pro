/* react-blaze-slider v1.7.2 by Manan Tank */
import BlazeSlider from 'blaze-slider';
import React from 'react';

function useBlazeSlider(config) {
    const sliderRef = React.useRef();
    const elRef = React.useRef(null);
    React.useEffect(() => {
        // if not already initialized
        if (!sliderRef.current) {
            sliderRef.current = new BlazeSlider(elRef.current, config);
        }
        // eslint-disable-next-line
    }, []);
    return elRef;
}

export { useBlazeSlider };
