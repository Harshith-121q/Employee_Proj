import exp from "express";
import { connect } from "mongoose";
import { EmpApi } from "./Api/EmployeeApi.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// middleware
app.use(cors({
    origin: "*"
}));

app.use(exp.json());
app.use("/emp-api", EmpApi);

// connect to database
async function connectDB() {
    try {
        await connect(process.env.MONGO_URI);
        console.log("DB connection Successful");

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Server on port ${PORT}`));

    } catch (err) {
        console.log(err);
    }
}

connectDB();

// error handling middleware
app.use((err, req, res, next) => {
    if (err.name == "ValidationError") {
        return res.status(400).json({ message: "error occured", err });
    }

    if (err.name == "CastError") {
        return res.status(400).json({ message: "error occured", err });
    }

    res.status(500).json({ message: "error occured", err });
});
