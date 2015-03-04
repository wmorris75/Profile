// $("#main").append("Wayne Morris");

var formattedName = HTMLheaderName.replace("%data%", "Wayne Morris");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "Wayne Morris",
	"role": "Software Engineer",
	"mobile": "954-864-7655",
	"email": "waynemorris75@gmail.com",
	"github":"wmorris75",
	"skills":["Java", "C++", "Python", "Android", "Ruby"],
	"biopic":"images/fry.jpg"
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

	$("#skills").append(formattedSkill);
	HTMLskills.replace("%data%", bio.skills[1]);

	$("#skills").append(formattedSkill);
	HTMLskills.replace("%data%", bio.skills[2]);
}

var education = {
	"schools":[
		{
			"name": "Andrews University",
			"city": "Berrien Springs, MI, USA",
			"degree":"Master of Science",
			"major": "Software Engineering",
			"date": "2011 - 2014"
		},
		{
			"name": "University of Technology",
			"city": "Kingston, Jamaica",
			"degree":"Bachelor of Engineering",
			"major": "Chemical Engineering",	
			"date": '2002 - 2006'		
		}
	]
}

var work = {

		"jobs":[
			{
				"employer":"Wishclouds/Commerce Datascience",
				"title": "Associate Developer",
				"dates":"September 2014 - March 2015",
				"description":"Write and maintain crawlers"
			},
			{

				"employer":"Conrad Douglas & Associates Limited",
				"title": "Staff Engineer",
				"dates":"November 2006 - July 2011",
				"description":"Environmental consulting"
			}
		]
	}

function displayWork(){
	for(job in work.jobs){

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer.replace("%data%", formattedTitle);
		
		//last makes sure its added to the last html element
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}
displayWork();

var projects = {
	"projects":[
			{
				"title": "www.waynemorris.com",
				"dates": "2014",
				"description":"Built on Ruby on Rails",
				"images":[
					"image.jpg"
				]
			}	
		]

}

projects.display = function () {
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);		
		//last makes sure its added to the last html element
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedTitle);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projects.display();

// $("#main").append(internationalizedButton);
$("#mapDiv").append(googleMap);
initializeMap();