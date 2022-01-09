import Contact from "../../db/contact";

export default async function addContact(userId, body) {
  const result = await Contact.create({ ...body, owner: userId });
  return result;
}
