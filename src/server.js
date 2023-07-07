import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from "dotenv";
import nunjucks from "nunjucks";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

nunjucks.configure(path.join(__dirname, '../front/views'), {
  autoescape: true,
  express: app
});


app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../front')));

app.get("/", function(req, res) {
    res.render('./pages/index.njk');
});

app.get("/introduct", function(req, res) {
  res.render('./pages/introduct/index.njk');
});

app.get("/service", function(req, res) {
  res.render('./pages/service/index.njk');
});

app.get("/product", function(req, res) {
  res.render('./pages/product/index.njk');
});

app.listen(PORT, () => console.log(`${PORT} 포트에서 서버 작동!!`))

