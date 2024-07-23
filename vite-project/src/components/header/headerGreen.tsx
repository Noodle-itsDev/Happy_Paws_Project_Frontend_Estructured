import React from "react";
import navbarImgGreen from '../../assets/img/navbarImgGreen.png';

const HeaderGreen: React.FC = () => {
    return(
        <>
        <img src={navbarImgGreen} alt="navbar Imgage Green" className="sticky z-10 w-[100vw] h-[200px] lg:h-[16rem] top-[-100px]"/>
        </>
    );
}

export default HeaderGreen;
