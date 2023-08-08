const collegeData = require('./modules/collegeData');

async function testSequelize() {
  try {
    // Initialize the database connection
    await collegeData.initialize();

    // Test queries or other operations
    const students = await collegeData.getAllStudents();
    console.log('All students:', students);

    const courses = await collegeData.getCourses();
    console.log('All courses:', courses);

    const courseById = await collegeData.getCourseById(1);
    console.log('Course by ID (1):', courseById);


  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSequelize();
