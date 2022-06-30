var fs = require('fs')
const {getRecipientIdsFromSubscription, getDefaultUserIds, computeDifference, uniqueDiffIds, GetSubscriptionRecipients} = require('./helper');


(async () =>{
    const time = new Date().toLocaleString('en-CA').split(',')[0]
    const advisorSubId = {name: 'advisor_sub', id:'e7a84a4f-62ad-4d4a-aaf9-f3bbb759c624'}
    const dataSubId = {name: 'data_sub', id:'a23a21bf-5274-484d-9289-1385a9cc799b'}
    const hoSubId =  {name: 'ho_sub', id:'de0a1b76-297e-4b50-8487-22fbb0c518d1'}
    const investorSubId =  {name: 'inversor_sub', id: 'dbf395ef-9a65-4d38-a48f-57724a4b2dcf'}
    const tradingSubId = {name: 'trading_sub', id:'7da17aa6-53f5-4812-9c82-2ed0f5675cda'}
    const subscriptionIds = [advisorSubId, dataSubId, hoSubId, investorSubId, tradingSubId]

    for (sub of subscriptionIds){
        console.log(`Getting ${sub.name} data`)
        let sub_raw = await GetSubscriptionRecipients(sub.id);
        let data = JSON.stringify(sub_raw, null, 2)

        console.log(`Writing ${sub.name} data to file`)
        fs.writeFile(`data/json/${time}_${sub.name}.json`, data, (e)=>{
            if (e){console.log(e)}
        })
    }
})();