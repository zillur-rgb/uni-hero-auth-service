import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
  try {
    await mongoose.connect(config.db as string);

    app.listen(config.port, () => {
      console.log(`Application is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("error from server: ", error);
  }
}

main();
