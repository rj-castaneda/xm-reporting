import json,csv
from typing import OrderedDict



with open('data/json/20220228_trading.json', 'r') as f:
    data = json.load(f)

with open('data/csv/20220228_trading.csv', 'w') as f:
    # fieldNames = data[0].keys()
    fieldNames = ['id', 'targetName', 'firstName', 'lastName']
    writer = csv.DictWriter(f, fieldnames=fieldNames)
    writer.writeheader()
    for user in data:
        outputUser = {}
        outputUser['id'] = user['id']
        outputUser['targetName'] = user['targetName']
        outputUser['firstName'] = user['firstName']
        outputUser['lastName'] = user['lastName']
        writer.writerow(outputUser)
