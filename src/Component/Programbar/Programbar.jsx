import React from 'react'
import './Programbar.css'
import icon_sollumz from '../assets/imges/sollumz.png'
import icon_openiv from '../Assets/imges/openiv.png'
import icon_codewalker from '../Assets/imges/codewalker.png'
import icon_blender from '../Assets/imges/blender.png'

const Programbar = () => {
    return (
        <>
            <div className="section__program-bar">
                <div className="section__program-container">
                    <div className="section__program-bar">
                        <p>โปรแกรมพื้นฐานที่ใช้ในการเรียน</p>
                    </div>
                    <div className="section__program-item">
                        <div className="program-item">
                            <div className="item">
                                <img src={icon_sollumz} alt='sollumz'/>
                                    <p>SOLLUMZ</p>
                            </div>
                        </div>
                        <div className="program-item">
                            <div className="item">
                                <img src={icon_openiv} alt='openiv'/>
                                    <p>OPENIV</p>
                            </div>
                        </div>
                        <div className="program-item">
                            <div className="item">
                                <img src={icon_codewalker} alt='codewalker'/>
                                    <p>CODEWALKER</p>
                            </div>
                        </div>
                        <div className="program-item">
                            <div className="item">
                                <img src={icon_blender} alt='blender'/>
                                    <p>BLENDER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programbar