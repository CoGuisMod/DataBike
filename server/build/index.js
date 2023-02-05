"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Imports */
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
/* Configuration */
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
/* Routes */
/* Server port */
const PORT = process.env.PORT || 9000;
/* Mongoose */
/* mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
  
}); */
app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`);
});
