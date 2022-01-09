import model from "../../models/contacts/index";
import { HttpCode } from "../../lib/constants";

export const aggregation = async (req, res, next) => {
  const { id } = req.params;
  const data = await model.getStatisticsContacts(id);
  if (data) {
    return res
      .status(HttpCode.OK)
      .json({ status: "success", code: HttpCode.OK, data });
  }

  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: "error", code: HttpCode.NOT_FOUND, message: "Not found" });
};
