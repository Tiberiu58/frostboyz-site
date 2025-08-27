from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://frostboyz-frontend-djol.vercel.app",
            "https://www.frostboyzromania.com",
            "http://localhost:3000"
        ]
    }
})

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/health')
def health():
    return jsonify(status="ok")

@app.route('/api/products')
def products():
    data = [
        {
            "id": 1,
            "name": "Cuban Chain 8mm",
            "price": 49.99,
            "badge": "New",
            "img": "https://picsum.photos/seed/cuban/640/640"
        },
        {
            "id": 2,
            "name": "Tennis Chain 3mm",
            "price": 59.99,
            "badge": "Hot",
            "img": "https://picsum.photos/seed/tennis/640/640"
        },
        {
            "id": 3,
            "name": "Rope Chain 4mm",
            "price": 39.99,
            "badge": "Drop Soon",
            "img": "https://picsum.photos/seed/rope/640/640"
        }
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
