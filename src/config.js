module.exports = {
  host: process.env.NEXT_PUBLIC_HOST || "127.0.0.1",
  database: process.env.NEXT_PUBLIC_DATABASE || "customer-solutions-db",
  user: process.env.NEXT_PUBLIC_USER || "root",
  password: process.env.NEXT_PUBLIC_PASSWORD || "password",
};
