import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type : mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    autor: { type: String},
    paginas: {type: Number},
    preco: {type: Number}
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;