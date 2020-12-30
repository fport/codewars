function isValidIP(str) {
  const octets = str.split('.')             // Split into octets
  return (octets.length === 4) &&           // Ensure str has exactly 4 octets
    octets.reduce((acc, octet) =>           // Check all octets
      (acc === true) &&                       // Ensure prior octets okay
      (String(Number(octet)) === octet) &&    // Ensure octet has nothing funky like spaces, leading 0's, ...
      (Number(octet) >= 0) &&                 // Ensure octet is 0 or more
      (Number(octet) <= 255)                  // Ensure octet is 255 or less
    , true)
}


// console.log(isValidIP("123.456.789.0"));
// console.log(isValidIP("12.255.56.1"));
// console.log(isValidIP("137.255.156.100"));

// console.log(isValidIP(''));
// console.log(isValidIP('abc.def.ghi.jkl'));
// console.log(isValidIP('123.456.789.0'));
//   Test.assertEquals(isValidIP('12.34.56'), false);
//   Test.assertEquals(isValidIP('01.02.03.04'), false);
//   Test.assertEquals(isValidIP('256.1.2.3'), false);
//   Test.assertEquals(isValidIP('1.2.3.4.5'), false);
//   Test.assertEquals(isValidIP('123,45,67,89'), false);
//   Test.assertEquals(isValidIP('1e0.1e1.1e2.2e2'), false);
//   Test.assertEquals(isValidIP(' 1.2.3.4'), false);
//   Test.assertEquals(isValidIP('1.2.3.4 '), false);
//   Test.assertEquals(isValidIP('12.34.56.-7'), false);
//   Test.assertEquals(isValidIP('1.2.3.4\n'), false);
//   Test.assertEquals(isValidIP('\n1.2.3.4'), false);
// });
