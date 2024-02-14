import { Client, Databases } from 'node-appwrite';
import 'dotenv/config';
const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_KEY);
export function databases() {
    return new Databases(client)
}