const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    baseUrl: "https://www.emaras.com.ar",
    video: false,   // esto es para que no se genere el video para no subirlo a GitHub porque no le da soporte a eso

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
