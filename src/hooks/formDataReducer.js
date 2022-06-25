export default function formDataReducer(formData, action) {
  switch (action.type) {
    case 'dish_name_changed': {
      return { ...formData, name: action.dishName };
    }

    case 'preparation_time_changed': {
      return { ...formData, preparation_time_changed: action.preparationDuration };
    }

    case 'dish_type_changed': {
      return { ...formData, type: action.dishType };
    }

    case 'pizza_diameter_changed': {
      return { ...formData, diameter: action.pizzaDiameter };
    }

    case 'number_of_pizza_slices_changed': {
      return { ...formData, no_of_slices: action.numberOfSlices };
    }

    case 'number_of_bread_slices_changed': {
      return { ...formData, slices_of_bread: action.numberOfSlices };
    }

    case 'soup_spiciness_changed': {
      return { ...formData, spiciness_scale: action.soupSpiciness };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
