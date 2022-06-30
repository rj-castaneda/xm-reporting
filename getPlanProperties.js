// See README.md for a description of this script.
const { np, prod, xm } = require('./config');

const env = np;
planId = '2f11be79-878a-482f-99fc-18dc422d9332'
propertyUUID = '283fec73-3a63-45d7-be67-2d299d1ff0ce';
(async () => {
  try {
    const properties = await xm.planProperties.getMany(env,{}, planId)
    let incidentManagerProperty;
    let counter = 0
    for (let prop of properties){
        if (prop["id"] === propertyUUID){
            incidentManagerProperty = prop
            break;
        }
        counter ++;
    }
    if (incidentManagerProperty["items"].includes("Ricardo Castaneda")) console.log('TRUE');
    console.log(JSON.stringify(incidentManagerProperty["items"], null, 2));
  } catch (error) {
    console.log(error);
  }
})();
