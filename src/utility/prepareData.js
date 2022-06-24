import { formatPreparationTime } from './index';

export default function prepareData(formData) {
  const { type, preparation_time } = formData;

  const formattedPreparationTime = formatPreparationTime(preparation_time);
  formData.preparation_time = formattedPreparationTime;

  const propertiesToInclude = ['name', 'preparation_time', 'type'];

  switch (type) {
    case 'pizza':
      propertiesToInclude.push('no_of_slices');
      propertiesToInclude.push('diameter');
      break;

    case 'soup':
      propertiesToInclude.push('spiciness_scale');
      break;

    case 'sandwich':
      propertiesToInclude.push('slices_of_bread');
      break;

    default:
      break;
  }

  return JSON.stringify(formData, propertiesToInclude);
}
