// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;

(async () => {
  try {
    // const events = await xm.events.getManyUserDeliveries(env, {'at':'2022-01-14T22:00:00.000Z'}, '14485386868');
    const int = await xm.integrations.getLogs(env, query={}, integrationId='eeb6669a-fa3f-4364-9184-358f5e6af95a');
    console.log(JSON.stringify(int, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
