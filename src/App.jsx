import { useState } from 'react';

const initialState = {
  dishName: '',
  preparationTime: '',
  dishType: '',
  numberOfSlices: null,
  diameter: null,
};

function App() {
  const [formData, setFormData] = useState(initialState);
  return (
    <div className="grid min-h-screen place-items-center bg-gray-200">
      <div className="rounded-lg bg-white px-6 py-8 shadow md:px-10">
        <form className="space-y-6">
          <h1 className="text-5xl font-bold">Your request</h1>

          <div className="flex flex-wrap gap-1">
            <label htmlFor="dish" className="basis-full text-sm font-medium">
              Dish name
            </label>
            <input className="basis-full rounded-md" type="text" name="dish" id="dish" />
          </div>

          <div className="flex flex-wrap gap-1">
            <label htmlFor="preparation-time" className="basis-full text-sm font-medium">
              Preparation time
            </label>
            <input className="basis-full rounded-md" type="number" name="preparation-time" id="preparation-time" />
          </div>

          <div className="flex flex-wrap gap-1">
            <label htmlFor="dish-type" className="basis-full text-sm font-medium">
              Dish type
            </label>
            <select
              onChange={(e) => setFormData({ ...formData, dishType: e.target.value })}
              className="w-full rounded-md"
              name="dish-type"
              id="dish-type"
            >
              <option value="">Please select</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="sandwich">Sandwich</option>
            </select>
          </div>

          {formData.dishType === 'pizza' && (
            <div className="flex flex-wrap gap-1">
              <label htmlFor="number-of-slices" className="basis-full text-sm font-medium">
                Number of slices
              </label>
              <input className="basis-full rounded-md" type="number" name="number-of-slices" id="number-of-slices" />
            </div>
          )}

          {formData.dishType === 'pizza' && (
            <div className="flex flex-wrap gap-1">
              <label htmlFor="diameter" className="basis-full text-sm font-medium">
                Diameter
              </label>
              <input className="basis-full rounded-md" type="number" name="diameter" id="diameter" />
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
