import React, { Suspense, useState, useEffect } from "react";
import BgVideo from "../assets/video/4625769-hd_1920_1080_30fps.mp4";
import "./registerLoginView.css";
import LogoGreenYellowPaws from "../assets/img/orangePaws.png";

const PrimarySearchAppBar = React.lazy(
    () => import("../components/header/headerGradient")
);
const SimpleBottomNavigation = React.lazy(
    () => import("../components/navigation/navigationNavBar")
);

const Signup: React.FC = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [navVisible, setNavVisible] = useState(false);
    const [videoVisible, setVideoVisible] = useState(false);
    const [sectionVisible, setSectionVisible] = useState(false);
    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        const timers = [
            setTimeout(() => setHeaderVisible(true), 500),
            setTimeout(() => setNavVisible(true), 1000),
            setTimeout(() => setVideoVisible(true), 1500),
            setTimeout(() => setSectionVisible(true), 2000),
            setTimeout(() => setLogoVisible(true), 2500),
        ];

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    return (
        <>
            <header className="sticked top-0 z-[9000]">
                <Suspense fallback={<div>Loading header...</div>}>
                    <div className={`fade-in ${headerVisible ? "visible" : ""}`}>
                        <PrimarySearchAppBar backgroundGradient="linear-gradient(311deg, rgba(57,200,148,1) 0%, rgba(255,214,157,1) 76%, rgba(253,141,29,1) 100%)" />
                    </div>
                </Suspense>
                <Suspense fallback={<div>Loading navigation...</div>}>
                    <div className={`fade-in ${navVisible ? "visible" : ""}`}>
                        <SimpleBottomNavigation
                            labels={{
                                textoUno: "Donaciones",
                                textoDos: "Protectoras",
                                textoTres: "Inicio",
                                textoCuatro: "Voluntariado",
                                textoCinco: "Sobre Nosotros",
                                textoSeis: "Contacto",
                            }}
                        />
                    </div>
                </Suspense>
            </header>
            <main className="max-w-[100vw] max-h-[100vh]">
                <Suspense fallback={<div>Loading video...</div>}>
                    <section className="relative z-[-100]">
                        <video
                            autoPlay
                            muted
                            loop
                            className={`video-container fade-in ${videoVisible ? "visible" : ""
                                }`}
                        >
                            <source src={BgVideo} type="video/mp4" />
                        </video>
                        <section
                            className={`scale-up-hor-right register-section h-[87.3vh] w-[50vw] bg-[#ffffff75] absolute top-0 right-0 z-[200] rounded-[30px] items-center justify-center lg: fade-in ${sectionVisible ? "visible" : ""}`}>
                            
                            <div className="w-[100%]">
                                <img src={LogoGreenYellowPaws} alt="" className={`w-[180px] fade-in ${logoVisible ? "visible" : ""}` }/>
                            </div>

                            <div className="bg-gray-100 h-[80%] w-[60%] rounded-3xl flex align-items justify-center flex-col">

                                <div className={`w-[100%] flex justify-center fade-in ${logoVisible ? "visible" : ""}`}></div>

                                <div>{/* Add your form or additional content here */}</div>
                            </div>
                        </section>
                    </section>
                </Suspense>
            </main>
        </>
    );
};

export default Signup;
