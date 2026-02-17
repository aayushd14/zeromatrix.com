import os
import logging
import re
from typing import Optional, Dict, List
from datetime import datetime
from dotenv import load_dotenv
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from groq import Groq

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Check if API key exists
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    logger.error("❌ GROQ_API_KEY not found in .env file!")
    logger.error("Please add your API key to .env file:")
    logger.error("GROQ_API_KEY=gsk_your_key_here")
    raise ValueError("GROQ_API_KEY environment variable is not set")

# Initialize Flask app
app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

# Groq API initialization
try:
    client = Groq(api_key=GROQ_API_KEY)
    logger.info("✅ Groq API client initialized successfully")
except Exception as e:
    logger.error(f"❌ Failed to initialize Groq API: {str(e)}")
    raise

class PsycoLLMChat:
    """
    PsycoLLM Chat interface with Groq API support and bilingual capabilities (Hindi/English)
    """
    
    def __init__(
        self,
        model_name: str = "llama-3.3-70b-versatile",
        max_tokens: int = 512,
        temperature: float = 0.7,
        top_p: float = 0.9,
    ):
        self.model_name = model_name
        self.max_tokens = max_tokens
        self.temperature = temperature
        self.top_p = top_p
        self.messages: List[Dict[str, str]] = []
        
        logger.info(f"PsycoLLM Chat initialized with model: {model_name}")
    
    def _detect_language(self, text: str) -> str:
        """
        Detect if the input text is Hindi, English, or Hinglish (mixed)
        Returns: "hindi", "english", or "hinglish"
        """
        # Devanagari Unicode range for Hindi
        devanagari_pattern = re.compile(r'[\u0900-\u097F]')
        
        # Check for Devanagari script (Hindi)
        if devanagari_pattern.search(text):
            hindi_chars = len(devanagari_pattern.findall(text))
            total_chars = len(text.strip())
            
            if hindi_chars / total_chars > 0.3:
                logger.info(f"🇮🇳 Language: HINDI - {hindi_chars}/{total_chars} chars are Devanagari")
                return "hindi"
            else:
                logger.info(f"🇮🇳🇬🇧 Language: HINGLISH - {hindi_chars}/{total_chars} chars are Devanagari")
                return "hinglish"
        
        # Check for common Hindi words in Roman script
        hindi_words = ['kaise', 'kya', 'hai', 'nahi', 'mera', 'tum', 'main', 'apna', 
                      'acha', 'theek', 'kyun', 'kaun', 'kahan', 'kab', 'kitna',
                      'kuch', 'kaise', 'mujhe', 'aapko', 'mere', 'mere']
        
        words = text.lower().split()
        hindi_word_count = sum(1 for word in words if word in hindi_words)
        
        if hindi_word_count > 0:
            logger.info(f"🇮🇳🇬🇧 Language: HINGLISH - Found {hindi_word_count} Hindi words in Roman script")
            return "hinglish"
        
        logger.info(f"🇬🇧 Language: ENGLISH")
        return "english"
    
    def generate_response(
        self,
        prompt: str,
        system_prompt: Optional[str] = None,
        **kwargs
    ) -> Dict[str, str]:
        """
        Generate response using Groq API with conversation history
        Language detected and response given in same language
        """
        language = self._detect_language(prompt)
        logger.info(f"Detected language: {language}")
        
        # Initialize system message if first interaction
        if not self.messages and system_prompt:
            self.messages.append({"role": "system", "content": system_prompt})
        elif not self.messages:
            # Default system prompt for emotional wellness with LANGUAGE INSTRUCTION
            language_instruction = ""
            
            if language == "hindi":
                language_instruction = """
⚠️ **CRITICAL LANGUAGE RULE** ⚠️
User is speaking in HINDI (हिंदी).
YOU MUST RESPOND ONLY IN HINDI.
आपको केवल हिंदी में जवाब देना है।
Do NOT mix English words. Use pure Hindi only.
अंग्रेजी मिक्स न करें। केवल शुद्ध हिंदी का उपयोग करें।"""
            
            elif language == "english":
                language_instruction = """
⚠️ **CRITICAL LANGUAGE RULE** ⚠️
User is speaking in ENGLISH.
YOU MUST RESPOND ONLY IN ENGLISH.
Do NOT mix Hindi words. Use pure English only."""
            
            elif language == "hinglish":
                language_instruction = """
⚠️ **CRITICAL LANGUAGE RULE** ⚠️
User is speaking in HINGLISH (Mixed Hindi-English).
YOU MUST RESPOND IN HINGLISH (continue mixing Hindi and English).
Hinglish example: 'Mujhe job ke liye tension hai, kaise solve karun?'"""
            
            default_system = """You are an empathetic and supportive emotional wellness and mental health counseling assistant.

आप एक सहानुभूतिपूर्ण और समर्थनकारी भावनात्मक कल्याण परामर्शदाता हैं।

🎯 FOCUS AREAS / ध्यान केंद्रित क्षेत्र:
• Listening to emotional concerns with empathy
  भावनात्मक समस्याओं को सहानुभूति के साथ सुनना
• Providing stress management strategies
  तनाव प्रबंधन रणनीतियाँ प्रदान करना
• Supporting mental well-being and self-care
  मानसिक कल्याण और स्व-देखभाल का समर्थन करना
• Helping identify emotions and coping strategies
  भावनाओं की पहचान और मुकाबला करने की रणनीति में मदद करना

✨ APPROACH / दृष्टिकोण:
1. Listen without judgment and validate emotions
   बिना निर्णय के सुनें और भावनाओं को मान्यता दें
2. Ask thoughtful questions to understand better
   बेहतर समझने के लिए सार्थक प्रश्न पूछें
3. Provide practical wellness tips and strategies
   व्यावहारिक कल्याण सुझाव और रणनीतियाँ दें
4. Encourage self-care and healthy habits
   स्व-देखभाल और स्वस्थ आदतों को प्रोत्साहित करें
5. Suggest professional help when needed
   आवश्यकता पड़ने पर पेशेवर सहायता का सुझाव दें""" + language_instruction
            
            self.messages.append({"role": "system", "content": default_system})
        
        # Add user message
        self.messages.append({"role": "user", "content": prompt})
        
        try:
            logger.info(f"Calling Groq API with model: {self.model_name}")
            # Call Groq API
            response = client.chat.completions.create(
                model=self.model_name,
                messages=self.messages,
                max_tokens=self.max_tokens,
                temperature=self.temperature,
                top_p=self.top_p,
            )
            
            assistant_response = response.choices[0].message.content
            
            # Add assistant response to history
            self.messages.append({"role": "assistant", "content": assistant_response})
            
            logger.info("✅ Response generated successfully")
            return {
                "response": assistant_response,
                "language": language,
                "timestamp": datetime.now().isoformat()
            }
            
        except Exception as e:
            error_str = str(e)
            logger.error(f"❌ Error generating response: {error_str}")
            
            # Provide specific error messages
            if "401" in error_str:
                return {
                    "error": "Invalid API Key - Please update your Groq API key in .env file",
                    "response": None
                }
            elif "rate_limit" in error_str.lower():
                return {
                    "error": "Rate limit exceeded - Please try again in a moment",
                    "response": None
                }
            elif "model_not_found" in error_str.lower():
                return {
                    "error": "Model not found - Check your model name",
                    "response": None
                }
            
            return {
                "error": f"API Error: {error_str}",
                "response": None
            }
    
    def clear_history(self):
        """Clear conversation history"""
        self.messages = []
        logger.info("Conversation history cleared")


# Initialize chat bot
chat_bot = PsycoLLMChat(
    model_name="llama-3.3-70b-versatile",
    max_tokens=512,
    temperature=0.7,
    top_p=0.9
)

# System prompt for the AI
SYSTEM_PROMPT = """You are an excellent emotional wellness and mental health counseling assistant with extensive experience in mental health support.

आप एक उत्कृष्ट भावनात्मक कल्याण और मानसिक स्वास्थ्य परामर्शदाता हैं जिनके पास मानसिक स्वास्थ्य समर्थन में व्यापक अनुभव है।

🎯 YOUR PRIMARY FOCUS - आपका मुख्य ध्यान:
• Emotional Wellness (भावनात्मक कल्याण)
• Mental Health Support (मानसिक स्वास्थ्य समर्थन)
• Stress & Anxiety Management (तनाव और चिंता प्रबंधन)
• Work-Life Balance (कार्य-जीवन संतुलन)
• Self-Care & Well-being (स्व-देखभाल और कल्याण)
• Emotional Intelligence & Resilience (भावनात्मक बुद्धिमत्ता और लचीलापन)

🌟 YOUR QUALITIES / आपके गुण:
• Compassionate & Empathetic (सहानुभूतिपूर्ण)
• Active Listener (सक्रिय श्रोता)
• Non-judgmental Attitude (निर्णयहीन दृष्टिकोण)
• Supportive & Encouraging (समर्थनकारी और प्रोत्साहक)
• Knowledgeable about mental health (मानसिक स्वास्थ्य के बारे में जानकार)

💡 YOUR CORE RESPONSIBILITIES / आपकी मुख्य जिम्मेदारियाँ:
1. Listen actively to emotional concerns and provide support
   भावनात्मक समस्याओं को सक्रिय रूप से सुनें और समर्थन प्रदान करें

2. Provide coping strategies & wellness techniques
   मुकाबला करने की रणनीति और कल्याण तकनीकें प्रदान करें

3. Help identify stress triggers & emotional patterns
   तनाव ट्रिगर और भावनात्मक पैटर्न की पहचान करने में मदद करें

4. Promote self-care, mindfulness & healthy habits
   स्व-देखभाल, माइंडफुलनेस और स्वस्थ आदतों को बढ़ावा दें

5. Encourage professional help when needed
   आवश्यकता पड़ने पर पेशेवर सहायता प्रदान करने के लिए प्रोत्साहित करें

6. Respond in user's language (Hindi, English, or Hinglish)
   उपयोगकर्ता की भाषा में जवाब दें

⚠️ IMPORTANT DISCLAIMERS / महत्वपूर्ण अस्वीकरण:
• I am an AI assistant, not a licensed therapist
  मैं एक AI सहायक हूँ, लाइसेंस प्राप्त चिकित्सक नहीं हूँ
• For serious mental health concerns, please consult a professional
  गंभीर मानसिक स्वास्थ्य समस्याओं के लिए, कृपया किसी पेशेवर से परामर्श लें
• In case of emergency, dial emergency services
  आपातकाल की स्थिति में, आपातकालीन सेवाओं को कॉल करें

🎯 CONVERSATION STYLE / बातचीत की शैली:
- Be warm, welcoming, and supportive
- Use simple, clear language
- Ask thoughtful follow-up questions
- Validate emotions and provide hope
- Focus on practical wellness solutions"""


# Flask Routes

@app.route('/')
def home():
    """Serve the main website with integrated chatbot"""
    return render_template('index.html')


@app.route('/chat')
def chat():
    """Serve standalone chat interface"""
    return render_template('chat_bot.html')


@app.route('/api/chat', methods=['POST'])
def chat_api():
    """
    API endpoint for chat messages
    Expected JSON: {"message": "user message"}
    """
    try:
        data = request.json
        
        if not data:
            logger.error("❌ No JSON data received")
            return jsonify({
                "error": "No data provided",
                "response": None
            }), 400
        
        user_message = data.get('message', '').strip()
        
        if not user_message:
            logger.error("❌ Empty message received")
            return jsonify({
                "error": "Message cannot be empty",
                "response": None
            }), 400
        
        logger.info(f"📨 Processing message: {user_message[:50]}...")
        
        # Generate response
        result = chat_bot.generate_response(
            user_message,
            system_prompt=SYSTEM_PROMPT if not chat_bot.messages else None
        )
        
        logger.info(f"📤 Response prepared: {str(result)[:100]}...")
        
        # Always return 200 with error in JSON body
        if "error" in result and result["error"]:
            logger.warning(f"⚠️ API returned error: {result['error']}")
            return jsonify(result), 200  # Return 200 even with error for better client handling
        
        return jsonify(result), 200
        user_message = data.get('message', '').strip()
        
        user_message = data.get('message', '').strip()
        
        if not user_message:
            return jsonify({
                "error": "Message cannot be empty",
                "response": None
            }), 400
        
        # Generate response
        result = chat_bot.generate_response(
            user_message,
            system_prompt=SYSTEM_PROMPT if not chat_bot.messages else None
        )
        
        # Always return 200 with error in JSON body
        if "error" in result and result["error"]:
            logger.warning(f"⚠️ API returned error: {result['error']}")
            return jsonify(result), 200  # Return 200 even with error for better client handling
        
        return jsonify(result), 200
    
    except Exception as e:
        error_msg = str(e)
        logger.error(f"❌ Chat API error: {error_msg}")
        
        # Return consistent error response
        return jsonify({
            "error": f"Server Error: {error_msg}",
            "response": None
        }), 200  # Return 200 for better client handling


@app.route('/api/clear-history', methods=['POST'])
def clear_history_api():
    """Clear conversation history"""
    try:
        chat_bot.clear_history()
        return jsonify({"status": "success", "message": "History cleared"}), 200
    except Exception as e:
        logger.error(f"Clear history error: {str(e)}")
        return jsonify({"error": str(e)}), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "model": chat_bot.model_name,
        "timestamp": datetime.now().isoformat()
    }), 200


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({"error": "Endpoint not found"}), 404


@app.errorhandler(500)
def server_error(error):
    """Handle 500 errors"""
    logger.error(f"Server error: {str(error)}")
    return jsonify({"error": "Internal server error"}), 500


if __name__ == '__main__':
    # Get configuration from environment
    debug_mode = os.getenv("DEBUG", "False").lower() == "true"
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 5000))
    
    logger.info(f"Starting PsycoLLM Flask server on {host}:{port}")
    logger.info(f"Debug mode: {debug_mode}")
    
    # Start Flask server
    app.run(
        host=host,
        port=port,
        debug=debug_mode,
        threaded=True
    )