import React, { useRef, useEffect } from "react";
import ImageCarousel from "../../components/bannerComponent/bannerComponent";
import Img1 from "../../assets/img/pexels-katlovessteve-551628.jpg";
import Img2 from "../../assets/img/pexels-cong-h-613161-1404819.jpg";
import Img3 from "../../assets/img/image.jpg";
import SimpleBottomNavigation from "../../components/navigation/navigationNavBar";
import PrimarySearchAppBar from "../../components/header/headerGradient";
import LogoImage from '../../assets/img/LogoPaws.png';
import '../../assets/fuentes/playwrite.css';
import './homeView.css';
import { animateImage } from "./homeViewButtons";
import CometTrail from "./comet Trail/comet";
import ToggleDiv from "../../components/toogleDiv/toogleDiv";
import { dividerClasses } from "@mui/material";


const items = [
    { image: Img1, text: "Adopta a tu futura alma gemela" },
    { image: Img2, text: "Ayuda a un animalito a tener un mejor día" },
    { image: Img3, text: "Gestiona tus protectoras" },
];

const HomeView: React.FC = () => {
    const buttonsContainerRef = useRef<HTMLDivElement | null>(null);
    const logoImgRef = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        if (buttonsContainerRef.current) {
        }

        if (logoImgRef.current) {
            animateImage(logoImgRef);
        }
    }, []);

    return (
        <div className="w-full h-screen flex flex-col">
            <div className="fixed top-0 left-0 w-full z-[9900]">
                <PrimarySearchAppBar backgroundGradient="linear-gradient(311deg, rgba(57,200,148,1) 0%, rgba(255,214,157,1) 76%, rgba(253,141,29,1) 100%)" />
                <SimpleBottomNavigation
                    labels={{
                        textoUno: "Uno",
                        textoDos: "Dos",
                        textoTres: "Tres",
                        textoCuatro: "Cuatro",
                        textoCinco: "Cinco",
                        textoSeis: "Seis",
                    }}
                />
            </div>
            <section className="mt-20 w-[99vw]">
                <div
                    className="h-[700px] w-[100vw] bg-opacity-60 pl-auto pr-auto flex justify-center align center"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,217,137,1) 100%)",
                    }}
                >
                    <div className="fixed" style={styles.container}>
                        <ImageCarousel items={items} />
                    </div>
                </div>
            </section>
            <section className="relative z-[1100] buttons-animation w-[100vw]" ref={buttonsContainerRef}>
                <CometTrail />
                <div className=" flex flex-col lg:flex-row items-center justify-center backgroundAnimated h-[900px] p-4 lg:p-8">
                    <div className="max-w-[100vw] textAdopciones">
                        <div className="mt-[-100px] flex align-center justify-center">
                            <img className="imageLogo" src={LogoImage} alt="Logo" ref={logoImgRef} />
                        </div>
                        <div className="bg-white-500 flex align-center justify-center textContainerBenefits max-w-[1400px] mt-[100px]">
                            <span>
                            Adopta Amor, Un Hogar Seguro, Una Vida Feliz
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="relative h-[830px] interSection z-[1400] bg-white">
                </div>
            </section>
            <section className="relative z-[1500] top-[-700px] flex items-center justify-center">
                <div className="w-[80vw] h-[830px] bg-[#e9d49c] flex items-center rounded-[20px]" style={{
                    boxShadow: '0px 20px 20px 20px #808080a1'
                }}>
                    <div className=" flex">
                        <ToggleDiv
                            contentOne={<div></div>}
                            contentTwo={<div></div>}
                            zIndexOne={1200}
                            zIndexTwo={1200}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 6rem)",
        overflow: "hidden",
    },
};

export default HomeView;
