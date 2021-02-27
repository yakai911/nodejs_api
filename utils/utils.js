const fs = require("fs");

const HASH_STR = "abcdefghijklmnopqrstuvwxyz1234567890";

function ranId(len) {
  let randomId = "";
  if (len < HASH_STR.length) {
    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * HASH_STR.length);
      randomId += HASH_STR[randomIndex];
    }
    return randomId;
  } else {
    throw new Error("长度不得超过" + HASH_STR.length);
  }
}

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { ranId, writeDataToFile, getPostData };
