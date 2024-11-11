import json
from flask import Flask,render_template, request, jsonify
from flask_cors import CORS



data = []

# instance of flask application
app = Flask(__name__)
CORS(app)

# home route that returns below text when root url is accessed
@app.route("/get", methods=['GET'])
def get_data():
    return jsonify(data)

    
@app.route('/post', methods=['POST'])
def add_data():
  user = request.json['data']
  data.append(user)
  return jsonify(user)


 
if __name__ == '__main__':
    app.run(debug=True)