const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  })
);
server.use(
  "/films",
  createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
  })
);
server.use(
  "/planets",
  createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true,
  })
);

module.exports = server;
