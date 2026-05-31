import { Crosshair, Database, Timer } from "lucide-react";
import type { YearRange } from "../../types/domain";

type AppHeaderProps = {
  totalBattles: number;
  filteredBattles: number;
  yearRange: YearRange;
};

export function AppHeader({ totalBattles, filteredBattles, yearRange }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">BattleMap</p>
        <h1>全球军事冲突事件时空可视分析系统</h1>
        <p className="header-copy">
          使用 HCED 军事冲突事件点与 CShapes 2.0 历史边界，联动地图、时间轴、参战方网络、统计和详情。
        </p>
      </div>
      <div className="header-metrics" aria-label="Project summary">
        <div className="metric-chip">
          <Database size={18} />
          <span>{totalBattles} HCED events</span>
        </div>
        <div className="metric-chip">
          <Crosshair size={18} />
          <span>{filteredBattles} visible</span>
        </div>
        <div className="metric-chip">
          <Timer size={18} />
          <span>
            {yearRange[0]}-{yearRange[1]}
          </span>
        </div>
      </div>
    </header>
  );
}
