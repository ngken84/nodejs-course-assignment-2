"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const user_1 = __importDefault(require("./routes/user"));
const path_2 = __importDefault(require("./util/path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(user_1.default);
app.get('/', (req, res, next) => {
    res.sendFile(path_1.default.join(path_2.default, 'views', 'home.html'));
});
app.listen(3000);
