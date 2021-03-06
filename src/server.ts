import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import createApp from './App';
import dotenv from 'dotenv';
dotenv.config();

const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;
console.log('----------------------------');
console.log(`Number of cores available: ${CONCURRENCY}`);
console.log('----------------------------');

console.log('----------------------------');
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
console.log('----------------------------');

if (process.env.NODE_ENV === 'production') {
  console.log('----------------------------');
  console.log('ENV VARIABLES');
  console.log(process.env);
  console.log('----------------------------');
}

const app = createApp(express());

const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log(`Magic happening on port ${port}`);
});
