import clsx from "clsx";
import { Operating } from "@/utils/Operating";

export const OperatingBedge = ({
  openTime,
  closeTime,
}: {
  openTime: string;
  closeTime: string;
}) => {
  const status = Operating({ openTime: openTime, closeTime: closeTime });

  // 자정 안 넘김
  if (status.openMinutes < status.closeMinutes) {
    return (
      <span
        className={clsx(
          "shrink-0 text-xs",
          status.midnightStatus === "영업중" ? "text-main" : "text-danger"
        )}
      >
        {status.midnightStatus}
      </span>
    );
  }

  return (
    <span
      className={clsx("shrink-0 text-xs", status.status === "영업중" ? "text-main" : "text-danger")}
    >
      {status.status}
    </span>
  );
};
