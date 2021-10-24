import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import appconfig from 'config';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(appconfig.app.timeZone);

export const formatDate = (
  date,
  format = 'YYYY-MM-DD hh:mm:ss A',
  tz = appconfig.app.timeZone
) => {
  return dayjs(date).tz(tz).format(format);
};

export const formatToUTC = (date) => {
  return dayjs.utc(date).format();
};

export const formatFromNow = (date, tz = appconfig.app.timeZone) => {
  return dayjs(date).tz(tz).fromNow();
};
