import Contact from "../../db/contact";
import pkg from "mongoose";
const { Types } = pkg;

export default async function getStatisticsContacts(id) {
  const data = await Contact.aggregate([
    { $match: { owner: Types.ObjectId(id) } },
    {
      $group: {
        _id: "qweqwe",
        totalAge: { $sum: "$age" },
        minAge: { $min: "$age" },
        maxAge: { $max: "$age" },
        avgAge: { $avg: "$age" },
      },
    },
  ]);
  return data;
}
