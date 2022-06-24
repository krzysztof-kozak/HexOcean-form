import { useState } from 'react';
import { InputField, SelectField } from './components';
import { validateForm, prepareData, postData } from './utility';

const initialState = {
  name: '',
  preparation_time: '',
  type: '',
  no_of_slices: 1,
  slices_of_bread: 1,
  diameter: 30,
  spiciness_scale: 1,
};

const URL = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

function App() {
  const [formData, setFormData] = useState(initialState);

  function handleInputChange(nextInput) {
    setFormData({ ...formData, ...nextInput });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const shouldSubmit = validateForm(formData);
    if (!shouldSubmit) {
      return;
    }

    const jsonData = prepareData({ ...formData });
    postData(URL, jsonData).then((response) => console.log(response));
  }

  return (
    <div className="grid min-h-screen place-items-center bg-gray-200 px-6 sm:px-0">
      <div className="rounded-lg bg-white px-6 py-8 shadow md:px-10 w-full sm:max-w-lg">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-bold mb-8">Your request</h1>

          <div className="flex flex-wrap gap-1">
            <InputField
              type="text"
              label="Dish name"
              id="name"
              value={formData.name}
              onInputChange={handleInputChange}
            />
          </div>

          <div className="flex flex-wrap gap-1">
            <InputField
              type="number"
              label="Preparation time"
              id="preparation_time"
              value={formData.preparation_time}
              onInputChange={handleInputChange}
            />
          </div>

          <div className="flex flex-wrap gap-1">
            <SelectField
              label="Dish type"
              id="type"
              value={formData.type}
              options={['pizza', 'soup', 'sandwich']}
              onInputChange={handleInputChange}
            />
          </div>

          {formData.type === 'pizza' && (
            <>
              <div className="flex flex-wrap gap-1 animate-slide-from-top">
                <InputField
                  label="Number of slices"
                  id="no_of_slices"
                  type="number"
                  value={formData.no_of_slices}
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

          {formData.type === 'soup' && (
            <div className="flex flex-wrap gap-1 animate-slide-from-top">
              <InputField
                label="Spiceness"
                id="spiciness_scale"
                type="range"
                range={{ min: 1, max: 10 }}
                value={formData.spiciness_scale}
                onInputChange={handleInputChange}
              />
            </div>
          )}

          {formData.type === 'sandwich' && (
            <div className="flex flex-wrap gap-1 animate-slide-from-top">
              <InputField
                label="Slices"
                id="slices_of_bread"
                type="number"
                value={formData.slices_of_bread}
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
