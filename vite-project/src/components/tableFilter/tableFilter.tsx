
import React, { useState } from "react";

// Definición de la interfaz para una notificación
interface Notificacion {
  fecha: string;
  descripcion: string;
  categoria: "adopciones" | "donaciones" | "voluntarios";
}

const queryResults: Notificacion[] = [
  {
    fecha: "2024-07-24",
    descripcion: "Nuevo perro disponible para adopción",
    categoria: "adopciones",
  },
  {
    fecha: "2024-07-23",
    descripcion: "Se necesita donación de alimentos",
    categoria: "donaciones",
  },
  {
    fecha: "2024-07-22",
    descripcion: "Voluntarios requeridos para evento de adopción",
    categoria: "voluntarios",
  },
  {
    fecha: "2024-07-21",
    descripcion: "Adopción exitosa de tres gatos",
    categoria: "adopciones",
  },
  {
    fecha: "2024-07-20",
    descripcion: "Donación de suministros médicos recibida",
    categoria: "donaciones",
  },
  {
    fecha: "2024-07-19",
    descripcion: "Capacitación para nuevos voluntarios",
    categoria: "voluntarios",
  },
];

// Componente que renderiza la tabla con filtros
const NotificacionesTable: React.FC = () => {
  const [filtros, setFiltros] = useState({
    adopciones: true,
    donaciones: false,
    voluntarios: true,
  });

  const handleCheckboxChange = (
    categoria: "adopciones" | "donaciones" | "voluntarios"
  ) => {
    setFiltros((prevState) => ({
      ...prevState,
      [categoria]: !prevState[categoria],
    }));
  };

  const filteredResults = queryResults.filter(
    (notificacion) => filtros[notificacion.categoria]
  );

  return (
    <div className="grid w-[95%] min-h-[60%] rounded-[30px] overflow-hidden" style={{fontFamily: "Roboto", fontWeight: "none"}}>
      <table className="">
        <thead className="bg-[#22a999] h-[60px] border-b border-white-500">
          <th className=" border-r border-white-500">Filtros</th>
          <th className="">Panel de notifiaciones / Acciones</th>
        </thead>
        <tr className="">
          <td className="w-[30%] bg-secondary-orange border-r border-white-500 p-2 align-top">
            <div className="grid grid-cols-1 xxs:">
              <label>
                <input
                  className="ml-[40px]"
                  type="checkbox"
                  checked={filtros.adopciones}
                  onChange={() => handleCheckboxChange("adopciones")}
                />
                <span className="ml-[20px]">Adopciones</span>
              </label>
              <label>
                <input
                  className="ml-[40px]"
                  type="checkbox"
                  checked={filtros.donaciones}
                  onChange={() => handleCheckboxChange("donaciones")}
                />
                <span className="ml-[20px]">Donaciones</span>
              </label>
              <label>
                <input
                  className="ml-[40px]"
                  type="checkbox"
                  checked={filtros.voluntarios}
                  onChange={() => handleCheckboxChange("voluntarios")}
                />
                <span className="ml-[20px]">Voluntarios</span>
              </label>
            </div>
          </td>
          <td className="w-[70%] bg-secondary-orange "></td>
        </tr>
      </table>
    </div>
  );
};

export default NotificacionesTable;
