import Contact from "../../db/contact";

export default async function addContact(body) {
  const result = await Contact.create(body);
  return result;
}
