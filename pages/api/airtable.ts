import { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable'; // Import Airtable

// Initialize Airtable
const base = new Airtable({ apiKey: "pat0xfvDBEgArxxcA.298eb0429f8089be1ac3e7fc78e6fc63cfc87d5dccbcc322fea046b9d5805359" }).base(
    'apphBFYesxq4qk0Cc'
);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const records = await base('New Events')
            .select({ view: 'Grid view' })
            .all();

        const data = records.map((record) => ({
            id: record.id,
            fields: record.fields,
        }));

        req.method === 'GET'
            ? res.status(200).json(data)
            : res.status(405).json({ msg: 'Method not allowed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    } finally {
        res.end();
    }
}