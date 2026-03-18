const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB");

        const fetched_data = mongoose.connection.db.collection('food_items');

        const data = await fetched_data.find({}).toArray();
        console.log(data);

    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
    }
};

module.exports = mongoDB;