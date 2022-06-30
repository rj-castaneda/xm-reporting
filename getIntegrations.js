// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;

(async () => {
  try {
    // const events = await xm.events.getManyUserDeliveries(env, {'at':'2022-01-14T22:00:00.000Z'}, '14485386868');
    const int = await xm.integrations.getMany(env, {embed: 'logs'}, 'f53ebc6f-2912-42e7-9898-e901f1962a95');
    console.log(JSON.stringify(int, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
