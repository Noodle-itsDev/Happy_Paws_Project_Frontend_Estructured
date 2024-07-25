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
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filtros.adopciones}
            onChange={() => handleCheckboxChange("adopciones")}
          />
          Adopciones
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtros.donaciones}
            onChange={() => handleCheckboxChange("donaciones")}
          />
          Donaciones
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtros.voluntarios}
            onChange={() => handleCheckboxChange("voluntarios")}
          />
          Voluntarios
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((notificacion, index) => (
            <tr key={index}>
              <td>{notificacion.fecha}</td>
              <td>{notificacion.descripcion}</td>
              <td>{notificacion.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificacionesTable;