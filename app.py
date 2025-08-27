from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",
            "https://frostboyz-frontend-djol.vercel.app",
            "https://www.frostboyzromania.com"
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
    return jsonify([
        {"id": 1, "name": "Cuban Chain", "price": 49.99, "img": "https://picsum.photos/200"},
        {"id": 2, "name": "Tennis Chain", "price": 59.99, "img": "https://picsum.photos/201"}
    ])

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
