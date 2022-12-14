// composition
class Printer {
  private printerHeader: PrinterHeader;
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader ? printerHeader : new DefaultPrinterHeader();
  }
  print() {
    this.printerHeader.print();
  }
}

interface PrinterHeader {
  print(): void;
}

class DefaultPrinterHeader implements PrinterHeader {
  print() {
    console.log("basic print!");
  }
}
class RedPrinterHeader implements PrinterHeader {
  print() {
    console.log("🔴 print!");
  }
}

class BlackPrinterHeader implements PrinterHeader {
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
