const mongoose = require("mongoose");
const QuestionSchema = mongoose.Schema({

  pergunta: String,
  alternativas: [String],
  alternativa_correta: Number,

});
module.exports = mongoose.model("Question", QuestionSchema);