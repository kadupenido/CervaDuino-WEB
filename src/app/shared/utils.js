const roundDecimal = function (n, places) {
  if (n === null) {
      return false
  }
  if (n === '') {
      return false
  }
  if (isNaN(n)) {
      return false
  }
  if (places < 0) {
      return false
  }
  if (places > 10) {
      return false
  }
  var rounded = Math.round(n * Math.pow(10, places)) / Math.pow(10, places);
  var decimalPointPosition = (rounded + "").lastIndexOf(".");
  if (decimalPointPosition == 0) {
      rounded = "0" + rounded;
      decimalPointPosition = 1
  }
  if (places != 0) {
      decimalPointPosition = (rounded + "").lastIndexOf(".");
      if (decimalPointPosition == -1 || decimalPointPosition == rounded.length - 1) {
          rounded += "."
      }
  }
  decimalPointPosition = (rounded + "").lastIndexOf(".");
  var currentPlaces = ((rounded + "").length - 1) - decimalPointPosition;
  if (currentPlaces < places) {
      for (x = currentPlaces; x < places; x++) {
          rounded += "0"
      }
  }
  return rounded
}

const isNumber = function (s) {
  if (s === null) {
      return false
  }
  if (s === 0) {
      return true
  }
  if (s == '') {
      return false
  }
  if (isNaN(s)) {
      return false
  }
  var i;
  for (i = 0; i < s.length; i++) {
      var c = s.charAt(i);
      if (!((c >= "0") && (c <= "9")) && c != '.') {
          return false
      }
  }
  return true
}

module.exports = {
  roundDecimal: roundDecimal,
  isNumber: isNumber
}