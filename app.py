from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# --- NOU: pagina de Instagram ---
@app.route('/instagram')
def instagram():
    return render_template('instagram.html')

if __name__ == '__main__':
    app.run(debug=False)

git config --global user.name "Tiberiu58"
git config --global user.email "tiberiumatei1978@gmail.com"