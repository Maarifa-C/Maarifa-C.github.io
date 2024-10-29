import json
from flask import Flask, jsonify, request
from flask_cors import CORS

data = [{'rank': 1,'name': 'test1', 'questions': 0, 'active': False}]

# instance of flask application
app = Flask(__name__)
CORS(app)

# home route that returns below text when root url is accessed
@app.route("/get", methods=['GET'])
def get_data():
    return jsonify(data)

    
@app.route('/post', methods=['POST'])
def add_data():
  data = request.json['data']
  result = sum(data)
  return jsonify({'result': result})


 
if __name__ == '__main__':
    app.run(debug=True)