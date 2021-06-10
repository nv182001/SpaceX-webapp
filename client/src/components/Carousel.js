import React from "react";
import {Carousel} from "react-responsive-carousel";

const Carousel1 = ({e}) => {
    return (
        <Carousel infiniteLoop key={e.id}>
            <div >
                <img alt="" src={e.flickr_images[0]} />
            </div>
            <div>
                <img alt="" src={e.flickr_images[1]} />
            </div>
        </Carousel>
    );
}
export default Carousel1