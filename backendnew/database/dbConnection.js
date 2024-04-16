import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
  .connect(process.env.MONGO_URI ,{ dbName: "Mernstack_Event_Message_n" }
    )
    .then(() => {
      console.log('Connected to database');
    })
    .catch(err => {
      console.log('Some error occured while connecting to data base:', err);
    });
};
