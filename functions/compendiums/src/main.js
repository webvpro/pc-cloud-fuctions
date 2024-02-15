
import { Account, Client, Databases, Storage, Users, ID } from 'node-appwrite';
import 'dotenv/config';



// This is your Appwrite function
// It's executed each time we get a request

export default async ({ req, res, log, error, context }) => {
  // Why not try the Appwrite SDK?
  //
  const client = new Client().setEndpoint(process.env.APPWRITE_ENDPOINT).setProject(process.env.APPWRITE_PROJECT_ID).setKey(process.env.APPWRITE_KEY) 
    const databases = new Databases(client);
    const storage = new Storage(client);
    const account = new Account(client);
    const users = new Users(client);
    try {
      const user = await users.get(req.headers['x-appwrite-user-id'])
      log('Have User'+ JSON.stringify(user['$id']))
    } catch (e) {
      error("user-error" + JSON.stringify(e.message))
      return res.json(e.message);
    }
   
  
  // The `req` object contains the request data

  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    try {
     const dbList = await databases.list()
    
      return res.json(dbList);
    } catch (e) {
      
      return res.json({'error': e.message})
    }
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
