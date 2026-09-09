// Teaching fixture: simulated data only; not a production authentication service.
export function createFixtureRequest(data, { scenario = 'success', delay = 250 } = {}) {
  return async function request(collection) {
    await new Promise(resolve => setTimeout(resolve, delay));
    if (scenario === 'unauthorised') throw Object.assign(new Error('Session expired'), { status: 401 });
    if (scenario === 'failure') throw Object.assign(new Error('Simulated request failure'), { status: 503 });
    if (!Object.hasOwn(data, collection) || !Array.isArray(data[collection])) {
      throw Object.assign(new Error('Unknown collection'), { status: 404 });
    }
    const items = scenario === 'empty' ? [] : structuredClone(data[collection]);
    return { code: 'OK', data: { items, nextPage: null } };
  };
}
