// js/main.js
import RuleBasedEngine from './rule-based.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 JazzLick 테스트 모드 시작");

    const engine = new RuleBasedEngine();

    // 테스트용 코드 진행
    const testChords = ["Cm7", "F7", "Bbmaj7", "Ebmaj7", "Abmaj7", "Dm7", "G7", "Cm7"];

    console.log("🎵 테스트 코드 진행:", testChords);

    // 1절 생성 테스트
    const firstChorus = engine.generateFirstChorus(testChords, "C");
    console.log("=== 1절 (Rule-based) ===");
    console.dir(firstChorus, { depth: null });

    // 2절 (아직 LLM 미연동)
    const secondChorus = engine.generateSecondChorus(testChords, "C");
    console.log("=== 2절 (예정) ===");
    console.dir(secondChorus, { depth: null });

    // 화면에도 간단히 출력
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.innerHTML = `
            <h2>테스트 결과</h2>
            <p><strong>입력 코드:</strong> ${testChords.join(" | ")}</p>
            <pre id="output"></pre>
        `;
        document.getElementById('output').textContent = JSON.stringify(firstChorus, null, 2);
    }
});