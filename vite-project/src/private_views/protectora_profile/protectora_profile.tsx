import React from "react";
import "../../index.css";
import NotificationPanel from "../../components/tableFilter/tableFilter";
import PrimarySearchAppBar from "../../components/header/headerGradient";
import SimpleBottomNavigation from "../../components/navigation/navigationNavBar";
import ProtectoraPawsCard from "../../components/cardImgProfile.tsx/cardImgProfile";

const ProtectoraHomeView: React.FC = () => {

  return (
    <>

      <header>
        <PrimarySearchAppBar backgroundGradient=" linear-gradient(90deg, rgba(0,151,178,1) 0%, rgba(126,217,87,1) 100%)" />
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
      </header>
      <main className="p-20 flex flex-col items-center justify-center bg-secondary-orange bg-[#efefef]" style={{ background: "linear-gradient(#22a99947 0%, white 50%, white 100%)" }}>
  
      </main>
    </>
  );
};

export default ProtectoraHomeView;
