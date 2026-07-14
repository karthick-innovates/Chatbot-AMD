@app.route('/chat', methods=['POST'])
def chat_endpoint():
    user_input = request.json['input']
    response = get_response(user_input)
    return jsonify({'response': response})
    