const PORT = Number(process.env.PORT) || 45009;
const ENVIRONMENT = process.env.ENVIRONMENT;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';

const ADMIN_SKD = JSON.parse(process.env.ADMIN_SDK as string);

export { PORT, ENVIRONMENT, JWT_SECRET_KEY, ADMIN_SKD  };