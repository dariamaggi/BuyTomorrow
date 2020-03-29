import json


with open('../risorse/purchase.json', 'r') as read_file:
        purchase = json.load(read_file)
        purchase = filter(lambda x: x['user_id'] == "5e7f84b6b0b8e3056e1bd070", purchase)
        print(purchase)
        