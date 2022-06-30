const {getRecipientIdsFromSubscription, getDefaultUserIds, computeDifference, uniqueDiffIds, GetSubscriptionRecipients} = require('./helper');

(async ()=> {
    

    const file_path = './data/json/SubDefaultRecipients.json'
    const defaultIdSet = await getDefaultUserIds(file_path);

    const advisorSubId = 'e7a84a4f-62ad-4d4a-aaf9-f3bbb759c624'
    const dataSubId = 'a23a21bf-5274-484d-9289-1385a9cc799b'
    const hoSubId =  'de0a1b76-297e-4b50-8487-22fbb0c518d1'
    const investorSubId =  'dbf395ef-9a65-4d38-a48f-57724a4b2dcf'
    const tradingSubId = '7da17aa6-53f5-4812-9c82-2ed0f5675cda'
    const subscriptionIds = [advisorSubId, dataSubId, hoSubId, investorSubId, tradingSubId]


    // const subsDiffList = [];
    // for (var id of subscriptionIds){
    //     console.log('Getting Sub Recipients')
    //     const subRecipients = await getRecipientIdsFromSubscription(id);
    //     console.log('Got Sub Recipients')
    //     console.log('Computing differences')
    //     const subDifferences = computeDifference(defaultIdSet, subRecipients)
    //     subsDiffList
    //     console.log('Got Advisor Sub Recipients')
    // }

    // Grab the User IDs from each Subscription
    console.log('Getting Sub Recipients')
    const advisorSubIdSet = await getRecipientIdsFromSubscription('e7a84a4f-62ad-4d4a-aaf9-f3bbb759c624');
    console.log('Got Advisor Sub Recipients')
    const dataSubIdSet = await getRecipientIdsFromSubscription('a23a21bf-5274-484d-9289-1385a9cc799b');
    console.log('Got Data Sub Recipients')
    const hoSubIdSet = await getRecipientIdsFromSubscription('de0a1b76-297e-4b50-8487-22fbb0c518d1');
    console.log('Got HO Sub Recipients')
    const investorSubIdSet = await getRecipientIdsFromSubscription('dbf395ef-9a65-4d38-a48f-57724a4b2dcf');
    console.log('Got investor Sub Recipients')
    const tradingSubIdSet = await getRecipientIdsFromSubscription('7da17aa6-53f5-4812-9c82-2ed0f5675cda');
    console.log('Got trading Sub Recipients')

    // Compute the differences between the Default User IDs and each Subscription IDs.
    const advisorDifferences = computeDifference(defaultIdSet, advisorSubIdSet);
    const dataDifferences = computeDifference(defaultIdSet, dataSubIdSet);
    const hoDifferences = computeDifference(defaultIdSet, hoSubIdSet);
    const investorDifferences = computeDifference(defaultIdSet, investorSubIdSet);
    const tradingDifferences = computeDifference(defaultIdSet, tradingSubIdSet);

    const subsDiffList = [advisorDifferences,dataDifferences,hoDifferences,investorDifferences, tradingDifferences];

    // Compute unique IDs from differences sets
    const finalSet = uniqueDiffIds(subsDiffList);

    console.log('Default recipients count: ' + defaultIdSet.size);
    console.log('Advisor Subscribers: ' + advisorSubIdSet.size);
    console.log('Data Processing Subscribers: ' + dataSubIdSet.size);
    console.log('Home Office Subscribers: ' + hoSubIdSet.size);
    console.log('Investor Subscribers: ' + investorSubIdSet.size);
    console.log('Trading Subscribers: ' + tradingSubIdSet.size);

    console.log('-----------------------------------------');
    console.log('Users Managing Advisor Subscription: ' + advisorDifferences.size);
    console.log('Users Managing Data Subscription: ' + dataDifferences.size);
    console.log('Users Managing HO Subscription: ' + hoDifferences.size);
    console.log('Users Managing Investor Subscription: ' + investorDifferences.size);
    console.log('Users Managing Trading Subscription: ' + tradingDifferences.size);
    
    console.log('-----------------------------------------');
    console.log('TOTAL Users Managing Subscriptions: ' + finalSet.size + '\n');

    // const subRecipients = await GetSubscriptionRecipients('7da17aa6-53f5-4812-9c82-2ed0f5675cda');
    // console.log(JSON.stringify(subRecipients, null, 2));
})();
