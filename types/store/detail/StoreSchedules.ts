//store 예약 현황

export type StoreSchedules = {
  id: number;
  storeId: number;
  scheduleDate: string;
  startTime: string;
  endTime: string;
  maxPeople: number;
  isAvailable: boolean;
};
