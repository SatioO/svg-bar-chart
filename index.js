function getPercentage(percentFor,percentOf) {
  return Math.floor(percentFor/percentOf*100);
}

function handleBar(selector, value, text) {
  const el = document.getElementById(selector);
  el.setAttribute("width", value);

  const elSupportText = document.getElementById(`${selector}-text-support`);
  elSupportText.setAttribute("x", value + 5);
  elSupportText.innerHTML = `$${text}`;

  const elText = document.getElementById(`${selector}-text`);
  const currentVal = value / 320 * 100;

  if(currentVal < 50) {
    elText.setAttribute("fill", "#333");
    elText.setAttribute("x", value + 5);
    var bbox = elText.getBBox();
    elSupportText.setAttribute("x", value + bbox.width + 10)
  }
}

function handleBarColor(selector, currentValue, goalValue) {
  const el = document.getElementById(selector);
  if(currentValue > goalValue) {
    el.setAttribute("fill", "green");
  }
}

function calculate(value) {
  const result = value * 320 / 100;
  return result <= 320 ? result : 320;
}

function init(args) {
  const final = getPercentage(args.final, args.final);
  const current = getPercentage(args.current, args.final);
  const goal = getPercentage(args.goal, args.final);
  const end = getPercentage(args.end, args.final);

  const finalValue = calculate(final);
  handleBar("first", finalValue, final);

  const goalValue = calculate(goal);
  handleBar("second", goalValue, goal);

  const currentValue = calculate(current);
  handleBar("third", currentValue, current);
  handleBarColor("third", currentValue, goalValue)

  const endValue = calculate(end);
  handleBar("fourth", endValue, end);
}

const values = {
  final: 1000,
  goal: 80,
  current: 90,
  end: 70
}

init(values)

