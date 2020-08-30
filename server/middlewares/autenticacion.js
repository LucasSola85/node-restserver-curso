const jwt = require("jsonwebtoken");

// ============================
//  Verifica TOKEN
// ============================

let verificaToken = (req, resp, next) => {
    let token = req.get("token");

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return resp.status(401).json({
                ok: false,
                err,
            });
        }

        // se crea una propiedad en el req para que se pueda utilizar en cualquier servicio
        // y extraer datos necesarios. PROPIEDAD: req.usuario
        req.usuario = decoded.usuario;

        next();
    });
};

// ============================
//  Verifica AdminRole
// ============================

let verificaAdmin_Role = (req, resp, next) => {
    let usuario = req.usuario;

    if (usuario.role === "ADMIN_ROLE") {
        next();
    }

    return resp.status(401).json({
        ok: false,
        message: "El usuario no esta autorizado para realizar esta operación."
    });
};

module.exports = {
    verificaToken,
    verificaAdmin_Role,
};