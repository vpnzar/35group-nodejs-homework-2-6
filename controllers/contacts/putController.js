import model from "../../models/contacts/index";
import { HttpCode } from "../../lib/constants";

export const putContact = async (req, res, next) => {
  const { id: userId } = req.user;
  const { id } = req.params;
  const contact = await model.updateContact(userId, id, req.body);
  if (contact) {
    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.OK,
      data: { contact },
    });
  }

  res.status(HttpCode.NOT_FOUND).json({ message: "Not found" });
};
