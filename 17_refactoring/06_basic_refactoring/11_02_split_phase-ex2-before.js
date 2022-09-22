import fs from "fs";

if (!process.argv[2]) {
  throw new Error("Enter Filename");
}

const fileName = `./${process.argv[2]}.json`;
if (!fs.existsSync(fileName)) {
  throw new Error("File does not exist");
}

const rawData = fs.readFileSync(fileName);
const orders = JSON.parse(rawData);
if (process.argv.includes("-r")) {
  console.log(orders.filter((order) => order.status === "ready").length);
} else {
  console.log(orders.length);
}
