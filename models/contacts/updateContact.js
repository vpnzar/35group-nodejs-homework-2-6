import Contact from "../../db/contact";

export default async function updateContact(userId, contactId, body) {
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner: userId },
    { ...body },
    { new: true }
  );
  return result;
}
