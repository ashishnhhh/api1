const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Api:root@api1.vb2hjwo.mongodb.net/Api?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.log('Error connecting to MongoDB: ', err);
    return;
  }

  const collection = client.db("api1").collection("Api");

  // Call the function to create dependent dropdowns
  collection.find().toArray(function(err, data) {
    if (err) {
      console.log('Error retrieving data from MongoDB: ', err);
      return;
    }
    
    createDropdowns(data);

    client.close();
  });
});
// ```

// Note that you need to replace `<username>`, `<password>`, `<cluster>`, `<database>`, and `<collection>` with the appropriate values for your MongoDB database.

// 3. Here's an example of how to create dependent dropdowns using jQuery:

// ```
function createDropdowns(data) {
  // Extract unique values for District field and store them in an array
  const districts = [...new Set(data.map(d => d.District))];

  // Create the District dropdown
  const districtDropdown = $('<select>').attr('id', 'district-dropdown');
  $('<option>').val('').text('Select District').appendTo(districtDropdown);
  districts.forEach(district => {
    $('<option>').val(district).text(district).appendTo(districtDropdown);
  });

  // Create the College dropdown
  const collegeDropdown = $('<select>').attr('id', 'college-dropdown');
  $('<option>').val('').text('Select College').appendTo(collegeDropdown);

  // Create the CollegeCodeId field
  const collegeCodeIdField = $('<div>').attr('id', 'college-code-id').text('');

  // Append the dropdowns and field to the HTML body
  $('body').append(districtDropdown);
  $('body').append(collegeDropdown);
  $('body').append(collegeCodeIdField);

  // Add event listener to District dropdown
  $('#district-dropdown').on('change', function () {
    const selectedDistrict = $(this).val();

    // Filter data based on selected District and extract unique values for CollegeName field
    const filteredData = data.filter(d => d.District === selectedDistrict);
    const collegeNames = [...new Set(filteredData.map(d => d.CollegeName))];

    // Clear the College and CollegeCodeId fields
    collegeDropdown.empty();
    collegeCodeIdField.text('');

    // Create the options for the College dropdown
    $('<option>').val('').text('Select College').appendTo(collegeDropdown);
    collegeNames.forEach(college => {
      $('<option>').val(college).text(college).appendTo(collegeDropdown);
    });
  });

  // Add event listener to College dropdown
  $('#college-dropdown').on('change', function () {
    const selectedDistrict = $('#district-dropdown').val();
    const selectedCollege = $(this).val();

    // Filter data based on selected District and CollegeName and extract CollegeCodeId
    const filteredData = data.filter(d => d.District === selectedDistrict && d.CollegeName === selectedCollege);
    const collegeCodeId = filteredData[0].CollegeCodeId;

    // Display CollegeCodeId to user
    collegeCodeIdField.text(collegeCodeId);
  });
}