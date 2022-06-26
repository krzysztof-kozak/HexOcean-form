import Swal from 'sweetalert2';

import { useDish, useDishDispatch, useError, useErrorDispatch } from '../../context';
import { formHasErrors, prepareData, postData } from '../../utility';

const URL = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

export default function DishForm({ children }) {
  const dish = useDish();
  const dishDispatch = useDishDispatch();
  const error = useError();
  const errorDispatch = useErrorDispatch();
  const invalidForm = formHasErrors(dish.type, error);

  function handleSubmit(e) {
    e.preventDefault();

    if (invalidForm) {
      return;
    }

    const jsonData = prepareData({ ...dish });

    postData(URL, jsonData).then((response) => {
      if (response.error) {
        Swal.fire({
          title: 'Request failed',
          icon: 'error',
          html: `
            <h2 class="mb-4 font-bold text-red-500">Response from Server</h2>
            <code class="text-red-300 ">${JSON.stringify(response)}</code>
          `,
        });
      }

      if (response.success) {
        Swal.fire({ title: 'Request successful', icon: 'success', text: `request id: ${response.success.id}` });
      }
    });

    dishDispatch({ type: 'form_submitted' });
    errorDispatch({ type: 'form_submitted' });
  }
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <h1 className="text-5xl font-bold mb-8">Your request</h1>

      {children}

      <button
        type="submit"
        disabled={invalidForm}
        className="disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-400 font-bold w-full rounded-md border border-gray-300 bg-black py-2 text-white hover:bg-black/90"
      >
        Submit
      </button>
    </form>
  );
}
