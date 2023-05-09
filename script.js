const colleges = [
    {
        "District":"Kolhapur",
        "CollegeName":"Chattrapati Shivaji Maharaja College",
        "CollegeCodeId":"A1"
    },
    {
        "District":"Ahmedabad",
        "CollegeName":"Chattrapati Shivaji Maharaja College",
        "CollegeCodeId":"A2"
    },
    {
        "District":"Jalana",
        "CollegeName":"Chattrapati Shivaji Maharaja College",
        "CollegeCodeId":"A3"
    },
    {
    "District" : "Beed",
    "CollegeName" : "Vaishnavi Mahavidyalaya,Wadwani",
    "CollegeCodeId":"A1081"
    },
    {
    "District" : "Buldhana",
    "CollegeName" : "Arts & Sci. Mahila Mahavidyalaya Mehkar Dist. Buldana",
    "CollegeCodeId":"A1128"
    },
    {
    "District" : "Mumbai",
    "CollegeName" : "G.N.KHALSA COLLEGE OF ARTS, SCIENCE & COMMERE",
    "CollegeCodeId":"A298"
    },
    {
    "District" : "Nagpur",
    "CollegeName" : "Womens College of Commerce & Arts Nandanvan, Nagpur",
    "CollegeCodeId":"A405"
    },
    { 
    "District" : "Pune",
    "CollegeName" : "ILS Law College",
    "CollegeCodeId":"A691"
    },
    {
    "District" : "Raigad",
    "CollegeName" : "VEER WAJEKAR A.S.C. COLLEGE PHUNDE",
    "CollegeCodeId":"A725"
    },
    {
    "District":"Chandrapur",
    "CollegeName": "Y. S. Pawar Arts Mahavidyalaya Neri, Tal- Chimmur,Chandrapur",
    "CollegeCodeId":"NA1896"
    },
    {
    "District":"Chandrapur",
    "CollegeName":"Rajiv Gandhi Art's College Shankarpur",   
    "CollegeCodeId":"NA1899"
    },
    {
    "District":"Chandrapur",
    "CollegeName":" J. K. Mahila Mahavidhyalaya Chimur",
    "CollegeCodeId":" NA1900"
    },
    {
    "District":"Chandrapur",
    "CollegeName":"Shri Shivaji Arts & Comm. College, Vitthalwada",
    "CollegeCodeId":" NA1905"
    },
    {
    "District":"Chandrapur",
    "CollegeName":"vivekanand varishtha mahavidhyalaya, Bembal",
    "CollegeCodeId":" NA1916"
    },
    {
    "District":"Chandrapur",
    "CollegeName":"PRATIBHA MAHAVIDYALAYA,Arts,Comm. & Sci ",
    "CollegeCodeId":" NA1918"
    },
    {
    "District":"Chandrapur",
    "CollegeName":"LOKSHAHI COLLEGE OF EDUCATION NAGBHID",
    "CollegeCodeId":" NA1919"
    },
    {
    "District":"Chandrapur",
    "CollegeName":"Chandrapur Ramchandrarao Dhote Art Comm Sci college Rajura",
    "CollegeCodeId": "NA1925"

    },
    {
    "District":"Chandrapur",
    "CollegeName":"Priyadarshini Mahavidhyalaya Rampur",
    "CollegeCodeId":" NA1927"

    },
    {
    "District":"Chandrapur",
    "CollegeName":"KAMALAI MAHAVIDYALAY, VYAHAD (KHURD)",
    "CollegeCodeId":"NA1931"
    },
    {
    "District":"Chandrapur",
    "CollegeName":"Swa.Laxmibai Mamulkar Mahila Mahavidhyalaya Rajura Dist.- Chandrapur (M.S)",
    "CollegeCodeId":"NA1932"
    },
    {
    "District":"Gondia"  ,	
    "CollegeName":"Swami Vivekanand College, Amgaon",
    "CollegeCodeId":"NA1933"

    },
    {
    "District":"Gondia",
    "CollegeName":"Shri Laxmanrao Mankar B.ED College, Amgaon",
    "CollegeCodeId":"NA1934"
    },
    {
    "District":"Gondia",
    "CollegeName":"KALIMATI MAHAVIDYALAYA KALIMATI",
    "CollegeCodeId":"NA1935"
    },
    {
    "District":"Gondia",
    "CollegeName":"S.CHAUHAN MAHILA MAHAVIDYALAYA, AMGAON",
    "CollegeCodeId":"NA1936"
    },
    {
    "District":"Nandurbar",
    "CollegeName":"Ali Allana college of Pharmacy Akkalkuwa Dist-Nandurbar 425412",
    "CollegeCodeId":"A5282"
    },
    {
    "District":"Aurangabad",
    "CollegeName":"Shivchhatrapati Arts College Pachod TQ paithan",
    "CollegeCodeId":"A1034"
    },
    {
    "District":"Sindhudurg",
    "CollegeName":"Vijayalakshmi Vishwanath Dalvie College,Dist. Sindhudurg",
    "CollegeCodeId":"NA1234"  
    }
    
];

        const districtSelect = document.getElementById('district');
        const collegeSelect = document.getElementById('college');
        const collegeCodeIdSelect = document.getElementById('collegecodeid');

        // Populate the district dropdown with options
        const districts = [...new Set(colleges.map(college => college.District))];
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.text = district;
            districtSelect.add(option);
        });

        // Function to populate the college dropdown based on the selected district
        function populateColleges() {
            const selectedDistrict = districtSelect.value;

            // Remove existing options from college and college code ID dropdowns
            collegeSelect.innerHTML = '';
            collegeCodeIdSelect.innerHTML = '';

            // Filter colleges based on selected district and populate the college dropdown with options
            const filteredColleges = colleges.filter(college => college.District === selectedDistrict);
            filteredColleges.forEach(college => {
                const option = document.createElement('option');
                option.text = college.CollegeName;
                option.setAttribute('data-collegename', college.CollegeName);
                option.setAttribute('data-collegecodeid', college.CollegeCodeId);
                collegeSelect.add(option);
            });

            // Call the function to populate the CollegeCodeId dropdown based on the selected CollegeName
            populateCollegeCodeIds();
        }

        // Function to populate the CollegeCodeId dropdown based on the selected CollegeName
        function populateCollegeCodeIds() {
            const selectedCollegeName = collegeSelect.value;

            // Filter colleges based on selected CollegeName and populate the CollegeCodeId dropdown with options
            const filteredColleges = colleges.filter(college => college.CollegeName === selectedCollegeName);
            filteredColleges.forEach(college => {
                const option = document.createElement('option');
                option.text = college.CollegeCodeId;
                // option.setAttribute('data-collegename', college.CollegeName);
                option.setAttribute('data-collegecodeid', college.CollegeCodeId);
                collegeCodeIdSelect.add(option);
            })
        };