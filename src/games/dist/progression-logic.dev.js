/* eslint-disable no-func-assign */

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj
                && typeof Symbol === 'function'
                && obj.constructor === Symbol
                && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const index = _interopRequireWildcard(require('../index.js'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  const cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null
        || (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  const cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  const newObj = {};
  const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

const condition = function condition() {
  console.log('What number is missing in the progression?');
};

const funcArraySucession = function funcArraySucession() {
  const numberArray = [];
  const lengthBetween = Math.floor(Math.random() * 11);
  let number = Math.floor(Math.random() * 101);

  for (let i = 0; i < 10; i++) {
    number += lengthBetween;
    numberArray.push(number);
  }

  return numberArray;
};

const funcRandomNumber = function funcRandomNumber() {
  const randomHiddenNumber = Math.floor(Math.random() * 10);
  return randomHiddenNumber;
};

const funcSuccessionWithHole = function funcSuccessionWithHole(
  array,
  randomNumber,
) {
  array[randomNumber] = '..';
  return array;
};

const questionUser = function questionUser(array) {
  console.log('Question: '.concat(array.join(' ')));
};

const calculateHiddenNumber = function calculateHiddenNumber(
  array,
  randomNumber,
) {
  let answer = array[randomNumber];
  answer = answer.toString();
  return answer;
};

const progressionGame = function progressionGame() {
  const name = index.greeting();
  condition();

  for (let i = 0; i < 3; i++) {
    const randomNumberChoiceHole = funcRandomNumber();
    const arraySucession = funcArraySucession();
    const rightAns = calculateHiddenNumber(
      arraySucession,
      randomNumberChoiceHole,
    );
    const successionWithHole = funcSuccessionWithHole(
      arraySucession,
      randomNumberChoiceHole,
    );
    questionUser(successionWithHole);
    const answerUser = index.answerUser();

    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }

  index.congratulations(name);
};

const _default = progressionGame;
exports.default = _default;
