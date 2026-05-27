// 음악 이론 핵심 유틸
export const SCALES = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    mixolydian: [0, 2, 4, 5, 7, 9, 10]
};

export function getChordTones(chord) {
    // "Cmaj7", "Dm7", "G7" 등 코드 구성음 반환
    // 나중에 rule-based.js와 함께 확장
    return [];
}

export function getScaleNotes(key, scaleType = "major") {
    // 키와 스케일에 따른 음계 반환
    return [];
}