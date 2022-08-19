import { formatPreparationTime } from './index';

export default function prepareData(formData) {
  formData.preparation_time = formatPreparationTime(formData.preparation_time);

  const propertiesToInclude = ['name', 'preparation_time', 'type'];

  switch (formData.type) {
    case 'pizza':
      propertiesToInclude.push('no_of_slices', 'diameter');
      formData.no_of_slices = parseInt(formData.no_of_slices);
      formData.diameter = parseInt(formData.diameter);
      break;

    case 'soup':
      propertiesToInclude.push('spiciness_scale');
      formData.spiciness_scale = parseInt(formData.spiciness_scale);
      break;

    case 'sandwich':
      propertiesToInclude.push('slices_of_bread');
      formData.slices_of_bread = parseInt(formData.slices_of_bread);
      break;

    default:
      break;
  }

  return JSON.stringify(formData, propertiesToInclude);
}
