from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS  # Import CORS
import json
import os

app = Flask(__name__)


def load_users():
    with open('users.json', 'r') as f:
        return json.load(f)['users']


@app.route('/signup/add', methods=['POST'])
def add_users():

    new_user = request.json
    users = load_users()

    username_to_find = new_user['username']
    found_user = search_username(users, username_to_find)

    if found_user:
        print(f"User found: {found_user}")
    else:
        print("User not found")
        users.append(new_user)

        with open(users.json, 'w') as json_file:
            json.dump(new_user, json_file, indent=4)
        return jsonify(new_user), 201


def search_username(users, username):
    for user in users:
        if user['username'] == username:
            return user
    return None