from flask import Flask, request, jsonify
from utils import analyze_text, analyze_url

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()

        # Check if the request is valid
        if not data or 'type' not in data or ('input' not in data):
            return jsonify({"error": "Invalid request"}), 400

        analysis_type = data['type']  # "url" or "text"
        input_data = data['input']

        if analysis_type == 'url':
            result = analyze_url(input_data)
        elif analysis_type == 'text':
            result = analyze_text(input_data)
        else:
            return jsonify({"error": "Invalid analysis type"}), 400

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
