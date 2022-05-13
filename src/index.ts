import BandBusiness from "./business/BandBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import BandController from "./controller/BandController";
import UserController from "./controller/UserController";
import BandData from "./data/BandData";
import UserData from "./data/UserData";

const userBusiness = new UserBusiness(
    new UserData()
)

const userController = new UserController(
    userBusiness
)

const bandBusiness = new BandBusiness(
    new BandData()
)

const bandController = new BandController(
    bandBusiness
)



app.post("/user/signup", userController.signup)
app.post("/login", userController.login)

app.post("/band/signup", bandController.signup)
