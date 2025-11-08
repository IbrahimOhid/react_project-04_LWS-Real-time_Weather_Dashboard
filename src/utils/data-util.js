export const getFormattedData = (type, value, inMS) => {
  if (!type) return value;
  if (!inMS) {
    value = value * 1000;
  }
  const date = new Date(value);
  let options;
  if (type === "date") {
    options = {
      weekDay: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  } else {
    return date.toString();
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
};

