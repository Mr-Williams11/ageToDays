document.getElementById('convertButton').addEventListener('click', function() {
    convertToDays();
  });

  function convertToDays() {
    var ageInYears = parseFloat(document.getElementById('age').value);

    if (isNaN(ageInYears)) {
      alert('Please enter a valid age.');
      return;
    }

    var daysInYear = 365.25; // accounting for leap years
    var ageInDays = ageInYears * daysInYear;
    document.getElementById('result').innerHTML = 'Age in Days: ' + ageInDays.toFixed(2);
  }