import Contact from "../../db/contact";

export default async function removeContact(userId, contactId) {
  const result = await Contact.findOneAndRemove({
    _id: contactId,
    owner: userId,
  });
  return result;
}
