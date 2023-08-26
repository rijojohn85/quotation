import { InferSchemaType, model, Schema } from "mongoose";

const customerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  displayName: { type: String, required: true, unique: true },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  phone: { type: String },
  primaryEmail: { type: String },
  GST: { type: String },
});

type Customer = InferSchemaType<typeof customerSchema>;
export default model<Customer>("Customer", customerSchema);
