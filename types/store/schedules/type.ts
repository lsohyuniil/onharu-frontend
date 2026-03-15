// type/ScheduleType.ts

export interface DailyScheduleDetail {
  id: number;
  storeId: number;
  scheduleDate: string;
  startTime: string;
  endTime: string;
  maxPeople: number;
  isAvailable: boolean;
}

export interface MonthlySummary {
  date: string;
  availableSlots: number;
  dailyScheduleDetails: DailyScheduleDetail[];
}

export interface ScheduleApiResponse {
  success: boolean;
  data: {
    monthlySummaries: MonthlySummary[];
    dailyDetails: DailyScheduleDetail[];
  };
}
