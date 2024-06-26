from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS  # Import CORS
import json
import os

app = Flask(__name__)
CORS(app)
products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": 'images/product1.png'
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": 'images/product2.jpg'
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": 'images/product3.jpg'
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": 'images/product4.jpg'
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": 'images/product5.jpg'
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": 'images/product6.jpg'
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": 'images/product7.jpg'
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": 'images/product8.jpg'
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": 'images/product9.jpg'
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": 'images/product10.jpg'
    }
]
users = [

    {
        "username": "Guest",
        "password": "guest1",
        "email": "guest@example.com"
    },
    {
        "username": "user",
        "password": "password1",
        "email": "user1@example.com"
    }


]


@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)


@app.route('/users', methods=['GET'])
@app.route('/users/add', methods=['GET'])
def get_users():
    return jsonify(users)


def load_users():
    return jsonify(products)


def add_user_to_json(user):
    users.append(user)


def find_user_by_username(username):  # find user by their username
    for user in users:
        if user['username'] == username:
            return user
    return None


@app.route('/users/add', methods=['POST'])
def add_user():
    new_user = request.json
    username = new_user['username']
    existing_user = find_user_by_username(username)
    if existing_user:
        return jsonify({'error': 'User already exists'}), 400
    add_user_to_json(new_user)
    return jsonify({'message': 'User added successfully'}), 201


@app.route('/users', methods=['POST'])
def login():
    login_data = request.json
    username = login_data['username']
    password = login_data['password']
    print(login_data, username, password)
    for user in users:
        if user['username'] == username and user['password'] == password:
            return jsonify({'message': 'Login successful'}), 200
    return jsonify({'error': 'Invalid username or password'}), 401


if __name__ == '__main__':
    app.run(debug=True)
