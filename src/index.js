const houseNumber = '80'
const streetName = 'Robinson Road'
const floor = '08'
const apartment = '01'
const country = 'Singapore'
const zipCode = '068898'

module.exports = {
  houseNumber,
  streetName,
  floor,
  apartment,
  country,
  zipCode,
  fullAddress: `${houseNumber} ${streetName}, #${floor}-${apartment}, ${country} ${zipCode}`,
}
