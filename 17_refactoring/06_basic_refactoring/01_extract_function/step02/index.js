function printOwing(invoice) {
  let outstanding = calculateOutstanding();

  printBanner();
  printDetails();

  // print details
  function printDetails(outstanding) {
    console.log(`client: ${invoice.customer}`);
    console.log(`debt: ${outstanding}`);
  }
}
