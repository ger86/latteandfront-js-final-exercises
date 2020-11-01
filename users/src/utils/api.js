export default {
  get: async function(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la llamada');
    }
    const json = await response.json();
    return json.data;
  },
  post: async function(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Error en la llamada');
    }
    const json = await response.json();
    return json.data;
  }
}