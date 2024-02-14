
import { Client, Databases } from 'node-appwrite';
import 'dotenv/config';



// This is your Appwrite function
// It's executed each time we get a request

export default async ({ req, res, log, error, context }) => {
  // Why not try the Appwrite SDK?
  //
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_KEY);
    const databases = new Databases(client);

  // You can log messages to the console
  log('Hello, Logsxxx!');
  try {
    await databases.list()
  } catch (e) {
    error(e.message)
  }

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
