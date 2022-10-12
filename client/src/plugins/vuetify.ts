// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        variables: {},
        colors: {
          background: "41, 0, 79",
          surface: "41, 0, 79",
          primary: "110, 11, 92",
        },
      },
    },
  },
});
