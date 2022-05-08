function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails();

  // 세부 사항 출력
  function printDetails(outstanding) {
    console.log(`client: ${invoice.customer}`);
    console.log(`debt: ${outstanding}`);
  }
}
