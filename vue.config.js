const path = require("path");
// :devServer/api로 오는 입력은 8083 포트로 전송시킨다
// npm run build 시, 빌드파일 위치는 스프링 static 폴더 내로 위치
module.exports = {
  outputDir: path.resolve(__dirname, "../" + "src/main/resources/static"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8083",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
