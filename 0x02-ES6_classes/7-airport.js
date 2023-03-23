export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') { throw new Error(); }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

// const airportSF = new Airport('San Francisco Airport', 'SFO');
// console.log(airportSF);
// console.log(airportSF.toString());
