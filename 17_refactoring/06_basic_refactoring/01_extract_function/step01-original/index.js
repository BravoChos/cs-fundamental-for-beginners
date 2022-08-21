function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  // print details
  console.log(`client: ${invoice.customer}`);
  console.log(`debt: ${outstanding}`);
}
