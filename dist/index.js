"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router = express_1.default.Router();
router.get('/', (req, res) => {
    return res.send('Hello world.');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
exports.default = router;
//# sourceMappingURL=index.js.map