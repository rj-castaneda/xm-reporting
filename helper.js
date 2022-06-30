// const {GetSubscriptionRecipients} = require ('./GetSubscriptionRecipients');
const {np, prod, xm} = require ('./config');
const fs = require('fs')

function jsonReaderHelper(filePath, callback) {
    fs.readFile (filePath, 'utf-8', (err, fileData) => {
        if(err){
            return callback && callback(err);
        }
        try {
            const object = JSON.parse(fileData);
            return callback && callback(null, object);
        } catch (err) {
            return callback && callback(err);
        }
    });
}

async function getDefaultUserIds(path){
    let idSet = new Set();
    jsonReaderHelper(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            for(let user of data){
                idSet.add(user.id);
            }
        }
    });
    return idSet 
}

const getIdFromUserListHelper = (userList) => {
    let usersSet = new Set()
    for(let user of userList){
        usersSet.add(user.id);
    }
    return usersSet;
}

async function getSubRecipient (subId, callback){
    const result = await GetSubscriptionRecipients(subId);
    return callback(result);
}

async function getRecipientIdsFromSubscription(sub){
    const usersSet = await getSubRecipient(sub,getIdFromUserListHelper);
    return usersSet;
}

async function getRecipientIdsFromAllSubscriptions(subsList){
    let usersSet = new Set();
    for(let sub of subsList){
        await getSubRecipient(sub, (results) => {
            for(let result of results){
                usersSet.add(result.id);
            }
        });
    }
    return usersSet;
}

function computeDifference(defaultIds, subIds){
    const differenceSet = new Set();

    for(let id of subIds){
        if (!defaultIds.has(id)){
            differenceSet.add(id);
        }
    }

    for(let id of defaultIds){
        if (!subIds.has(id)){
            differenceSet.add(id);
        }
    }

    return differenceSet;
};

function uniqueDiffIds(differencesList) {
    const unionSet = new Set()
    for(let idSet of differencesList){
        for(let id of idSet){
            unionSet.add(id);
        }
    }
    return unionSet;
}

async function GetSubscriptionRecipients(subId) {
  try {
    const subscription = await xm.subscriptions.getSubscribers(prod, {}, subId);
    return subscription;
  } catch (error) {
    console.log(error);
  }
};




module.exports = {jsonReaderHelper, getIdFromUserListHelper, getSubRecipient, getRecipientIdsFromSubscription, getDefaultUserIds, computeDifference, uniqueDiffIds, GetSubscriptionRecipients};