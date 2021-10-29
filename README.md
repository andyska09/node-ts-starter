# An example of typescript program for node

## How to start
### Prerequisites
- Install `node` and `npm`, https://nodejs.org/en/download/
- Check availability of `node` and `npm`:
```shell
> node -v
v16.13.0
> npm -v
8.1.0 
```

```shell
> git clone https://github.com/andyska09/node-ts-starter.git
> cd node-ts-starter
```
- Install project dependencies
```shell
> npm install 
```

To start the program, run:
```shell
> npm run start
```
You shall see in console:
```
> start
> npx ts-node ./app/main.ts

app was started with the following arguments:
  0 - C:\workspace\node-ts-starter\node_modules\.bin\ts-node
  1 - C:\workspace\node-ts-starter\app\main.ts

inputFilename: input.txt
inputContent:
457,15
41,9,90,34,87,45,114,98,3003,155,12,1,0,5,10

lines[0]: 457,15
lines[1]: 41,9,90,34,87,45,114,98,3003,155,12,1,0,5,10

items: 41,9,90,34,87,45,114,98,3003,155,12,1,0,5,10
items[2]: 90

sortedItems: 0,1,5,9,10,12,34,41,45,87,90,98,114,155,3003
sortedItems[2]: 5

outputContent:  0,1,5,9,10,12,34,41,45,87,90,98,114,155,3003
writing into the file ./output.txt
```
Check [main.ts](./app/main.ts)

## Links
- https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d
- https://wanago.io/2019/02/11/node-js-typescript-modules-file-system/