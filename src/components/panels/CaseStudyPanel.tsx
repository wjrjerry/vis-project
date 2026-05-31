import { BookOpen } from "lucide-react";
import type { YearRange } from "../../types/domain";

type CaseStudyPanelProps = {
  onSelectWar: (warId: string | null) => void;
  onYearRangeChange: (range: YearRange) => void;
};

export function CaseStudyPanel({ onSelectWar, onYearRangeChange }: CaseStudyPanelProps) {
  return (
    <section className="side-panel">
      <div className="section-heading">
        <BookOpen size={18} />
        <h2>Case Study</h2>
      </div>
      <div className="case-study-list">
        <button
          type="button"
          onClick={() => {
            onSelectWar("world-war-i");
            onYearRangeChange([1914, 1918]);
          }}
        >
          <strong>World War I</strong>
          <span>Inspect HCED events around the 1914-1918 global conflict window.</span>
        </button>
        <button
          type="button"
          onClick={() => {
            onSelectWar("world-war-ii");
            onYearRangeChange([1939, 1945]);
          }}
        >
          <strong>World War II</strong>
          <span>Trace global event points over 1939-1945 with historical country boundaries.</span>
        </button>
      </div>
    </section>
  );
}
