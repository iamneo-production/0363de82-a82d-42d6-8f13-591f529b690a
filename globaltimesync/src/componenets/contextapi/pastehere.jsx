var moment = require('moment-timezone');
var timeZones = moment.tz.names();
var output = timeZones.map((timezone, index) => {
  return {
    id: index,
    name: timezone.split('/')[1],
    timezone: timezone
  };
});
console.log(output);
