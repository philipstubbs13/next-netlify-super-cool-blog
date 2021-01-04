/* eslint-disable no-unused-vars */
// @ts-nocheck
import { connectToDatabase } from '@utils/mongodb';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req, res) => {
    const { db } = await connectToDatabase();

    const messages = await db
        .collection('messages')
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    res.json(messages);
});

handler.post(async (req, res) => {
    const { db } = await connectToDatabase();
    let data = req.body;

    data = JSON.parse(data);
    data.date = new Date();

    let doc = await db
        .collection('messages')
        .updateOne({ date: new Date(data.date) }, { $set: data }, { upsert: true });

    res.json({ message: 'ok' });
});

export default handler;
