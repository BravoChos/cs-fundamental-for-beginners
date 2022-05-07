function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  // 세부 사항 출력
  console.log(`client: ${invoice.customer}`);
  console.log(`debt: ${outstanding}`);
}
