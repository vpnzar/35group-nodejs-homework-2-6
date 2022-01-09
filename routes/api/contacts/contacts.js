import { Router } from "express";
import { deleteContact } from "../../../controllers/contacts/deleteController";
import { getContactList } from "../../../controllers/contacts/getController";
import { postContact } from "../../../controllers/contacts/postController";
import { putContact } from "../../../controllers/contacts/putController";
import { patchContact } from "../../../controllers/contacts/patchController";
import { getContactById } from "../../../controllers/contacts/getByIdController";

import {
  validateCreate,
  validateUpdate,
  validateId,
  validateUpdateFavorite,
  validateQuery,
} from "../../../middlewares/validation/contactValidation";
import guard from "../../../middlewares/guard";
const router = new Router();

router.get("/", [guard, validateQuery], getContactList);
router.get("/:id", [guard, validateId], getContactById);
router.post("/", [guard, validateCreate], postContact);
router.delete("/:id", [guard, validateId], deleteContact);
router.put("/:id", [guard, validateId, validateUpdate], putContact);
router.patch(
  "/:id/favorite",
  [guard, validateId, validateUpdateFavorite],
  patchContact
);

export default router;
