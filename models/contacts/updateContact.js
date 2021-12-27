import Contact from "../../db/contact";

export default async function updateContact(contactId, body) {
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { ...body },
    { new: true }
  );
  return result;
}
