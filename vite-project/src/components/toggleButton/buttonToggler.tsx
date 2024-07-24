import React, { useState } from "react";

const ButtonToggle: React.FC = () => {
  const [activeButton, setActiveButton] = useState<"left" | "right">("left");

  const handleClick = (button: "left" | "right") => {
    setActiveButton(button);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-primary mx-auto mt-[20rem]"
      style={{
        width: "fit-content",
        border: "5px solid #FFA500",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <div className="flex w-[85vw] max-w-[1020px]">
        <button
          className={`flex-1 px-5 py-2 text-lg rounded-t-lg transition-all duration-700 ease-in-out ${
            activeButton === "left"
              ? "bg-white text-primary-orange flex-grow"
              : "bg-inactive-bg text-inactive-text flex-shrink"
          }`}
          onClick={() => handleClick("left")}
        >
          <span className="font-bold">Registro</span>
        </button>
        <button
          className={`flex-1 px-5 py-2 text-lg rounded-t-lg transition-all duration-700 ease-in-out ${
            activeButton === "right"
              ? "bg-white text-primary-orange flex-grow"
              : "bg-inactive-bg text-inactive-text flex-shrink"
          }`}
          onClick={() => handleClick("right")}
        >
          <span className="font-bold">Login</span>
        </button>
      </div>

      <div className="relative w-[85vw] max-w-[1020px] h-[75vh]">
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-b-[20px] transition-opacity duration-700 ease-in-out ${
            activeButton === "left" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full bg-primary-orange opacity-80 rounded-b-[200px] z-0 ${
              activeButton === "left" ? "block" : "hidden"
            }`}
          />
          <div className="bg-white relative flex flex-col items-center justify-center w-full h-full z-10 text-white">
            <div className="bg-primary relative flex flex-col items-center justify-center w-[98%] h-[90%] z-10 text-white orangeBackground rounded-tr-[250px] xxs:rounded-tr-[40px]">
              <h2 className="text-4xl mb-4 font-bold xxs:">Registro</h2>
              <form className="flex flex-col items-center max-w-md w-full">
                <div className="mb-4">

                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 w-full h-full rounded-b-[20px] transition-opacity duration-700 ease-in-out ${
            activeButton === "right" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full bg-primary-orange opacity-80 rounded-b-[200px] z-0 ${
              activeButton === "right" ? "block" : "hidden"
            }`}
          />
          <div className="bg-white relative flex flex-col items-center justify-center w-full h-full z-10 text-white">
            <div className="bg-primary relative flex flex-col items-center justify-center w-[98%] h-[90%] z-10 text-white orangeBackground rounded-tr-[250px]">
              <h1 className="text-4xl mb-4 font-bold">¡Bienvenido de nuevo!</h1>
              <form className="flex flex-col items-center max-w-md w-full mt-6">
                <div className="mb-4">
                  <label htmlFor="loginEmail" className="block">
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
                    className="w-[350px] p-2 border border-white rounded-full bg-white text-black outline-none focus:border-blue-500 hover:bg-yellow-100"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="loginPassword" className="block">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    className="w-[350px] p-2 border border-white rounded-full bg-white text-black outline-none focus:border-blue-500 hover:bg-yellow-100"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-[250px] py-2 rounded bg-orange-600 text-white text-lg transition-colors duration-300 ease-in-out hover:bg-orange-700"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonToggle;
