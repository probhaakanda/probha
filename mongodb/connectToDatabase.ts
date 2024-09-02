// lib/mongodb/connectToDatabase.ts

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export function connectToDatabase() {
  return client.connect().then((client) => {
    return client.db('probhaDB');
  });
}
