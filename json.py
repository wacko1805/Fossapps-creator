import json, requests 

url = requests.get("https://jsonplaceholder.typicode.com/users")
text = url.text

data = json.loads(text)

user = data[0   ]
print(user['name'])

address = user['address']
print(address)