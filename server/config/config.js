// server/config/config.js
require('dotenv').config(); // .env 파일 로드
const config = {
  port: process.env.PORT || 3000,
};
module.exports = config;