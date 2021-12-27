import model from "../../models/contacts/index";
import { HttpCode } from "../../lib/constants";

export const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const contact = await model.getContactById(id);
  if (contact) {
    return res
      .status(HttpCode.OK)
      .json({ status: "success", code: HttpCode.OK, data: { contact } });
  }

  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: "error", code: HttpCode.NOT_FOUND, message: "Not found" });
};
