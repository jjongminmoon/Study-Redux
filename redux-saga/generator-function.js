function* generatorFunction(num) {
  yield num;
  yield num + 10;
}

const generatorObject = generatorFunction(10);

console.log(generatorObject.next().value); // 출력 결과 : 10
console.log(generatorObject.next().value); // 출력 결과 : 20
