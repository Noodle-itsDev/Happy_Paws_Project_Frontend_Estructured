/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#FFA500',
          secondaryGreen: '#50C878',
          secondaryBlue: '#87CEEB',
          'primary-orange': '#FFA500',
          'inactive-bg': 'rgba(153, 115, 44, 0.822)',
          'inactive-text': 'rgb(199, 199, 199)',
      },
      screens: {
        'xxs': '360px', //Móvil pequeño
        'xs': '480px',  //Móvil mediano
        'sm': '640px',  //Móvil grande
        'md': '768px',  //Tablet
        'lg': '1024px', //Ordenador pequeño
        'xl': '1280px', //Ordenador mediano
        '2xl': '1536px',//Ordenador grande
        '3xl': '1600px',//Ordenador muy grande
      },
      height:{
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '85vw': '85vw',
        '80vw': '80vw',
        '82vw': '82vw',
      },
      width: {
        '80vw': '80vw',
        '70vw': '70vw',
        '60vw': '60vw',
        '50vw': '50vw',
        '45vw': '45vw',
        'screen-lg': '1020px',
      },
      borderRadius: {
        'custom-sm': '4px',    // Bordes ligeramente redondeados
        'custom-md': '8px',    // Bordes medianamente redondeados
        'custom-lg': '16px',   // Bordes grandes redondeados
        'custom-xl': '32px',   // Bordes extra grandes redondeados
        'custom-full': '50%',  // círculo
      },
      borderWidth: {
        '200': '200px',
      },
  },
  plugins: [],
}
}
