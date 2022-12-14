// composition
class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }
  print() {
    this.#printerHeader ? this.#printerHeader.print() : console.log("basic print!");
  }
}

class RedPrinterHeader {
  print() {
    console.log("🔴 print!");
  }
}

class BlackPrinterHeader {
  print() {
    console.log("⚫️ print!");
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
];
printers.forEach((printer) => printer.print());
