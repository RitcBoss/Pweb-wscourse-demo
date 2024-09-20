import React from 'react'
import './Article.css'
import { Link } from 'react-router-dom'

const Article = () => {
    return (
        <>
            <div className="article-main">
                <div className="article__container">
                    <div className="article__left">
                        <div className="article__left-text-hd">
                            <p className="article-l-t-hd">MODEL ANIMATION <span>CREATE ON FIVEM</span></p>
                        </div>
                        <p className="article-l-t-lm">คอร์สเรียนทำโมเดลอนิเมชั่นสำหรับ GTA V FIVEM จาก ผู้มีประสบการณ์มากกว่า 2 ปี
                        </p>
                        <div className="article__left-text-sm">
                            <p className="article-l-t-sm">สอบถามข้อมูลเพิ่มเติมได้ที่ <Link>wscourse by Discord</Link></p>
                        </div>
                        <div className="article__l-box">
                            <div className="article-l-box-content">
                                <span>ปั้นโมเดลขั้นพื้นฐาน</span>
                            </div>
                            <div className="article-l-box-content">
                                <span>ลงเทคเจอร์</span>
                            </div>
                            <div className="article-l-box-content">
                                <span> ทำโมเดลอนิเมชั่น</span>
                            </div>
                        </div>
                    </div>
                    <div className="article__right">
                        <div className="article__vido">
                            <iframe src="https://www.youtube.com/embed/ZqyDEECuPnM">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article