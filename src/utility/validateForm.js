export default function validateForm(formData) {
  const { dishName, preparationTime, dishType, numberOfSlices, slicesOfBread, diameter, spiciness } = formData;

  if (!dishName || preparationTime <= 0 || !dishType) {
    return false;
  }

  switch (dishType) {
    case 'pizza':
      return numberOfSlices > 0 && diameter > 0;

    case 'soup':
      return spiciness > 0;

    case 'sandwich':
      return slicesOfBread > 0;

    default:
      break;
  }
}
