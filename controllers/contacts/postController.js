import model from "../../models/contacts/index";
import { HttpCode } from "../../lib/constants";

export const postContact = async (req, res, next) => {
  const { id: userId } = req.user;
  const newContact = await model.addContact(userId, req.body);
  res.status(HttpCode.CREATED).json({
    status: "success",
    code: HttpCode.CREATED,
    data: { contact: newContact },
  });
};
