module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secretJwt",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "",
    database: process.env.MYSQL_DB || "platzisn",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || "localhost",
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  cacheService: {
    host: process.env.CACHE_SRV_HOST || "localhost",
    port: process.env.CACHE_SRV_PORT || 3003,
  },
  redis: {
    host: process.env.REDIS_HOST || "",
    port: process.env.REDIS_PORT || "",
    password: process.env.REDIS_PASS || "",
  },
};
