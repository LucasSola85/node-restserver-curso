// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento del token
// ============================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  SEED - Firma authorization
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrolo';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ============================
//  Base de datos
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '267418910120-4iet91ulfr0q1jpubjvg9ht19amd1j0m.apps.googleusercontent.com';