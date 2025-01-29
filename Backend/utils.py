import requests
from config import GEMINI_API_KEY

# Base URL for the Gemini API (use stable v1 if available)
GEMINI_API_BASE_URL = "https://generativelanguage.googleapis.com/v1"

def analyze_text(text):
    """
    Analyze the credibility of an article's text using the Gemini API.
    """
    try:
        url = f"{GEMINI_API_BASE_URL}/models/gemini-1.5:generateContent?key={GEMINI_API_KEY}"
        payload = {
            "contents": [
                {
                    "parts": [
                        {"text": text}
                    ]
                }
            ]
        }
        headers = {"Content-Type": "application/json"}

        # Send the POST request
        response = requests.post(url, json=payload, headers=headers)

        # Raise an error if status code is not 200
        response.raise_for_status()
        return response.json()

    except requests.exceptions.RequestException as e:
        # Log the error and return it
        print(f"Error analyzing text: {e}")
        return {"error": str(e)}
