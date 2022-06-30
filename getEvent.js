// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;

(async () => {
  try {
    // const events = await xm.events.getManyUserDeliveries(env, {'at':'2022-01-14T22:00:00.000Z'}, '14485386868');
    const event = await xm.events.getManyUserDeliveries(env, {at:'2022-04-21T03:00:00Z', limit: 1000}, '15496448055');
    console.log(JSON.stringify(event, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
