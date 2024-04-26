//#region format DateTime
const DEFAULT_DATE_FORMAT = 'DD MMM YYYY';
const DEFAULT_DATE_FORMAT_LINE = 'DD/MM/YYYY';
const DEFAULT_DATE_FORMAT_7D = 'ddd MM/DD/YYYY';
const DEFAULT_TIME_FORMAT = 'hh:mm a';
const DEFAULT_TIME_FORMAT_24H = 'HH:mm';
const DEFAULT_DATE_MONTH_FORMAT = 'MM/DD';
const DEFAULT_DATE_TIME_SERVER = 'YYYY-MM-DD H:mm:ss';
const DEFAULT_DATE_SERVER = 'YYYY-MM-DD';
const DEFAULT_DATE_TIME_FORMAT = `${DEFAULT_DATE_FORMAT}, ${DEFAULT_TIME_FORMAT}`;
const DEFAULT_DATE_TIME_FORMAT_7D = `${DEFAULT_DATE_FORMAT_7D}, ${DEFAULT_TIME_FORMAT}`;
const DEFAULT_DAY_MONTH_YEAR = 'ddd, MMM DD YYYY';
const DEFAULT_TIME_MINUTE = 'hh:mm:ss';
const DEFAULT_MONTH_DATE_YEAR = 'MMM DD, YYYY';
const DEFAULT_MONTH_DATE = 'MMM DD';
//#endregion format DateTime

/* The `DateTime` object is a collection of constants that define different date and time formats. Each
constant represents a specific format that can be used to format date and time values. */
export const DateTime = {
  DateTime: DEFAULT_DATE_TIME_FORMAT,
  Date: DEFAULT_DATE_FORMAT,
  DateLine: DEFAULT_DATE_FORMAT_LINE,
  Date_7D: DEFAULT_DATE_FORMAT_7D,
  Time: DEFAULT_TIME_FORMAT,
  Time_24H: DEFAULT_TIME_FORMAT_24H,
  DateTime_7D: DEFAULT_DATE_TIME_FORMAT_7D,
  DateTimeServer: DEFAULT_DATE_TIME_SERVER,
  DateServer: DEFAULT_DATE_SERVER,
  DayMonthYear: DEFAULT_DAY_MONTH_YEAR,
  TimeMinute: DEFAULT_TIME_MINUTE,
  MonthDay: DEFAULT_DATE_MONTH_FORMAT,
  MonthDateYear: DEFAULT_MONTH_DATE_YEAR,
  MonthDate: DEFAULT_MONTH_DATE,
};
