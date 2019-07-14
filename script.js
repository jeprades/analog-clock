function setClock() {
  const HOURSHAND = document.querySelector("#hour");
  const MINUTESHAND = document.querySelector("#minute");
  const SECONDSHAND = document.querySelector("#second");

  // Get hours, minutes and seconds and transform all of them in seconds
  let date = new Date(); // Get the current date
  let getHour = date.getHours(); //Get the current hour in 24 hour format
  let hours = getHour > 12 ? getHour - 12 : getHour; // Transform the hour in 12 hour format for analogy clock
  let minutes = date.getMinutes(); // Get minutes
  let seconds = date.getSeconds();

  /* Convert hours, minutes and seconds to degrees.
    Consts have been created to make the code more understandable*/
  const HOURSTODEGREES = 360 / 12;
  const MINUTESTODEGREES = 360 / 60;
  const SECONDSTODEGREES = 360 / 60;
  const MINUTESTOHOURS = 1 / 60;
  const SECONDSTOMINUTES = 1 / 60;

  let hoursDegreesPosition =
    (hours + minutes * MINUTESTOHOURS) * HOURSTODEGREES; // Add hours and minutes to have a float number and convert to degrees
  let minutesDegreesPosition =
    (minutes + seconds * SECONDSTOMINUTES) * MINUTESTODEGREES; // Add minutes and seconds together to create a float number and convert to degrees
  let secondsDegreesPosition = seconds * SECONDSTODEGREES;

  // Adding the style transform to make the elements rotate with the exact degree position
  HOURSHAND.style.transform = "rotate(" + hoursDegreesPosition + "deg)";
  MINUTESHAND.style.transform = "rotate(" + minutesDegreesPosition + "deg)";
  SECONDSHAND.style.transform = "rotate(" + secondsDegreesPosition + "deg)";

  return date.toLocaleTimeString();
}
var intervalAnalogClock = setInterval(setClock, 1000); // Call the function every second.


