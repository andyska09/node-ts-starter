import * as fs from 'fs';

function init() {
    const inputFilename: string = process.argv.length > 2
        ? process.argv[2]
        : 'input.txt';
    console.log('\n inputFilename: ' + inputFilename);

    const inputContent: string = fs.readFileSync(inputFilename, { encoding: 'utf8' });
    console.log(`inputContent:\n${inputContent}\n`);

    const lines: string[] = inputContent.split('\n');
    console.log(`lines[0]: ${lines[0]}`);
    console.log('lines[1]: ' + lines[1] + '\n');

    const items: number[] = lines[1].split(',').map(Number);
    console.log(`items: ${items}`);
    console.log(`items[2]: ${items[2]}\n`);
    return items;
}

console.log('app was started with the following arguments:');
process.argv.forEach((argument, i) => {
    console.log(`  ${i} - ${argument}`);
});

let items = init();
let sortedItems = items.sort((i1, i2) => {
    if (i1 > i2) {
        return 1;
    } else if (i1 < i2) {
        return -1;
    }
    return 0;
});

console.log(`sorted items: ${sortedItems}`);
console.log(`sortedItems[2]: ${sortedItems[2]}\n`);

const outputContent: string = sortedItems.join();
console.log('outputContent: ', outputContent);
console.log('writing into the file ./output.txt');
fs.writeFileSync('./output.txt', outputContent, { encoding: 'utf8' });