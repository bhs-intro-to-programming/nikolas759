// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.
const itemsLeftOver = (numberOfPeople, numberOfItems) => {
  return numberOfItems
}
const areaOfCircle = (radiusOfCircle) => {
  return Math.PI  * radiusOfCircle
}


const volumeOfCube = (lenght) => {
  return lenght * 3
}

const populationGrowth = (currentSize, GrowthRate) => {
  return currentSize * GrowthRate;
};

const earnedRunAverage = (numberOfEarnedRuns, numberOfInnings) => {
  return (numberOfEarnedRuns + numberOfInnings) / 2 * 9;
}

const payWithOvertime = (numberOfHours, hourlyRate, overTimeRate) => {
  return (hourlyRate * numberOfHours) + overTimeRate;
}

const firstClassPostage = (weightOfLetter) => {
  return 60 + Math.ceil(1,2) + 24;
};

const weightOnJupiter = (weightOfPersonOnEarth) => {
  return JUPITER_GRAVITY / EARTH_GRAVITY
};