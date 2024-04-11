$(document).ready(function() {
    $('#taxForm').submit(function(event) {
      event.preventDefault();
      var grossIncome = parseFloat($('#grossIncome').val());
      var extraIncome = parseFloat($('#extraIncome').val()) || 0;
      var deductions = parseFloat($('#deductions').val()) || 0;
      var ageGroup = $('#ageGroup').val();
      var afterTaxIncome  =  getTaxAmmount(grossIncome ,extraIncome , deductions , ageGroup)
      window.location.href = 'result.html?afterTaxIncome=' + afterTaxIncome.toFixed(2);
    });

   
    function getTaxAmmount(grossIncome , extraIncome , deductions , ageGroup)
    {
      var  totalIncome = grossIncome +extraIncome - deductions ;
      var tax = 0
      if(totalIncome > 800000)
      {
        var taxRate = getTaxRate(ageGroup);
        tax = (totalIncome) * taxRate;
      }
      
      afterTaxIncome = totalIncome - tax
      return afterTaxIncome
    }
    function getTaxRate(ageGroup) {
      switch(ageGroup) {
        case 'under40':
          return 0.3;
        case '40to60':
          return 0.4;
        case 'above60':
          return 0.1;
        default:
          return 0;
      }
    }
  });
  