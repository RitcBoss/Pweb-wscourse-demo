import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon_img from '../assets/imges/img.png'
import './About.css'

import img_ref01 from '../assets/imges/img_ref01.png'
import img_ref02 from '../assets/imges/img_ref02.png'
import img_ref03 from '../assets/imges/img_ref03.png'
import img_ref04 from '../assets/imges/img_ref04.png'
import img_ref05 from '../assets/imges/img_ref05.png'
import img_ref06 from '../assets/imges/img_ref06.png'
import img_ref07 from '../assets/imges/img_ref07.png'
import img_ref08 from '../assets/imges/img_ref08.png'
import img_ref09 from '../assets/imges/img_ref09.png'
import img_ref10 from '../assets/imges/img_ref10.png'
import img_ref11 from '../assets/imges/img_ref11.png'
import img_ref12 from '../assets/imges/img_ref12.png'

const About = () => {

    const options = {
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                items: 3,
                nav: false,
                loop: true
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            }
        }
    }

    return (
        <>
            <div className="section__about">
                <div className="section__about-container">
                    <div className="section__about-bar">
                        <p className="section-about-bar-t-hd">ผลงานสร้างสรรค์</p>
                        <p className="section-about-bar-t-lm">By wsdesign</p>
                    </div>
                    <div className="section__about-item">
                        <OwlCarousel className="owl-carousel owl-theme" {...options}>
                            <div className="item"><img src={img_ref01} alt="" /></div>
                            <div className="item"><img src={img_ref02} alt="" /></div>
                            <div className="item"><img src={img_ref03} alt="" /></div>
                            <div className="item"><img src={img_ref04} alt="" /></div>
                            <div className="item"><img src={img_ref05} alt="" /></div>
                            <div className="item"><img src={img_ref06} alt="" /></div>
                            <div className="item"><img src={img_ref07} alt="" /></div>
                            <div className="item"><img src={img_ref08} alt="" /></div>
                            <div className="item"><img src={img_ref09} alt="" /></div>
                            <div className="item"><img src={img_ref10} alt="" /></div>
                            <div className="item"><img src={img_ref11} alt="" /></div>
                            <div className="item"><img src={img_ref12} alt="" /></div>
                        </OwlCarousel>
                    </div>
                    <div className="section__about-main">
                        <div className="section__about-main-content">
                            <p className="section-about-main-t">ประสมการณ์การทำพร็อพ</p>
                            <p className="section-about-main-t --text-color-white">มากกว่า 2 ปี</p>
                        </div>
                        <div className="section__about-main-box">
                            <div className="section-about-main-box-item">
                                <p className="section-about-item-t-hd">300+</p>
                                <p className="section-about-item-t-sm">ผลงานพร็อพ</p>
                            </div>
                            <div className="section-about-main-box-item">
                                <p className="section-about-item-t-hd">20+</p>
                                <p className="section-about-item-t-sm">ผลงานแมพ</p>
                            </div>
                            <div className="section-about-main-box-item">
                                <p className="section-about-item-t-hd">50+</p>
                                <p className="section-about-item-t-sm">ผู้เรียน</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About