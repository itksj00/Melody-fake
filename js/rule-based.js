// js/rule-based.js
import { randomChoice } from './utils.js';

class RuleBasedEngine {
    constructor() {
        console.log("✅ RuleBasedEngine 초기화 완료");
    }

    /**
     * 1절 생성 - 기본 꾸밈음 위주 (규칙 기반)
     * @param {Array<string>} chords - 코드 진행 배열 ["Cm7", "F7", "Bbmaj7", ...]
     * @param {string} key - 기본 키 (default: "C")
     * @returns {Object} 
     */
    generateFirstChorus(chords, key = "C") {
        const result = {
            section: "1절 (Basic Fake)",
            chords: chords,
            bars: [],
            description: "코드 구성음 + 기본 꾸밈음, 경과음 중심의 안전한 페이크 버전",
            type: "rule-based"
        };

        chords.forEach((chord, barIndex) => {
            const chordTones = this._getChordTones(chord);
            const scaleNotes = this._getDiatonicScale(key);
            
            // 기본 패턴: 코드음 → 꾸밈음 → 경과음 → 코드음
            const barNotes = [
                chordTones[0],                    // 루트음
                randomChoice(chordTones),         // 코드 구성음
                this._getEnclosureNote(chordTones[1]), // enclosure
                randomChoice(scaleNotes),         // 스케일 내 경과음
                chordTones[chordTones.length - 1] // 마지막 코드음
            ];

            result.bars.push({
                bar: barIndex + 1,
                chord: chord,
                notes: barNotes,
                rhythm: "quarter + 8th notes",
                duration: ["4n", "8n", "8n", "8n", "4n"]
            });
        });

        return result;
    }

    // ====================== 내부 헬퍼 메서드 ======================

    _getChordTones(chord) {
        const dict = {
            "Cm7": ["C4", "Eb4", "G4", "Bb4"],
            "F7": ["F4", "A4", "C5", "Eb5"],
            "Bbmaj7": ["Bb4", "D4", "F4", "A4"],
            "Ebmaj7": ["Eb4", "G4", "Bb4", "D5"],
            "Abmaj7": ["Ab4", "C5", "Eb5", "G5"],
            "Dm7": ["D4", "F4", "A4", "C5"],
            "G7": ["G4", "B4", "D5", "F5"],
            // 필요할 때 계속 확장
        };
        return dict[chord] || ["C4", "E4", "G4"];
    }

    _getDiatonicScale(key) {
        const majorScale = ["C4","D4","E4","F4","G4","A4","B4"];
        // 간단히 C 메이저 기준 (나중에 music-theory.js로 이동)
        return majorScale;
    }

    _getEnclosureNote(targetNote) {
        // 간단한 enclosure (target note를 감싸는 기법)
        const noteMap = { "C4": "B3", "D4": "C#4", "Eb4": "D4", "F4": "E4" };
        return noteMap[targetNote] || "B3";
    }

    // 2절은 LLM에게 넘기기 때문에 여기서는 최소한만 구현
    generateSecondChorus(chords, key = "C") {
        return {
            section: "2절 (Creative Ad-lib)",
            message: "2절은 Ollama LLM을 통해 생성됩니다.",
            chords: chords,
            type: "llm-pending"
        };
    }
}

export default RuleBasedEngine;