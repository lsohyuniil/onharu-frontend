import { RawReservation } from "../type/ReservationType";
import { ScheduleApiResponse, DailyScheduleDetail } from "@/types/store/schedules/type";

export function TransformScheduleData(apiResponse: ScheduleApiResponse): RawReservation[] {
  const summaries = apiResponse?.data?.monthlySummaries;

  if (!Array.isArray(summaries)) return [];

  return summaries.flatMap(summary =>
    summary.dailyScheduleDetails
      .filter((detail: DailyScheduleDetail) => detail.isAvailable)
      .map((detail: DailyScheduleDetail) => ({
        date: summary.date,
        time: detail.startTime.slice(0, 5),
        maxPeople: detail.maxPeople,
      }))
  );
}
