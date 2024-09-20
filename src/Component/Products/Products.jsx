import React from 'react'
import './Products.css'
import Item from '../Item/Item'
import course_products from '../assets/data/course_products'

const Products = () => {
    return (
        <>
            <div class="section__review-product">
                <div class="section__product-container">
                    <div class="section__product-bar">
                        <p class="product-bar-t-hd">การเรียนแบบคลิปวิดีโอ</p>
                        <p class="product-bar-t-lm">กำหนดจินตนาการของคุณจากแนวคิดสู่การสร้างสรรค์</p>
                    </div>
                    <div class="section__product-grid">
                        {course_products.map((item, key) => {
                            return (
                                <Item
                                    key={key}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    detail={item.detail}
                                    description={item.description}
                                    price_original={item.price_original}
                                    price_discount={item.price_discount} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products