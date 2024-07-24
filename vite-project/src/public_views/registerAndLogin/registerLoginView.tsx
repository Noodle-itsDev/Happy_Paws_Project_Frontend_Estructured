import React from "react";
import '../../index.css';
import ButtonToggle from "../../components/toggleButton/buttonToggler";
import SimpleBottomNavigationOrange from "../../components/header/headerWhite";
const RegisterLoginView: React.FC = () => {
  return (
    <>
      <SimpleBottomNavigationOrange/>
      <main className="w-screen h-[120vh] bg-white flex flex-col items-center justify-center">
        <ButtonToggle/>

      </main>
    </>
  );
};

export default RegisterLoginView;
