import model from "../../models/contacts/index";
import { HttpCode } from "../../lib/constants";

export const postContact = async (req, res, next) => {
  const newContact = await model.addContact(req.body);
  res.status(HttpCode.CREATED).json({
    status: "success",
    code: HttpCode.CREATED,
    data: { contact: newContact },
  });
};
