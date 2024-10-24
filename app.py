import json
from flask import Flask, jsonify, request

data = [{'rank': 1,'name': 'test1', 'questions': 0, 'active': False}]

# instance of flask application
app = Flask(__name__)

# home route that returns below text when root url is accessed
@app.route("/get", methods=['GET'])
def get_data():
    return jsonify(data)

    
@app.route('/post', methods=['POST'])
def add_data():
 user = request.get_json(force=True)
#  user=['rank', 'name', 'questions', 'active']
 data.append(user)
 return jsonify({})


 
if __name__ == '__main__':
    app.run(debug=True)