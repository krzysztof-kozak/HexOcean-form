export default async function postData(url, orderInformation) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: orderInformation,
  });

  if (!response.ok) {
    const error = await response.json();
    return { error };
  }

  return { success: await response.json() };
}
