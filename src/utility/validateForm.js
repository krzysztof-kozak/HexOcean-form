export default function validateForm(formData) {
  const { name, preparation_time, type, no_of_slices, slices_of_bread, diameter, spiciness_scale } = formData;

  if (!name || preparation_time <= 0 || !type) {
    return false;
  }

  switch (type) {
    case 'pizza':
      return no_of_slices > 0 && diameter > 0;

    case 'soup':
      return spiciness_scale > 0;

    case 'sandwich':
      return slices_of_bread > 0;

    default:
      break;
  }
}
