import { useState } from 'react';
import { InputField, SelectField } from './components';

const initialState = {
  dishName: '',
  preparationTime: '',
  dishType: '',
  numberOfSlices: 1,
  slicesOfBread: 1,
  diameter: 30,
  spiciness: 1,
};

function App() {
  const [formData, setFormData] = useState(initialState);

  function handleInputChange(nextInput) {
    setFormData({ ...formData, ...nextInput });
  }

  return (
    <div className="grid min-h-screen place-items-center bg-gray-200 px-6 sm:px-0">
      <div className="rounded-lg bg-white px-6 py-8 shadow md:px-10 w-full sm:max-w-lg">
        <form className="space-y-6">
          <h1 className="text-5xl font-bold">Your request</h1>

          <div className="flex flex-wrap gap-1">
            <InputField
              type="text"
              label="Dish name"
              id="dishName"
              value={formData.dishName}
              onInputChange={handleInputChange}
            />
          </div>

          <div className="flex flex-wrap gap-1">
            <InputField
              type="number"
              label="Preparation time"
              id="preparationTime"
              value={formData.preparationTime}
              onInputChange={handleInputChange}
            />
          </div>

          <div className="flex flex-wrap gap-1">
            <SelectField
              label="Dish type"
              id="dishType"
              value={formData.dishType}
              options={['pizza', 'soup', 'sandwich']}
              onInputChange={handleInputChange}
            />
          </div>

          {formData.dishType === 'pizza' && (
            <>
              <div className="flex flex-wrap gap-1 animate-slide-from-top">
                <InputField
                  label="Number of slices"
                  id="numberOfSlices"
                  type="number"
                  value={formData.numberOfSlices}
                  onInputChange={handleInputChange}
                />
              </div>

              <div className="flex flex-wrap gap-1 animate-slide-from-top">
                <InputField
                  label="Diameter"
                  id="diameter"
                  type="number"
                  value={formData.diameter}
                  onInputChange={handleInputChange}
                />
              </div>
            </>
          )}

          {formData.dishType === 'soup' && (
            <div className="flex flex-wrap gap-1 animate-slide-from-top">
              <InputField
                label="Spiceness"
                id="spiceness"
                type="range"
                value={formData.spiciness}
                onInputChange={handleInputChange}
              />
            </div>
          )}

          {formData.dishType === 'sandwich' && (
            <div className="flex flex-wrap gap-1 animate-slide-from-top">
              <InputField
                label="Slices"
                id="slicesOfBread"
                type="number"
                value={formData.slicesOfBread}
                onInputChange={handleInputChange}
              />
            </div>
          )}

          <button className="w-full rounded-md border border-gray-300 bg-black py-2 text-white hover:bg-black/90">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
