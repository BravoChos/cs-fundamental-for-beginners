// inheritance
class Printer {
  print() {
    console.log('simple print!');
  }
  
}

class Network {
    send();
}

class RedPrinter extends Printer {
  print() {
    console.log('🔴 print!');
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => printer.print());
