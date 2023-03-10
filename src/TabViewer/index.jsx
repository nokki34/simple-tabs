import { processLyrics } from "../tabs-process";
import "./styles.css";

const LyricsWithChords = ({ chords, lyrics }) => {
  return (
    <>
      <p>{chords}</p>
      <p>{lyrics}</p>
    </>
  );
};

const TabViewer = ({ input }) => {
  return (
    <pre className="TabViewer">
      {processLyrics(input).map(([сhords, lyrics], idx) => (
        <LyricsWithChords key={`line-${idx}`} lyrics={lyrics} chords={сhords} />
      ))}
    </pre>
  );
};

export { TabViewer };
