import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  idsPrivilege: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Privilege",
      required: true,
    },
  ],
});

const Role = mongoose.model("Role", roleSchema);

export default Role;
