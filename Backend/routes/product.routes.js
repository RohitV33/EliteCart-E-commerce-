import { adminAuth } from "../middleware/adminAuth.js";

router.post("/", adminAuth, addProduct);
router.put("/:id", adminAuth, updateProduct);
router.delete("/:id", adminAuth, deleteProduct);