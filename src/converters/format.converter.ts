import moment from "moment/moment";

export const getTimeByDuration = (duration: string) => {
  const dur = moment.duration(duration);
  if (dur.hours()) {
    return moment.utc(dur.as("milliseconds")).format("h:mm:ss");
  }
  return moment.utc(dur.as("milliseconds")).format("m:ss");
};
