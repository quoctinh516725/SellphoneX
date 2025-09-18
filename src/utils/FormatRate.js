export default function (rate) {
  if (Number.isInteger(rate)) {
    return rate.toFixed(1);
  }
  return rate.toString();
}
