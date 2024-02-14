
import { databases } from './utils/awClient.js';

// This is your Appwrite function
// It's executed each time we get a request

export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  
  try {
    const dbList = await databases.list();
    log('this thing');
  } catch (e) {
    error('db error');
  }

  // You can log messages to the console
  log('Hello, Logsxxx!', process.env.APPWRITE_ENDPOINT);

  // If something goes wrong, log an error
  //error('Hello, Errors!');

  // The `req` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    return res.send('Hello, World!');
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
