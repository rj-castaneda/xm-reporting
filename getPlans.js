// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = np;
planId = '2f11be79-878a-482f-99fc-18dc422d9332'
propertyUUID = '283fec73-3a63-45d7-be67-2d299d1ff0ce';

(async () => {
  try {
    const plans = await xm.plans.getMany(env,{})
    console.log(JSON.stringify(plans, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
