const route = import("express").Router();
const controllerPaletas = import("../controllers/paletas.controllers");

route.get("/todas-paletas", controllerPaletas.findAllPaletasController);
route.get("/paleta/:id", controllerPaletas.findByIdPaletaController);

module.exports = route;
