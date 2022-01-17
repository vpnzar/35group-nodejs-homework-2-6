/* eslint-disable no-unused-vars */
import model from "../../models/contacts/index";
import { HttpCode } from "../../lib/constants";
import {
  UploadFileService,
  LocalFileService,
  CloudFileService,
} from "../../service/file-storage";

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

export const uploadAvatar = async (req, res, next) => {
  const uploadService = new UploadFileService(
    LocalFileService,
    req.file,
    req.user
  );

  const avatarUrl = await uploadService.updateAvatar();

  res
    .status(HttpCode.OK)
    .json({ status: "success", code: HttpCode.OK, data: { avatarUrl } });
};
