
function playMelody() {
    if (notes.length > 0) {
      note = notes.pop();
      playNote(note[0], 1000 * 256 / (note[1] * tempo));
    }
  }
  

notes = [
    [659, 4],
    [659, 4],
    [659, 4],
    [523, 8],
    [0, 16],
    [783, 16],
    [659, 4],
    [523, 8],
    [0, 16],
    [783, 16],
    [659, 4],
    [0, 4],
    [987, 4],
    [987, 4],
    [987, 4],
    [1046, 8],
    [0, 16],
    [783, 16],
    [622, 4],
    [523, 8],
    [0, 16],
    [783, 16],
    [659, 4]
  ];
  
  notes.reverse();
  tempo = 100;
  