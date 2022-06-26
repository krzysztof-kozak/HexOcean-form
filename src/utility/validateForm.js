export default function formHasErrors(dishType, errorObject) {
  const { name, preparation_time, type, no_of_slices, diameter, spiciness_scale, slices_of_bread } = errorObject;

  if (Boolean(name || preparation_time || type)) {
    return true;
  }

  if (dishType === 'pizza') {
    return Boolean(no_of_slices || diameter);
  }

  if (dishType === 'soup') {
    return Boolean(spiciness_scale);
  }

  if (dishType === 'sandwich') {
    return Boolean(slices_of_bread);
  }
}
