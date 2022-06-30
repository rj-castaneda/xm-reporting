// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = prod;
const name = 'AXA Notify';
const personId = 'ecb1ec02-4bf8-4657-b7cc-9cb9896c8bff';
(async () => {
  try {
    const person = await xm.people.getDevices(env, {'at':'2021-01-15T08:00:00.000Z'}, personId);
    console.log(JSON.stringify(person, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
