function dayOfProgrammer(year) {
  // Write your code here
  let Cal = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    July: 31,
    Aug: 31,
  };
  let value = 0;

  if (year < 1700 || year > 2700) {
    return;
  } else if (year === 1918) {
    Cal.Feb = 15;
  } else if (year <= 1917 && year % 4 === 0) {
    Cal.Feb = 29;
  } else if (
    year > 1918 &&
    (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
  ) {
    Cal.Feb = 29;
  }

  value +=
    256 -
    (Cal.Jan +
      Cal.Feb +
      Cal.Mar +
      Cal.Apr +
      Cal.May +
      Cal.Jun +
      Cal.July +
      Cal.Aug);

  return `${value}.09.${year}`;
}

console.log(dayOfProgrammer(1800));
