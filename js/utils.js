// 공통 유틸리티
export function noteToMidi(note) {
    // "C4", "Bb3" 등을 MIDI 번호로 변환
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const octave = parseInt(note.slice(-1));
    const pitch = notes.indexOf(note.slice(0, -1).replace('♭', 'b'));
    return octave * 12 + pitch + 12;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}