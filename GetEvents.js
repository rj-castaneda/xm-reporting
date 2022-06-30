// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;

(async () => {
  try {
    // const events = await xm.events.getManyUserDeliveries(env, {'at':'2022-01-14T22:00:00.000Z'}, '14485386868');
    const events = await xm.events.getManyUserDeliveries(env, {'at':'2022-02-02T22:00:00.000Z'}, '14201943475');
    console.log(JSON.stringify(events, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
