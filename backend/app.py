from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/purchase/<string:user_id>', methods=['GET'])
def get_purchase(user_id):
    with open('../risorse/purchase.json', 'r') as read_file:
        purchase = json.load(read_file)
        purchase = filter(lambda x: x['user_id'] == user_id, purchase)
        return jsonify(purchase)

if __name__ == '__main__':
    app.run(debug=True)