import Contact from "../../db/contact";

export default async function getContactById(userId, contactId) {
  const result = await Contact.findOne({
    _id: contactId,
    owner: userId,
  }).populate({
    path: "owner",
    select: "name email age role",
  });
  return result;
}
