// JazzLick 설정 파일
const CONFIG = {
    ollama: {
        baseUrl: "http://localhost:11434",
        model: "qwen2.5:7b-instruct-q5_K_M",   // 저사양 추천
        temperature: 0.7,
        maxTokens: 1024
    },
    music: {
        defaultBpm: 120,
        defaultKey: "C",
        defaultScale: "major"
    },
    version: "0.1.0"
};

export default CONFIG;