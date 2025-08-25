from flask import Flask, render_template

# inițializează aplicația Flask
app = Flask(__name__)

# ruta principală → pagina de start
@app.route('/')
def home():
    return render_template('index.html')

# pornirea aplicației doar local (pe Render se folosește gunicorn, deci if-ul protejează)
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
