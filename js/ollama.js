// Ollama 연동 모듈
import CONFIG from './config.js';

export async function callOllama(prompt) {
    try {
        const response = await fetch(`${CONFIG.ollama.baseUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: CONFIG.ollama.model,
                prompt: prompt,
                temperature: CONFIG.ollama.temperature,
                max_tokens: CONFIG.ollama.maxTokens,
                stream: false
            })
        });

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Ollama 호출 실패:", error);
        throw error;
    }
}