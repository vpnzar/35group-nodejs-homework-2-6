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

const router = new Router();

router.get("/", validateQuery, getContactList);
router.get("/:id", validateId, getContactById);
router.post("/", validateCreate, postContact);
router.delete("/:id", validateId, deleteContact);
router.put("/:id", validateId, validateUpdate, putContact);
router.patch("/:id/favorite", validateId, validateUpdateFavorite, patchContact);

export default router;
