$(document).ready(function() {
    $('#grossIncome, #extraIncome, #deductions').on('input', function() {
      var value = $(this).val();
      var isValid = /^\d*\.?\d*$/.test(value);
      var errorIcon = $(this).closest('.form-group').find('.input-group-append');
      var errorTooltip = $(this).closest('.form-group').find('.invalid-tooltip');
  
      if (isValid) {
        errorIcon.hide();
        errorTooltip.hide();
        $(this).removeClass('is-invalid');
      } else {
        errorIcon.show();
        errorTooltip.text('Invalid value');
        errorTooltip.show();
        $(this).addClass('is-invalid');
      }
    });
  });
  