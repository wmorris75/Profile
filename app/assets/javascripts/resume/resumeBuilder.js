/**
 * Created by wishclouds on 3/12/15.
 */
//AUTHOR: WAYNE MORRIS
//CREATED: 3/3/2015
//TITLE: WAYNE MORRIS RESUME


var bio = {
    "name": "Wayne Morris, MSc., B.Eng.",
    "role": "Engineer",
    "mobile": "954-864-7655",
    "email": "waynemorris75@gmail.com",
    "github":"wmorris75",
    "skills":["Java,", "Ruby,", "Python,", "R,", "C++,", "Javascript,",  "JQuery,", "Ruby on Rails,", "HTML,", "CSS,", "Spring Framework,", "Android,",
        "MySQL,", "PostgreSQL,", "Oracle,","GoogleMap API,", "Windows,", "Linux/Unix OS and Servers,", "MongoDB,", "Amazon Web Services,",
        "Redis,", "ElasticSearch,", "REST,", "Project Management,", "Microsoft Projects,", "Microsoft Visio."],
    "biopic":"/assets/resume/profile_pic-dae74e6cdeb945cb613a6e04f78ac1bc.jpg",
    "contacts": {"location" :  "Fort Lauderdale, FL"}
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
            "employer":"71 Pounds",
            "title": "Software Engineer",
            "dates":"September 2015 - Present",
            "description": {"duties":[
                                        "Implemented server resource management strategies to manage processes and ensure reliable execution and delivery of all the application processes.",
                                        "Improved the application download performance from a process which usually took hours to complete  in minutes.",
                                        "Developed and implemented the front-end for managing all the application processes.",
                                        "Developed programs and applications which resulted in increased revenues for the company",
                                        "Redesign and Refactor applying design patterns for easy feature enhancements and maintenance",
                                        "Design, architect and implement program applications which improved the business process for efficiency and high productivity utilizing python and ruby on rails as programming framework.",
                                        "Cloud management of all the servers including the database and queuing infrastructure and our app servers utilizing AWS services.",
                                        "Implementing system administration tasks including, the implementation of database backup, server restoration and security features to ensure reliability in the company's operations. "
                
                    
                                    ]},
            "contacts": {"location" :  "Davie, FL"}
        },
        {
            "employer":"Wishclouds/Commerce Datascience",
            "title": "Software Developer",
            "dates":"September 2014 - July 2015",
            "description": {"duties":[
                                        "Successfully improving the Web Crawler System from 54% functionality to over 90% functionality",
                                        "Improved the efficiency of the crawler system database operations by implementing more efficient techniques to insert, delete, update and query data based on AWS DynamoDB operations.",
                                        "Cloud management of the Crawler Infrastructure utilizing AWS services which includes MongoDB, Redis, ElasticSearch, SQS and EC2.",
                                        "Troubleshoot and resolve issues from a system and component perspective.",
                                        "Developed scripts to resolve issues with the crawler system such as: developing regular expressions to extract particular data, developing query, update and delete operations to target modifying specific data in MongoDB. ",
                                        "Troubleshooting and resolving issues with the Linux based servers.",
                                        "Developing and implementing shell scripts to monitor server processes.",
                                        "Utilized web crawling tools including Nokogiri, Phantomjs, Mechanize and Capybara webkit.",
                                        "Offer technical support in the planning, designing and implementation of new software technologies"
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
            $(".work_details:last").append(formattedDuties);
        }
    }
}
displayWork();

var certifications = {
    "certification":[
        {
            "title":"Data Science Specialization: Data Engineering, Multivariate Regression Models, Logistic Regression and Machine Learning<br><b>Courses Completed:<b>",
            "dates":"October 2016",
            "organization":"Coursera",
            "images":["Data Science Toolbox", "R Programming", "Getting and Cleaning Data", "Exploratory Analysis", 
                    "Reproducible Research", "Statistical Inference", "Regression Models",
                    "Practical Machine Learning", "Developing Data Products", "Capstone Project(in-progress)"]
        },

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
        for( image in certifications.certification[cert].images){
            var getImage = HTMLcourses.replace("%data%", certifications.certification[cert].images[image]);
            $(".certifications-entry").append(getImage);
        }

    }
}
certifications.display();


$(document).click(function(loc) {
    // your code goes here!
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
//Load map on page

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(bio.name) || function(){};
    $('#name').html(iName);  
  });
});

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " +name[1];

}



$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
initializeMap();
// pinPoster(locationFinder());