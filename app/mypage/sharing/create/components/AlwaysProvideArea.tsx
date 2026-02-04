import { PeriodSelect } from "./PeriodSelect";
import { DayTimeSelect } from "./DayTimeSelect";

export function AlwaysProvideArea({
  period,
  selectedDays,
  selectedTimes,
  onPeriodChange,
  onDayToggle,
  onTimeToggle,
}: {
  period: string | null;
  selectedDays: string[];
  selectedTimes: string[];
  onPeriodChange: (value: string | null) => void;
  onDayToggle: (day: string) => void;
  onTimeToggle: (time: string) => void;
}) {
  return (
    <>
      <PeriodSelect period={period} onPeriodChange={onPeriodChange} />
      <DayTimeSelect
        selectedDays={selectedDays}
        selectedTimes={selectedTimes}
        onDayToggle={onDayToggle}
        onTimeToggle={onTimeToggle}
      />
    </>
  );
}
