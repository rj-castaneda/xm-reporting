// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;

(async () => {
  try {
    // const events = await xm.events.getManyUserDeliveries(env, {'at':'2022-01-14T22:00:00.000Z'}, '14485386868');
    const events = await xm.events.getMany(env, {requestId:'352c7358-7674-43d8-8b7a-83c9466c4fd9'});
    console.log(JSON.stringify(events, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
