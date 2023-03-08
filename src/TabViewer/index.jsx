import { processLyrics } from "../tabs-process";

const LyricsWithChords = ([chords, lyrics]) => {
  return (
    <>
      <p>{chords}</p>
      <p>{lyrics}</p>
    </>
  );
};

const TabViewer = ({ input }) => {
  return (
    <pre className="output">{processLyrics(input).map(LyricsWithChords)}</pre>
  );
};

export { TabViewer };
