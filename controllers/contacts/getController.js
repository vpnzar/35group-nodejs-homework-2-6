import model from "../../models/contacts/index";
import { HttpCode } from "../../lib/constants";

export const getContactList = async (req, res, next) => {
  const { id: userId } = req.user;
  const contacts = await model.listContacts(userId, req.query);
  res
    .status(HttpCode.OK)
    .json({ status: "success", code: HttpCode.OK, data: { ...contacts } });
};
