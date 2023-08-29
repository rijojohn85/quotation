import { InferSchemaType, model, Schema } from 'mongoose';

export interface Size {
	width: number;
	height: number;
}
const quotationSchema = new Schema({
	quotationNumber: {
		type: String,
		required: true,
		unique: true
	},
	customer: {
		type: Schema.Types.ObjectId,
		ref: 'Customer',
		required: true
	},
	size: {
		type: { width: Number, height: Number },
		required: true
	},
	textColourPages: {
		type: Number,
		required: true
	},
	bwPages: {
		type: Number,
		required: true
	},
	coverPages: {
		type: Number,
		required: true
	},
	binding: {
		type: String,
		required: true
	},
	lamination: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	colourTextPaperType: {
		type: String,
		required: true
	},
	colourPaperGSM: {
		type: Number,
		required: true
	},
	bwPaperType: {
		type: String,
		required: true
	},
	bwPaperGSM: {
		type: Number,
		required: true
	},
	coverPaperType: {
		type: String,
		required: true
	},
	coverPaperGSM: {
		type: Number,
		required: true
	},
	coverSheetSize: {
		type: String
	}
});

type Quotation = InferSchemaType<typeof quotationSchema>;
export default model<Quotation>('Quotation', quotationSchema);
