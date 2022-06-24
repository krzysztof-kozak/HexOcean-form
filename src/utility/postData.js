export default async function postData(url, orderInformation) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: orderInformation,
  });

  return response.json();
}
