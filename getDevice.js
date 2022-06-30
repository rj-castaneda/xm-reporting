// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const deviceId = '8445b04e-f1a4-47ca-8f12-99ec37e5a91c'
const env = np;

(async () => {
  try {
    const device = await xm.devices.get(env, deviceId, {})
    // var email = JSON.stringify(device, null, 2)
    console.log(device.emailAddress)
    // console.log(JSON.stringify(device, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
