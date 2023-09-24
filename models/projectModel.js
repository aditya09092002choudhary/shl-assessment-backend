const mongoose = require('mongoose');

// Define a schema and model for your MongoDB collection
const projectSchema = new mongoose.Schema({
    projectTitle: String,
    projectTech: String,
    frontendTechSkills: String,
    backendTechSkills: String,
    databaseTechSkills: String,
    infraTechSkills: String
  
  });

  module.exports = mongoose.model('Project', projectSchema);