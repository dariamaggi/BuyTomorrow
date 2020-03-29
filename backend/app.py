from flask import Flask
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
        return json.dumps(purchase)

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    passw = request.form['password']
    with open('../risorse/users.json', 'r') as read_file:
        users = json.load(read_file)
        users = filter(lambda x: x['email'] == email and x['password'] == passw, purchase)
        if len(users) == 1:
            return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
        else:
            return json.dumps({'success':False}), 401, {'ContentType':'application/json'} 

@app.route('/register', methods=['POST'])
def register():
    email = request.form['email']
    with open('../risorse/users.json', 'w+') as rw_file:
        users = json.load(rw_file)
        users = filter(lambda x: x['email'] == email, purchase)
        if len(users) != 0:
            return json.dumps({'success':False}), 409, {'ContentType':'application/json'}
        users.append(request)

if __name__ == '__main__':
    app.run(debug=True)