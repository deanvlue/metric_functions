const bullseye = require('./bullseye')

test('Validate the type is yellow', () =>{
  expect(bullseye('Within', 0.6, 0.55, 0.05, 0.15)).toBe("YELLOW")
})

test('Validate the type is RED', () =>{
  expect(bullseye('Within', 0.6, 0.69, 0.05, 0.15)).toBe("RED")
})


test('Validate the type is GREEN', () =>{
  expect(bullseye('Within', 0.6, 0.62, 0.05, 0.15)).toBe("GREEN")
})

test('Validate the type is yellow', () =>{
  expect(bullseye(null, 0.6, 0.55, 0.15, 0.01)).toBe("Not Supported")
})