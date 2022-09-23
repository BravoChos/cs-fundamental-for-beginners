import fs from "fs";

// 1. run 함수를 만들어서 노드의 process 디펜던시를 제거함
run(process.argv);

function run(args) {
  countOrders(parseCommand(args));
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error("Enter Filename");
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error("File does not exist");
  }

  return {
    fileName,
    countReadyOnly: args.includes("-r"),
  };
}

function countOrders({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadyOnly
    ? orders.filter((order) => order.status === "ready")
    : orders;
  console.log(filtered.length);
}
