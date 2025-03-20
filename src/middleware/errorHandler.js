// Middleware de manejo de errores
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Mostrar el error en consola
  
    // Si el error tiene un código de status personalizado, usarlo; si no, usar 500
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      message: err.message || 'Algo salió mal en el servidor',
      stack: err.stack, // Solo en desarrollo, en producción podrías omitirlo
    });
  };
  
  export default errorHandler;
  