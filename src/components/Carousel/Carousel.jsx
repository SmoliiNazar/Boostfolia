import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
      autoplay: true,
      arrows: false,
      duration: 500
    };
    return (
      <div>
        <Slider {...settings}>
            <div className="tabs__footer">
                <div className="tabs__footer-wrapper">
                    <div className="arrow-wrapper">

                    <div className="tabs__footer-content">
                        <div className="content">
                            <img src="./icons/themeforest.png" alt="" />
                        </div>
                    </div>

                    <div className="tabs__footer-content">
                        <div className="content">
                            <img src="./icons/graph.png" alt="" />
                        </div>
                    </div>

                    <div className="tabs__footer-content">
                        <div className="content">
                            <img src="./icons/video.png" alt="" />
                        </div>
                    </div>

                    </div>
                </div>
                </div>
                <div className="tabs__footer">
                    <div className="tabs__footer-wrapper">
                        <div className="arrow-wrapper">
                            <div className="tabs__footer-content">
                            <div className="content">
                                <img src="./icons/themeforest.png" alt="" />
                            </div>
                    </div>

                    <div className="tabs__footer-content">
                        <div className="content">
                            <img src="./icons/graph.png" alt="" />
                        </div>
                    </div>

                    <div className="tabs__footer-content">
                        <div className="content">
                            <img src="./icons/video.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}