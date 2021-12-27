import Contact from "../../db/contact";

export default async function getContactById(contactId) {
  const result = await Contact.findById(contactId);
  return result;
}
