const rgb = (r, g, b) => {
  console.log('testing', [r, g, b]);
  const hexCode = '0123456789ABCDEF'
  return [r, g, b].reduce((result, val) => {
    const num = Math.min(Math.max(val, 0), 255);
    const first = (Math.floor((num) / 16)) || '0';
    const second = (Math.floor((num) / 8) % 16) || '0';

    console.log('first', first);
    console.log('second', second);

    return result + hexCode[first] + hexCode[second];
  }, '');
};

// describe("Tests", () => {
//   it("Basic Tests", () => {
//     Test.assertEquals(rgb(0, 0, 0), '000000')
//     Test.assertEquals(rgb(0, 0, -20), '000000')
//     Test.assertEquals(rgb(300,255,255), 'FFFFFF')
//     Test.assertEquals(rgb(173,255,47), 'ADFF2F')
//   });
// });
