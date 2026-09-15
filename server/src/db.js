import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db("codesprint");
const users = db.collection("users");

export async function getUser(email) {
  return users.findOne({
    email: email.trim().toLowerCase(),
  });
}

export async function upsertUser(email, fields) {
  const normalizedEmail = email.trim().toLowerCase();

  await users.updateOne(
    { email: normalizedEmail },
    {
      $set: {
        ...fields,
        email: normalizedEmail,
      },
    },
    { upsert: true }
  );

  return getUser(normalizedEmail);
}

export async function deleteUser(email) {
  await users.deleteOne({
    email: email.trim().toLowerCase(),
  });
}