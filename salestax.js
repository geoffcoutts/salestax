var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  //loop going over each company to calculate their total sales, tax
  for (company in companySalesData){
    var salesDataIndex = companySalesData[company];
    // function to add together sales
    function add(a,b) {
      return a+b;
    }
    var salesSum = salesDataIndex.sales.reduce(add);
    // console.log(salesSum);

    //current tax rate
    var currentTaxRate = function (salesDataIndex){
      // console.log(salesDataIndex.province);
      return salesTaxRates[salesDataIndex.province];
    };
    var name = salesDataIndex.name;
    var result = {
      [name]: {
        "totalSales": salesSum,
        "totalTaxes": calculateTax(salesSum, currentTaxRate(salesDataIndex))
      }

    };
    console.log(result);
    // console.log(calculateTax(salesSum, currentTaxRate(salesDataIndex)));
  }

  function calculateTax (sales, taxRate) {
    return sales * taxRate;

  //create object for sales and tax data
  }

}


var results = calculateSalesTax(companySalesData, salesTaxRates);
//console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/