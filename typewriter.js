const sentence = "hello there from lighthouse labs";
// const sentence = 'hello';
let time = 0;

for (const char of sentence) {
  setTimeout(() => process.stdout.write((char)), time);
  time += 100;
}

setTimeout(() => process.stdout.write('\n'), time);



