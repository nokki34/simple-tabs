
const SPACE_CHAR = " ";

const processLine = (line) => {
  let chordsLine = "";
  let lyricsLine = "";
  let chords = false;
  let chordsLength = 0;
  for (let char of line) {
    if (char === "[") {
      chords = true;
      continue;
    } else if (char === "]") {
      chords = false;
      continue;
    }

    if (chords) {
      chordsLength += 1;
      chordsLine += char;
    } else {
      if (chordsLength <= 0) {
        chordsLine += SPACE_CHAR;
      }
      chordsLength -= 1;
      lyricsLine += char;
    }
  }
  return [chordsLine, lyricsLine];
};

const processLyrics = (lyrics) => {
  const lines = lyrics.split("\n");
  return lines.map(processLine);
};

export {processLyrics}