import React from "react";
import '../../index.css';
import ButtonToggle from "../../components/toggleButton/buttonToggler";

const RegisterLoginView: React.FC = () => {
  return (
    <>
      <main className="w-screen h-[100vh] bg-primary flex flex-col items-center justify-center">
        <ButtonToggle/>
      </main>
    </>
  );
};

export default RegisterLoginView;
