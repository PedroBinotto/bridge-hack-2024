def get_response(model, msg):
    if model is None:
        raise Exception("Model is not initialized.")
    
    chat_session = model.start_chat(history=[])
    response = chat_session.send_message(msg)
    
    return response.text
