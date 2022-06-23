export default function validateForm(formData) {
  const { dishName, preparationTime, dishType, numberOfSlices, slicesOfBread, diameter, spiciness } = formData;

  if (!dishName || !preparationTime || !dishType) {
    return false;
  }

  switch (dishType) {
    case 'pizza':
      const slicesInt = parseInt(numberOfSlices);
      const diameterInt = parseInt(numberOfSlices);
      return Boolean(slicesInt) && Boolean(diameterInt);

    case 'soup':
      console.log(spiciness);
      const spicinessInt = parseInt(spiciness);
      return Boolean(spicinessInt);

    case 'sandwich':
      const slicesOfBreadInt = parseInt(slicesOfBread);
      return Boolean(slicesOfBreadInt);

    default:
      break;
  }
}
