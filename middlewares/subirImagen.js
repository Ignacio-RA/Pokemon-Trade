import multer from "multer";
import path from "path";

const formatosPermitidos = ["image/png", "image/jpeg", "image/webp"];

const fileFilter = (req, file, cb) => {
  if (formatosPermitidos.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten imágenes PNG, JPG o WEBP"), false);
  }
};

const limpiarNombre = (nombre) => {
  return nombre
    .toLowerCase()
    .replace(/ /g, "-")        // espacios → guiones
    .replace(/[^\w-]/g, "");   // quitar caracteres raros
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/pokemon");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    //aquí tomamos el nombre del form
    const nombrePokemon = req.body.nombre || "pokemon";

    const nombreLimpio = limpiarNombre(nombrePokemon);

    const nombreFinal = `${nombreLimpio}-${Date.now()}${ext}`;

    cb(null, nombreFinal);
  }
});

const upload = multer({ 
    storage, 
    fileFilter
});

export default upload;