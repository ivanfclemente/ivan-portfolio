import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Ivan:Painatal!1234@cluster0.btodxpj.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    const result = await meetupsCollections.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}
export default handler;
