const validationSchema = {
  name: (stringValue) => {
    const label = 'name';
    const minLength = 5;
    const maxLength = 15;

    if (!stringValue) {
      return `${label} is required`;
    }

    if (stringValue.length < minLength) {
      return `${label} must be at least ${minLength} characters long`;
    }

    if (stringValue.length > maxLength) {
      return `${label} must be at most ${maxLength} characters long`;
    }

    return false;
  },

  preparation_time: (stringValue) => {
    const label = 'preparation time';
    const minTime = 1;
    const maxTime = 600;

    if (!stringValue) {
      return `${label} is required`;
    }

    const intValue = parseInt(stringValue, 10);

    if (intValue < minTime) {
      return `${label} must be at least ${minTime} minutes long`;
    }

    if (intValue > maxTime) {
      return `${label} must be at most ${maxTime} minutes long`;
    }

    return false;
  },

  type: (stringValue) => {
    const label = 'dish type';

    const validTypes = ['pizza', 'soup', 'sandwich'];

    if (!stringValue) {
      return `${label} is required`;
    }

    if (!validTypes.includes(stringValue)) {
      return `${label} can only be one of the following options: ${validTypes.join(', ')}`;
    }

    return false;
  },

  no_of_slices: (stringValue) => {
    const label = 'slices';
    const dishType = 'pizza';
    const minAmount = 1;
    const maxAmount = 20;

    if (!stringValue) {
      return `${label} is required`;
    }

    const intValue = parseInt(stringValue, 10);

    if (intValue < minAmount) {
      return `${dishType} must have at least ${minAmount} ${label}`;
    }

    if (intValue > maxAmount) {
      return `${dishType} must have at most ${maxAmount} ${label}`;
    }

    return false;
  },

  slices_of_bread: (stringValue) => {
    const label = 'slices';
    const dishType = 'sandwich';
    const minAmount = 1;
    const maxAmount = 20;

    if (!stringValue) {
      return `${label} is required`;
    }

    const intValue = parseInt(stringValue, 10);

    if (intValue < minAmount) {
      return `${dishType} must have at least ${minAmount} ${label}`;
    }

    if (intValue > maxAmount) {
      return `${dishType} must have at most ${maxAmount} ${label}`;
    }

    return false;
  },

  diameter: (stringValue) => {
    const label = 'diameter';
    const dishType = 'pizza';
    const minAmount = 30;
    const maxAmount = 60;

    if (!stringValue) {
      return `${label} is required`;
    }

    const intValue = parseInt(stringValue, 10);

    if (intValue < minAmount) {
      return `${dishType} must be at least ${minAmount} in ${label}`;
    }

    if (intValue > maxAmount) {
      return `${dishType} must be at most ${maxAmount} in ${label}`;
    }

    return false;
  },

  spiciness_scale: (stringValue) => {
    const label = 'spiciness scale';
    const dishType = 'soup';
    const minAmount = 1;
    const maxAmount = 10;

    if (!stringValue) {
      return `${label} is required`;
    }

    const intValue = parseInt(stringValue, 10);

    if (intValue < minAmount) {
      return `${dishType} must be at least ${minAmount} in ${label}`;
    }

    if (intValue > maxAmount) {
      return `${dishType} must be at most ${maxAmount} in ${label}`;
    }

    return false;
  },
};

export function errorReducer(error, action) {
  switch (action.type) {
    case 'dish_name_changed': {
      const { dishName } = action;
      return { ...error, name: validationSchema.name(dishName) };
    }

    case 'preparation_time_changed': {
      const { preparationDuration } = action;
      return { ...error, preparation_time: validationSchema.preparation_time(preparationDuration) };
    }

    case 'dish_type_changed': {
      const { dishType } = action;
      return { ...error, type: validationSchema.type(dishType) };
    }

    case 'pizza_diameter_changed': {
      const { pizzaDiameter } = action;
      return { ...error, diameter: validationSchema.diameter(pizzaDiameter) };
    }

    case 'number_of_pizza_slices_changed': {
      const { numberOfSlices } = action;
      return { ...error, no_of_slices: validationSchema.no_of_slices(numberOfSlices) };
    }

    case 'number_of_bread_slices_changed': {
      const { numberOfSlices } = action;
      return { ...error, slices_of_bread: validationSchema.slices_of_bread(numberOfSlices) };
    }

    case 'soup_spiciness_changed': {
      const { soupSpiciness } = action;
      return { ...error, spiciness_scale: validationSchema.spiciness_scale(soupSpiciness) };
    }

    case 'form_submitted': {
      return {
        name: true,
        preparation_time: true,
        type: true,
        no_of_slices: '',
        slices_of_bread: '',
        diameter: '',
        spiciness_scale: '',
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
