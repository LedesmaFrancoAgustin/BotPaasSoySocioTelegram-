import mongoose from "mongoose";

const interestedUserSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "accountsChatId",
    required: true,
  },
  sector: { type: [String], required: true, default: [] }, // Ahora es un array de strings
});

const matchSchema = new mongoose.Schema({
  vs: { type: String, required: true },
  date: { type: Date, required: true },
  competition: { type: String, required: true },
  enabled: { type: Boolean, default: true },
  interestedUsers: { type: [interestedUserSchema], default: [] }, // Ahora es un array de objetos
});

const Match = mongoose.model("matches", matchSchema);
export default Match;
