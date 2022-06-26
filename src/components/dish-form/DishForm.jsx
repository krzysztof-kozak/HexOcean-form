import Swal from 'sweetalert2';

import { useDish } from '../../context';
import { validateForm, prepareData, postData } from '../../utility';

const URL = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

export default function DishForm({ children }) {
  const dish = useDish();

  function handleSubmit(e) {
    e.preventDefault();

    const shouldSubmit = validateForm(dish);
    if (!shouldSubmit) {
      return;
    }

    const jsonData = prepareData({ ...dish });

    postData(URL, jsonData).then((response) => {
      Swal.fire({ title: 'Request successful', icon: 'success', text: `request id: ${response.id}` });
    });
  }
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <h1 className="text-5xl font-bold mb-8">Your request</h1>

      {children}

      <button className="w-full rounded-md border border-gray-300 bg-black py-2 text-white hover:bg-black/90">
        Submit
      </button>
    </form>
  );
}
