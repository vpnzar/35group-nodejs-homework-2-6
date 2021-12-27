import Contact from "../../db/contact";

export default async function removeContact(contactId) {
  const result = await Contact.findByIdAndRemove(contactId);
  return result;
}
