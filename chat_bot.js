/* =====================================================
   CHATBOT SYSTEM - FIXED VERSION
   AI Moto Chat with Screenshot Capability
======================================================*/

console.log('🤖 Chat Bot Script Loading...');

/* =====================================================
   ROBOT HEAD MOVEMENT (Mouse-based Parallax Animation)
======================================================*/

const layers = [
	{ id: "hair", initialOffset: { x: 0, y: -18 }, maxOffset: 4, reverse: true },
	{ id: "head", initialOffset: { x: 0, y: 4 }, maxOffset: 4 },
	{ id: "face", initialOffset: { x: 0, y: 7 }, maxOffset: 8 },
	{ id: "expression", initialOffset: { x: 0, y: 7 }, maxOffset: 12 }
].map(layer => ({
	...layer,
	element: document.getElementById(layer.id)
})).filter(layer => layer.element !== null);

const container = document.getElementById("glits-chatbot");

if (container && layers.length > 0) {
	let containerRect = container.getBoundingClientRect();
	let maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2;
	let mouseX = window.innerWidth / 2;
	let mouseY = window.innerHeight / 2;

	// Apply movement offsets
	layers.forEach(layer => {
		layer.element.style.setProperty("--offset-x", `${layer.initialOffset.x}px`);
		layer.element.style.setProperty("--offset-y", `${layer.initialOffset.y}px`);
	});

	// Update animated robot head movement
	function updateParallax() {
		const centerX = containerRect.left + containerRect.width / 2;
		const centerY = containerRect.top + containerRect.height / 2;
		const dx = mouseX - centerX;
		const dy = mouseY - centerY;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance === 0) return;

		const influence = Math.min(distance / maxDistance, 1);
		const dirX = dx / distance;
		const dirY = dy / distance;

		layers.forEach(layer => {
			const factor = layer.reverse ? -1 : 1;
			const offsetX = dirX * layer.maxOffset * influence * factor;
			const offsetY = dirY * layer.maxOffset * influence * factor;
			layer.element.style.setProperty("--offset-x", `${layer.initialOffset.x + offsetX}px`);
			layer.element.style.setProperty("--offset-y", `${layer.initialOffset.y + offsetY}px`);
		});
	}

	// Animation loop
	function animateHead() {
		updateParallax();
		requestAnimationFrame(animateHead);
	}
	animateHead();

	// Track mouse for movement
	document.addEventListener("mousemove", e => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});

	// Recalculate on resize
	window.addEventListener("resize", () => {
		containerRect = container.getBoundingClientRect();
		maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2;
	});
}

/* =====================================================
   BLINKING ANIMATION
======================================================*/

const blinkConfig = {
	minInterval: 1500,
	maxInterval: 1500,
	closeSpeed: 100,
	closedDuration: 150,
	openSpeed: 150
};

const leftEye = document.getElementById("eye-l");
const rightEye = document.getElementById("eye-r");

function blink() {
	if (!leftEye || !rightEye) return;
	
	const leftBox = leftEye.getBBox();
	const rightBox = rightEye.getBBox();

	leftEye.style.transformOrigin = `${leftBox.x + leftBox.width / 2}px ${leftBox.y + leftBox.height / 2}px`;
	rightEye.style.transformOrigin = `${rightBox.x + rightBox.width / 2}px ${rightBox.y + rightBox.height / 2}px`;

	leftEye.style.transition = `transform ${blinkConfig.closeSpeed}ms ease-out`;
	rightEye.style.transition = `transform ${blinkConfig.closeSpeed}ms ease-out`;

	leftEye.style.transform = "scaleY(0.1)";
	rightEye.style.transform = "scaleY(0.1)";

	setTimeout(() => {
		leftEye.style.transition = `transform ${blinkConfig.openSpeed}ms ease-out`;
		rightEye.style.transition = `transform ${blinkConfig.openSpeed}ms ease-out`;
		leftEye.style.transform = "scaleY(1)";
		rightEye.style.transform = "scaleY(1)";
	}, blinkConfig.closeSpeed + blinkConfig.closedDuration);
}

function blinkLoop() {
	const delay = Math.random() * (blinkConfig.maxInterval - blinkConfig.minInterval) + blinkConfig.minInterval;
	setTimeout(() => {
		blink();
		blinkLoop();
	}, delay);
}
if (leftEye && rightEye) blinkLoop();

/* =====================================================
   CHAT SYSTEM LOGIC
======================================================*/

const aiResponses = [
	"Hello! How can I help you today?",
	"This item is very popular!",
	"I'm checking stock availability now.",
	"Thanks! I'm happy to assist!",
	"We support multiple payment methods.",
	"I'm here if you need more help.",
	"Our team will follow up shortly."
];

const defaultSuggestions = [
	"Book a consultation",
	"View our services",
	"Tell me about solutions",
	"Get support now"
];

let chatHistory = [];
let isExpanded = false;
let lastMessageType = null;

// UI elements
const chatButton = document.getElementById("glits-chatbot");
const greetingBubble = document.getElementById("glitsBubble");
const chatWindow = document.getElementById("glits-chatWindow");
const expandButton = document.getElementById("expandButton");
const closeButton = document.getElementById("closeButton");
const chatMessages = document.getElementById("glits-chatMessages");
const chatInput = document.getElementById("glits-chatInput");
const sendButton = document.getElementById("sendButton");
const screenshotButton = document.getElementById("screenshotButton");

/**
 * Save chat messages
 */
function saveMessage(text, type) {
	chatHistory.push({ text, type, timestamp: Date.now() });
}

function showSuggestions(list) {
	const container = document.getElementById("glitsSuggestions");
	if (!container) return;

	container.innerHTML = "";

	list.forEach(text => {
		const pill = document.createElement("div");
		pill.className = "suggestion-pill";
		pill.textContent = text;

		pill.onclick = () => {
			container.innerHTML = "";
			addMessageToUI(text, "user");
			handleSuggestion(text);
		};

		container.appendChild(pill);
	});
}

async function handleSuggestion(text) {
	showTypingIndicator();
	const aiText = await queryBackend(text);
	removeTypingIndicator();
	addMessageToUI(aiText, "ai");
}

/**
 * Create chat UI messages with avatars
 */
function addMessageToUI(text, type, shouldSave = true) {
	const msg = document.createElement("div");
	msg.className = `message ${type}`;

	const avatar = document.createElement("div");
	avatar.className = type === "ai" ? "ai-avatar" : "user-avatar";
	avatar.innerHTML = type === "ai"
		? `<i class="fa-solid fa-robot"></i>`
		: `<i class="fa-solid fa-user"></i>`;
	msg.appendChild(avatar);

	const bubble = document.createElement("div");
	bubble.className = "message-bubble";

	const preElement = document.createElement("pre");
	preElement.className = "help-doc";
	preElement.textContent = text;
	bubble.appendChild(preElement);

	msg.appendChild(bubble);
	chatMessages.appendChild(msg);
	
	if (shouldSave) {
		saveMessage(text, type);
	}
	
	scrollToBottom();
}

/**
 * Typing animation
 */
function showTypingIndicator() {
	const typingDiv = document.createElement("div");
	typingDiv.className = "message ai";
	typingDiv.id = "typingIndicator";

	const avatar = document.createElement("div");
	avatar.className = "ai-avatar";
	avatar.innerHTML = `<i class="fa-solid fa-robot"></i>`;
	typingDiv.appendChild(avatar);

	const bubble = document.createElement("div");
	bubble.className = "message-bubble";
	bubble.innerHTML = `<div class="typing-indicator d-flex"><span></span><span></span><span></span></div>`;
	typingDiv.appendChild(bubble);

	chatMessages.appendChild(typingDiv);
	scrollToBottom();
}

function removeTypingIndicator() {
	const typingDiv = document.getElementById("typingIndicator");
	if (typingDiv) typingDiv.remove();
}

/**
 * Scroll to bottom after new message
 */
function scrollToBottom() {
	if (chatMessages) {
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}
}

/**
 * Update expand/collapse button icon
 */
function updateExpandButton() {
	if (!expandButton) return;
	expandButton.innerHTML = isExpanded
		? `<i class="fa-solid fa-minimize"></i>`
		: `<i class="fa-solid fa-maximize"></i>`;
}

/* =====================================================
   SCREENSHOT FUNCTIONALITY
======================================================*/

/**
 * Show notification toast
 */
function showNotification(message, type = "success") {
	const toast = document.createElement("div");
	toast.className = `notification-toast ${type}`;
	
	const icon = document.createElement("i");
	icon.className = type === "success" 
		? "fa-solid fa-circle-check" 
		: "fa-solid fa-circle-xmark";
	
	const text = document.createElement("span");
	text.textContent = message;
	
	toast.appendChild(icon);
	toast.appendChild(text);
	document.body.appendChild(toast);
	
	setTimeout(() => {
		toast.classList.add("removing");
		setTimeout(() => toast.remove(), 300);
	}, 3000);
}

/**
 * Capture and download screenshot of chat
 */
async function captureScreenshot() {
	try {
		if (!screenshotButton) return;
		
		screenshotButton.disabled = true;
		screenshotButton.style.opacity = "0.5";
		
		if (!chatMessages || chatMessages.children.length === 0) {
			showNotification("No messages to capture!", "error");
			screenshotButton.disabled = false;
			screenshotButton.style.opacity = "1";
			return;
		}
		
		console.log("📸 Capturing screenshot...");
		
		const temp = document.createElement("div");
		temp.style.position = "fixed";
		temp.style.left = "-9999px";
		temp.style.background = "white";
		temp.style.padding = "20px";
		temp.style.borderRadius = "12px";
		temp.style.minWidth = "400px";
		temp.style.fontFamily = "Poppins, sans-serif";
		
		const clonedMessages = chatMessages.cloneNode(true);
		clonedMessages.style.maxHeight = "none";
		clonedMessages.style.overflowY = "visible";
		clonedMessages.style.display = "flex";
		clonedMessages.style.flexDirection = "column";
		
		const header = document.createElement("div");
		header.style.marginBottom = "15px";
		header.style.paddingBottom = "10px";
		header.style.borderBottom = "2px solid #88a34b";
		header.innerHTML = `
			<h3 style="margin: 0 0 5px 0; color: #333;">AI Moto Chat</h3>
			<small style="color: #999;">${new Date().toLocaleString()}</small>
		`;
		
		temp.appendChild(header);
		temp.appendChild(clonedMessages);
		document.body.appendChild(temp);
		
		const canvas = await html2canvas(temp, {
			backgroundColor: "#ffffff",
			scale: 2,
			logging: false,
			allowTaint: true,
			useCORS: true
		});
		
		document.body.removeChild(temp);
		
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png");
		link.download = `chat_screenshot_${Date.now()}.png`;
		link.click();
		
		console.log("✅ Screenshot captured and downloaded");
		showNotification("Screenshot saved successfully!", "success");
		
	} catch (error) {
		console.error("❌ Screenshot error:", error);
		showNotification("Failed to capture screenshot. Try again!", "error");
	} finally {
		if (screenshotButton) {
			screenshotButton.disabled = false;
			screenshotButton.style.opacity = "1";
		}
	}
}

/* =====================================================
   API COMMUNICATION
======================================================*/

/**
 * Query the Groq API via Flask backend
 */
async function queryBackend(userText) {
	try {
		console.log("📤 Sending message to backend:", userText);
		
		const resp = await fetch('/api/chat', {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({ message: userText })
		});
		
		console.log("📥 Response status:", resp.status);
		
		if (!resp.ok && resp.status !== 200) {
			console.error("❌ HTTP Error:", resp.status);
			return "❌ Server error. Please check your connection.";
		}
		
		const responseText = await resp.text();
		console.log("📥 Response length:", responseText.length);
		
		if (!responseText) {
			console.error("❌ Empty response from server");
			return "❌ Server returned empty response.";
		}
		
		let data;
		try {
			data = JSON.parse(responseText);
		} catch (e) {
			console.error("❌ JSON parse error:", e);
			console.error("❌ Response was:", responseText.slice(0, 200));
			return "❌ Server response invalid. Please try again.";
		}
		
		if (data.error) {
			console.error("❌ Backend Error:", data.error);
			return `❌ Error: ${data.error}`;
		}
		
		if (data.response) {
			console.log("✅ Response received");
			return data.response;
		}
		
		console.error("⚠️ No response field in data");
		return "❌ Sorry, couldn't generate a response. Please try again.";
		
	} catch (err) {
		console.error("❌ Network Error:", err);
		return `❌ Network error: ${err.message}`;
	}
}

/**
 * Send message handler
 */
async function sendMessage() {
	if (!chatInput || !chatMessages) {
		console.error("❌ Chat elements not ready");
		return;
	}

	const text = chatInput.value.trim();
	if (!text) return;
	
	console.log("📨 User sent:", text);
	addMessageToUI(text, "user");
	chatInput.value = "";
	chatInput.focus();

	showTypingIndicator();
	const aiText = await queryBackend(text);
	removeTypingIndicator();
	addMessageToUI(aiText, "ai");
}


/* =====================================================
   EVENT LISTENERS
======================================================*/

function initializeEventListeners() {
	if (!chatButton) {
		console.warn("⚠️ Chat button not found");
		setTimeout(initializeEventListeners, 100);
		return;
	}

	// Open chat
	chatButton.addEventListener("click", () => {
		if (chatWindow) chatWindow.classList.add("active");
		chatButton.classList.add("hidden");

		if (chatHistory.length === 0 && chatMessages) {
			setTimeout(() => {
				addMessageToUI("How can we help?", "ai");
				showSuggestions(defaultSuggestions);
			}, 300);
		}
	});

	// Close chat
	if (closeButton) {
		closeButton.addEventListener("click", () => {
			if (chatWindow) chatWindow.classList.remove("active", "expanded");
			chatButton.classList.remove("hidden");
			isExpanded = false;
			updateExpandButton();
		});
	}

	// Expand button
	if (expandButton) {
		expandButton.addEventListener("click", () => {
			isExpanded = !isExpanded;
			if (chatWindow) chatWindow.classList.toggle("expanded", isExpanded);
			updateExpandButton();
			setTimeout(scrollToBottom, 100);
		});
	}

	// Send button
	if (sendButton) {
		sendButton.addEventListener("click", sendMessage);
	}

	// Enter key
	if (chatInput) {
		chatInput.addEventListener("keypress", e => {
			if (e.key === "Enter") sendMessage();
		});
	}

	// Screenshot button
	if (screenshotButton) {
		screenshotButton.addEventListener("click", captureScreenshot);
	}

	console.log("✅ Event listeners initialized");
}

// Initialize when ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializeEventListeners);
} else {
	initializeEventListeners();
}

console.log("✅ Chat Bot Script Loaded");
