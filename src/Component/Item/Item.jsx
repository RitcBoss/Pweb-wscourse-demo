import React from 'react'
import './Item.css'

const Item = (props) => {
    return (
        <>
            <div class="product-grid-card">
                <div class="name-product">
                    <p class="name-product-t">FULL-COURSE</p>
                </div>
                <div class="img-product"><img src={props.image} /></div>
                <div class="title-product">
                    <p class="title-product-t-hd">{props.title}</p>
                    <p class="title-product-t-lm">{props.detail}</p>
                    <p class="title-product-t-sm">{props.description}</p>
                </div>
                <div class="price-product">
                    <div class="price-product-sell">
                        <p class="price-product-sell-t --price-product-sell-discount">{props.price_original}.-</p>
                        <p class="price-product-sell-t">{props.price_discount}.-</p>
                    </div>
                </div>
                <div class="list-product">
                    <div class="list-product-box-r">
                        <a href="#" class="list-product-box-r-t">ซื้อคอร์สนี้</a>
                    </div>
                    <div class="list-product-box-l">
                        <a href="#">ดูรายละเอียดเพิ่มเติม <i class="fa-solid fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item