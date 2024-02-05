// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// function humanReadable (seconds) {
  
// }

// console.log(humanReadable(0)) // 00:00:00
// console.log(humanReadable(59)) // 00:00:59
// console.log(humanReadable(60)) // 00:01:00
// console.log(humanReadable(90)) // 00:01:30
// console.log(humanReadable(3599)) // 00:59:59
// console.log(humanReadable(3600)) // 01:00:00
// console.log(humanReadable(45296)) // 12:34:56
// console.log(humanReadable(86399)) // 23:59:59
// console.log(humanReadable(86400)) // 24:00:00
// console.log(humanReadable(359999)) // 99:59:59

function humanReadable(hours, minutes, seconds) {
    // Tambahkan nol di depan jika nilai kurang dari 10
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);
  
    // Konversi jam, menit, dan detik menjadi format hh:mm:ss
    const formattedHours = formatNumber(hours);
    const formattedMinutes = formatNumber(minutes);
    const formattedSeconds = formatNumber(seconds);
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
  console.log(humanReadable(0, 0, 0)); // 00:00:00
  console.log(humanReadable(0, 0, 59)); // 00:00:59
  console.log(humanReadable(0, 1, 0)); // 00:01:00
  console.log(humanReadable(0, 1, 30)); // 00:01:30
  console.log(humanReadable(0, 59, 59)); // 00:59:59
  console.log(humanReadable(1, 0, 0)); // 01:00:00
  console.log(humanReadable(12, 34, 56)); // 12:34:56
  console.log(humanReadable(23, 59, 59)); // 23:59:59
  console.log(humanReadable(24, 0, 0)); // 24:00:00
  console.log(humanReadable(99, 59, 59)); // 99:59:59
  