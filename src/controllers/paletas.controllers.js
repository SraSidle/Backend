const paletaService = import("../services/paletas.service");

const findAllPaletasController = (req, res) => {
    const paletas = paletaService.findAllPaletasService();
    res.send(paletas);
}

const findByIdPaletasController = (req, res) => {
    const idParam = Number(req.params.id);
    const chosenPaleta = paletaService.findByIdPaletaService(idParam);
    res.send(chosenPaleta);
}

module.exports = {
    findAllPaletasController,
    findByIdPaletasController   
}
