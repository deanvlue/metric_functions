const atabove = require('./atabove')

test('Check if its GREEN', () =>{
  expect(atabove('At or Above', 0.95, 0.92, 0.05, 0.15)).toBe("GREEN")
})

test('Check if its RED', () =>{
  expect(atabove('At or Above', 0.95, 0.82, 0.05, 0.15)).toBe("RED")
})

test('Check if its YELLOW', () =>{
  expect(atabove('At or Above', 0.95, 0.80, 0.05, 0.15)).toBe("YELLOW")
})

test('Error if type is null', () =>{
  expect(atabove(null, 0.6, 0.55, 0.15, 0.01)).toBe("Not Supported")
})

test('Error if its within', () =>{
  expect(atabove('Within', 0.6, 0.55, 0.15, 0.01)).toBe("Not Supported")
})