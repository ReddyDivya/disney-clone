import styled from 'styled-components';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (<div>
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    </div>);
}

const Carousel = styled(Slider)`
    margin-top:20px;

    $ > button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &: hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button{
        &:before{
            font-size:10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -65px;
    }

    .slick-next{
        right: -65px;
    }
`;

const Wrap = styled.div``;

export default ImgSlider;