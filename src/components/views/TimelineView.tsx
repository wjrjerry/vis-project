import { BarChart3 } from "lucide-react";
import type { Battle, YearRange } from "../../types/domain";

type TimelineViewProps = {
  battles: Battle[];
  selectedBattleId: string | null;
  allYearRange: YearRange;
  selectedYearRange: YearRange;
  currentYear: number;
  onSelectBattle: (battleId: string) => void;
  onCurrentYearChange: (year: number) => void;
};

export function TimelineView({
  battles,
  selectedBattleId,
  allYearRange,
  selectedYearRange,
  currentYear,
  onSelectBattle,
  onCurrentYearChange,
}: TimelineViewProps) {
  const sortedBattles = [...battles].sort((a, b) => a.year - b.year);
  const [absoluteMinYear, absoluteMaxYear] = allYearRange;
  const [minYear, maxYear] = selectedYearRange;

  return (
    <section className="view-panel timeline-panel">
      <div className="section-heading">
        <BarChart3 size={18} />
        <h2>Timeline View</h2>
      </div>
      <div className="timeline-range">
        <span>{minYear}</span>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={currentYear}
          onChange={(event) => onCurrentYearChange(Number(event.target.value))}
          aria-label="Timeline current year"
        />
        <span>{maxYear}</span>
      </div>
      <div className="timeline-current-year" aria-label="Current timeline year">
        {currentYear}
        <small>
          window {absoluteMinYear}-{absoluteMaxYear}
        </small>
      </div>
      {sortedBattles.length === 0 ? (
        <div className="empty-state">The selected time window has no conflict events.</div>
      ) : (
        <div className="timeline-track">
          {sortedBattles.map((battle) => (
            <button
              key={battle.id}
              className={battle.id === selectedBattleId ? "timeline-item active" : "timeline-item"}
              type="button"
              onClick={() => onSelectBattle(battle.id)}
            >
              <span className="timeline-year">{battle.year}</span>
              <span className="timeline-label">{battle.name}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
