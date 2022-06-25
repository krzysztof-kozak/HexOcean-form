export default function dishReducer(dish, action) {
  switch (action.type) {
    case 'dish_name_changed': {
      return { ...dish, name: action.dishName };
    }

    case 'preparation_time_changed': {
      return { ...dish, preparation_time: action.preparationDuration };
    }

    case 'dish_type_changed': {
      return { ...dish, type: action.dishType };
    }

    case 'pizza_diameter_changed': {
      return { ...dish, diameter: action.pizzaDiameter };
    }

    case 'number_of_pizza_slices_changed': {
      return { ...dish, no_of_slices: action.numberOfSlices };
    }

    case 'number_of_bread_slices_changed': {
      return { ...dish, slices_of_bread: action.numberOfSlices };
    }

    case 'soup_spiciness_changed': {
      return { ...dish, spiciness_scale: action.soupSpiciness };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
