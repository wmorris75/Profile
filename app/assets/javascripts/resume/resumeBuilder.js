/**
 * Created by wishclouds on 3/12/15.
 */
//AUTHOR: WAYNE MORRIS
//CREATED: 3/3/2015
//TITLE: WAYNE MORRIS RESUME


var bio = {
    "name": "Wayne Morris, MSc., B.Eng.",
    "role": "",
    "mobile": "954-864-7655",
    "email": "waynemorris75@gmail.com",
    "github":"wmorris75",
    "skills":["Java,", "Ruby,", "Python,", "PHP,", "C++,", "Javascript,",  "JQuery,", "Ruby on Rails,", "HTML,", "CSS,", "Spring Framework,", "Android,",
        "MySQL,", "PostgreSQL,", "Oracle,","GoogleMap API,", "Windows,", "Linux/Unix OS and Servers,", "MongoDB,", "Amazon Web Services,",
        "Redis,", "ElasticSearch,", "REST."],
    "biopic":"/assets/resume/profile_pic.jpg",
    "contacts": {"location" :  "Lauderhill, FL"}
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
$("#topContacts").prepend(formattedMobile);

// $("#header").append(HTMLemail);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#topContacts").prepend(formattedEmail);

// $("#header").append(HTMLgithub);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
$("#topContacts").prepend(formattedGithub);

// $("#header").append(HTMLlocation);
var formattedContacts = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedContacts);

var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedImage);


if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}


var education = {
    "schools":[
        {
            "name": "Andrews University",
            "city": "Berrien Springs, MI, USA",
            "degree":"Master of Science",
            "major": "Software Engineering",
            "date": "2011 - 2014",
            "contacts": {"location" :  "Berrien Springs, MI"}
        },
        {
            "name": "University of Technology",
            "city": "Kingston, Jamaica",
            "degree":"Bachelor of Engineering",
            "major": "Chemical Engineering",
            "date": '2002 - 2006',
            "contacts": {"location" : "Kingston, Jamaica"}
        }
    ]
}

$("#education").append(HTMLschoolStart);
for(school in education.schools){
    var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    // $(".education-entry:last").append(schoolName);

    var degreeName = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    // $(".education-entry:last").append(degreeName);

    var schoolTitle = HTMLschoolName.replace("%data%", schoolName) + degreeName;
    $(".education-entry:last").append(schoolTitle);

    var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
    $(".education-entry:last").append(schoolDates);

    var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].contacts.location);
    $(".education-entry:last").append(schoolLocation);

    var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(schoolMajor);
}

var work = {

    "jobs":[
        {
            "employer":"Wishclouds/Commerce Datascience",
            "title": "Software Developer",
            "dates":"September 2014 - March 2015",
            "description": {"duties":[
                "Achieved a milestone of successfully improving the Crawler System operations from 54% to over 90%.",
                    "Utilize Linux/Unix OS and its tools to troubleshoot and maintain the efficient running of servers of the Amazon Web." +
                    "Services including EC2, DynamDB, S3 and SQS.",
                "Interacting daily with MongoDB to perform CRUD operations on the Crawler System as necessary.",
                    "Write, implement and maintain existing and new crawlers which run on various framework including" +
                    "Ruby on Rails, AWS, Scala API, Redis, and Beanstalkd.",
                "Utilizes web crawling tools including Nokogiri, Phantomjs, Mechanize and Capybara webkit."
            ]},
            "contacts": {"location" :  "Boca Raton, FL"}
        },
        {

            "employer":"Conrad Douglas & Associates Limited",
            "title": "Staff Engineer",
            "dates":"November 2006 - July 2011",
            "description":
            {"duties":["Project Manager for successfully carrying out a number of environmental"+
                "closure plans and indoor air quality assessment projects.",
                    "Project Team Leader for carrying out a process analysis of the wastewater treatment and "+
                    "reverse osmosis plant of a reputable beer manufacturing company in Jamaica.",
                    "Project Coordinator for completing an Environmental Impact Assessment (EIA) Project "+
                    "for a Fibre Optic Cable and meeting the requirements to successfully obtain an Environmental Permit and License for the client.",
                    "Team Leader for preparing and submitting monthly environmental monitoring reports to the "+
                    "Environmental Regulatory Authority on behalf of a reputable Bauxite/Alumina company.",
                    "Team Leader for organizing, conducting and preparing a number of Environmental Impact Statements (EIS)"+
                    "and Environmental Prefeasibility Studies for companies, including bauxite/alumina, cement and liquefied natural gas (LNG).",
                    "Offer general technical and administrative support in the following: " + "<br>" +
                    "Evaluating industrial processes and process systems to identify and reduce process deficiency "+
                    "and providing solutions to bring industries in compliance with regulatory standards.",
                    "Performing Environmental Due Diligence Audits for acquisition of industrial and commercial entities, "+
                    "Ambient Air and Water Quality Assessments and Indoor Air Quality Assessments."	,
                "Conducting EIAs and EIS projects for commercial and industrial entities.",
                "Preparing Project Proposals, including technical and financial proposals for project bids.",
                "Performing Project Planning, Costing and general Project Management Support",
                "Performed Administrative Management support."
            ]},
            "contacts": {"location" :  "Kingston, Jamaica"}
        }
    ]
}


function displayWork(){
    for(job in work.jobs){

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer.replace("%data%", formattedTitle) + formattedTitle;

        var location = HTMLworkLocation.replace("%data%", work.jobs[job].contacts.location);
        $(".work-entry:last").append(location);
        

        //last makes sure its added to the last html element
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        // var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description.duties);
        // $(".work-entry:last").append(formattedDescription);


        // var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description.duties);
        $(".work-entry:last").append(HTMLworkDescription);

        for (duty in work.jobs[job].description.duties){
            var formattedDuties = HTMLworkDescriptionDuty.replace("%data%", work.jobs[job].description.duties[duty]);
            console.log(formattedDuties);
            $(".work_details:last").append(formattedDuties);
        }
    }
}
displayWork();

// var projects = {
//     "projects":[

//         {
//             "title":"waynemorris.com",
//             "dates":"March 2015",
//             "description":"waynemorris.com is built with the Ruby on Rails framework. It was a project that was developed to highlight my skills " +
//                 "as a software developer and to show case my professional experience which includes " +
//                 "project management, professional consulting, engineering and software developmet.",
//             "images":[]
//         },

//         {
//             "title": "Thesis project: A Hierarchical Framework for Estimating Heterogeneous " +
//                 "Architecture Based Software Reliability",
//             "dates": "August 2014",
//             "description":"This project details the proposal of a mathematical model using Discrete Time Markov's Chain (DTMC) " +
//                 "to determine software reliability based on the reliability of individual software components within a system. " +
//                 "The proposed model takes into consideration the heterogeneity of the different software systems, which includes: " +
//                 "Batch-Sequential/Pipeline Architectural Style, Parellel-Pipe style, Fault Tolerance and Call and Return Architecture style." +
//                 "Each architectural style was mathematically modelled for which the DTMC was applied to each software system components based on its "+
//                 "architectural style to determine reliability of the overall software system",
//             "images":[
//                 "/assets/project/fault_tolerance_image.jpg"
//             ]
//         },
//         {
//             "title":"Campus Navigation System(CNS)",
//             "dates":"May 2012",
//             "description": "Developed an application using the GoogleMap API for users to conveniently navigate and locate buildings and departments " +
//                 "on the Andrews University Campus. Sample screen shots of the application are provided below.",
//             "images":["/assets/project/main.jpg", "/assets/project/tracking.jpg", "/assets/project/view_submenu.png", "/assets/project/view_submenu_options.png",
//                 "/assets/project/running_ad.png", "/assets/project/real_time_geotracking.png", "/assets/project/finding_dest_path.png",
//                 "/assets/project/geo_position.png"]
//         }]
// }



// projects.display = function () {
//     for(project in projects.projects){
//         $("#projects").append(HTMLprojectStart);

//         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
//         //last makes sure its added to the last html element
//         $(".project-entry:last").append(formattedTitle);

//         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
//         $(".project-entry:last").append(formattedDates);

//         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
//         $(".project-entry:last").append(formattedDescription);

//         if (projects.projects[project].images.length > 0){
//             for(image in projects.projects[project].images){
//                 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
//                 $(".project-entry:last").append(formattedImage);
//             }
//         }

//     }
// }

// projects.display();

var certifications = {
    "certification":[

        {
            "title":"Programming Cloud Services for Android Handheld Systems",
            "dates":"September 2014",
            "organization":"Coursera",
            "images":[]
        },

        {
            "title": "Pattern-Oriented Software Architectures: Programming Mobile Services for Android Handheld Systems",
            "dates": "July 2014",
            "organization":"Coursera",
            "images":[]
        },
        {
            "title":"Web Applications Architecture using Ruby on Rails",
            "dates":"June 2014",
            "organization":"Coursera",
            "images":[]
        },
        {
            "title": "Project Design, Management and Implementation ",
            "dates": "March 2014",
            "organization":"Management Institute of National Development",
            "images":[]
        }]
}



certifications.display = function () {
    for(cert in certifications.certification){
        $("#certifications").append(HTMLcertificationsStart);

        var formattedDates = HTMLdate.replace("%data%", certifications.certification[cert].dates);
        var formattedDescription = HTMLorganization.replace("%data%", certifications.certification[cert].organization) + formattedDates;
        $(".certifications-entry:last").append(formattedDescription);

        var formattedDates = HTMLdate.replace("%data%", certifications.certification[cert].dates);
        // $(".certifications-entry:last").append(formattedDates);

        var formattedTitle = HTMLcertTitle.replace("%data%", certifications.certification[cert].title);
        //last makes sure its added to the last html element
        $(".certifications-entry:last").append(formattedTitle);

    }
}
certifications.display();


//Load map on page
 $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
initializeMap();
pinPoster(locationFinder());