// Arquitetura Hexagonal
// Ports & Adapters
export async function HttpClient(fetchUrl, fetchOptions = {}) {
  const headers = fetchOptions.headers || {};
  const options = {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };
  return fetch(fetchUrl, {...options}).then(async (respostaDoServidor) => {
    return {
      ok: respostaDoServidor.ok,
      status: respostaDoServidor.status,
      statusText: respostaDoServidor.statusText,
      body: await respostaDoServidor.json(),
    };
  });
}
