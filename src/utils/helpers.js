export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("es-Us", {
    style: "currency",
    currency: "USD",
  }).format(number / 1000)
  return newNumber
}

export const getUniqueValues = () => {}
