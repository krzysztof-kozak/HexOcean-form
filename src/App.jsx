import { DishForm } from './components';
import { DishProvider } from './context';

import {
  PreparationTimeField,
  DishNameField,
  DishTypeField,
  PizzaSlicesField,
  PizzaDiameterField,
  SoupSpicinessField,
  SandwichSlicesField,
} from './components';

function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-gray-200 px-6 sm:px-0">
      <div className="rounded-lg bg-white px-6 py-8 shadow md:px-10 w-full sm:max-w-lg">
        <DishProvider>
          <DishForm>
            <DishNameField />
            <PreparationTimeField />
            <DishTypeField />

            <PizzaSlicesField />
            <PizzaDiameterField />

            <SoupSpicinessField />
            <SandwichSlicesField />
          </DishForm>
        </DishProvider>
      </div>
    </div>
  );
}

export default App;
