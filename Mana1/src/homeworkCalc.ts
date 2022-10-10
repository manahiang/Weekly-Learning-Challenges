

import commander, { Command } from 'commander';
const program = new Command();

function myParseInt(value: string, dummyPrevious: any) {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('please input the number');
  }
  return parsedValue;
}

const main2 = () => {
  const program = new Command();


program
  .name('ts-cal')
  .description('CLI to calculate two numbers')
  .version('0.1.0');
program

program
  .command('add')
  .argument('<first>', 'integer argument', myParseInt)
  .argument('[second]', 'integer argument', myParseInt)
  
  .action((first:number, second:number) => {
    console.log(`${first} + ${second} = ${first + second}`);
  

  })
;

program
  .command('sub')
  .argument('<first>', 'integer argument', myParseInt)
  .argument('[second]', 'integer argument', myParseInt, 1000)
  .action((first, second) => {
    console.log(`${first} - ${second} = ${first - second}`);
  })
;

program
  .command('mul')
  .argument('<first>', 'integer argument', myParseInt)
  .argument('[second]', 'integer argument', myParseInt, 1000)
  .action((first, second) => {
    console.log(`${first} * ${second} = ${first * second}`);
  })
;
program
  .command('div')
  .argument('<first>', 'integer argument', myParseInt)
  .argument('[second]', 'integer argument', myParseInt, 1000)
  .action((first, second) => {
    console.log(`${first} / ${second} = ${first / second}`);
  });
  program.parse();
}

main2()


