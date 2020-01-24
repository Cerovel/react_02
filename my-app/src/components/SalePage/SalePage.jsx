import React from 'react';
import s from './SalePage.module.sass'
import ButtonAds from "./ButtonAds/ButtonAds";
 import AdsContainer from "./AdsContainer/AdsContainer";




const SalePage = (props) => {

    let SalePg = props.state_sale_page.sale_page.map((k)=> {
        return (
            <Ads brand_name={k.brand_name} price={k.price} phone_numb={k.phone_numb} condition={k.condition} year={k.year} desc={k.desc} photo={k.photo} desc_header={k.desc_header}/>
        )
    })

    return (
        <div className={s.salepage_grid}>
            <div className={s.button_add}>
                <ButtonAds/>
            </div>
            <div className={s.ads}>
               <AdsContainer/>
            </div>
        </div>
    )
};

export default SalePage;