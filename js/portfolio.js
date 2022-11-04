SUMMARY = `
Something something<br><br>

At the moment, I am working with Oxford Technology, where we invest in those brilliant scientists who know that, when it comes to building the future, the lab is only the first part of the story.<br>

I also chose to include in the sidebar some projects I am involved with in various capacities. 
Some of them for work and fun, some just for fun. All of them because we always seek out those new trails being set ablaze.<br>

<span class="xs-txt"><i>Research interests:</i> biotechnology, drug development, quantum computing, climate.</span>

`;

UPDATES = [
  {
    date: "OXFORD TECHNOLOGY",
    text: "Investing in bleeding-edge science since venture capital was not a thing yet.",
  },
  {
    date: "THE MISSION FUND",
    text: "Investing in experiments to discover transformative therapeutics.",
  },
  {
    date: "FARO",
    text: "The first full-stack photonic quantum computing company.",
  },
  {
    date: "PROMETHEUX",
    text: "Building an automated reasoner for big data and knowledge graphs.",
  },
  {
    date: "IMMUNAGEN",
    text: "Engineering a synthetic immune system to develop monoclonal antibodies.",
  },
  {
    date: "ITALIANS IN VC",
    text: "Arguably the best national community in VC.",
  },

];

PUBS = [
  {
    image: "./media/img/lion.png",
    title: "Limestone Carving of a Lion",
    authors: "Early Tang dynasty, 6th - 7th century",
    venue: "© Eskenazi, London",
    doi: "https://www.eskenazi.co.uk/en-gb/exhibitions/tang-ceramics,-metalwork-and-sculpture/objects/limestone-carving-of-a-lion"
  },
];

VEN = [
  {
    image: "./media/img/lightpoint.png",
    title: "The Breadth of Human Experience",
    description: "One startup in cancer surgery",
  },
  {
    image: "./media/img/cd200.png",
    title: "The Solitude of a Single Asset",
    description: "Short story of an exit for a CD200 fusion protein",
  }
]

PHILPHYS = [
  {
    image: "./media/img/NCurrent.png",
    title: "Symmetries and Conserved Quantities",
    description: "Considerations on variational and dynamical symmetries",
  },
  {
    image: "./media/img/emmy.jpg",
    title: "A Moral Solace",
    description: "Science and ethic in times of violence",
  },
  {
    image: "./media/img/einstein.png",
    title: "Chronogeometry of the metric field",
    description: "Interpretations of the dynamical field in general relativity",
  },
  {
    image: "./media/img/kant.jpg",
    title: "The Systematic Unity of Nature",
    description: "Empirical laws as a challenge for Kantianism",
  }
]

PLACES = [
  {
    image: "./media/img/grigna.png",
    title: "Alps",
    description: "Grigna Meridionale",
  },
  {
    image: "./media/img/capenorth.png",
    title: "Norway",
    description: "Nordkapp",
  },
  {
    image: "./media/img/oxford.png",
    title: "Oxfordshire",
    description: "South Park",
  },
]

ENDING = `

<span class="xs-txt">
	Then there is that one passage where Dante talks about science and innovation:<br> <br>
		<i>		
			«For I have seen all winter long the thorn<br>
 			First show itself intractable and fierce,<br>
 			And after bear the rose upon its top».<br><br>
 			~ Divina Commedia III, XIII<br>
		</i>
</span>

`;

// Compile portfolio sections & items ===============================
const summarySection = `
  <div class="items items-row">
    <div class="sm-txt" style="margin-bottom:20px">
        ${SUMMARY}
    </div>
  
    <hr>

    <div class="sm-txt-caps">SOME SHAPE OF BEAUTY</div>
    <div id="Publications" class="">
      <br>
      ${PUBS.map(pub => `
          <div class="row">
            <div class="col-sm-4 pub_img"><img src="${pub.image}"></div>
            <div class="col-sm-8">
              <div>
                <span class="active xs-sm-txt"><a href="${pub.doi}" target="_blank">${pub.title}</a></span><br>
                <span class="xs-txt">${pub.authors}</span><br>
                <span class="xs-txt">${pub.venue}</span>
              </div>
            </div>
          </div>
      `).join("")}
    </div>

    <hr>
    <div class="sm-txt-caps">OVER THE YEARS</div>
    <div class="col-sm-12 main-tab">
      <button id="Venture-btn" class="main-tablinks sm-txt" onclick="openTab(event, 'Venture')">Venture</button>
      <button class="main-tablinks sm-txt" onclick="openTab(event, 'Philosophy and Physics')">Philosophy and Physics</button>
      <button class="main-tablinks sm-txt" onclick="openTab(event, 'Places')">Places</button>
    </div>

    <div id="Venture" class="main-tabcontent">
      ${VEN.map(pub => `
          <div class="row">
            <div class="col-sm-4 pub_img"><img src="${pub.image}"></div>
            <div class="col-sm-8">
              <div>
                <span class="active xs-sm-txt">${pub.title}</span><br>
                <span class="xs-txt">${pub.description}</span>
              </div>
            </div>
          </div>
      `).join("")}
    </div>

    <div id="Philosophy and Physics" class="main-tabcontent">
      ${PHILPHYS.map(pub => `
          <div class="row">
            <div class="col-sm-4 pub_img"><img src="${pub.image}"></div>
            <div class="col-sm-8">
              <div>
                <span class="active xs-sm-txt">${pub.title}</span><br>
                <span class="xs-txt">${pub.description}</span>
              </div>
            </div>
          </div>
      `).join("")}
    </div>

    <div id="Places" class="main-tabcontent">
      ${PLACES.map(pub => `
          <div class="row">
            <div class="col-sm-4 pub_img"><img src="${pub.image}"></div>
            <div class="col-sm-8">
              <div>
                <span class="active xs-sm-txt">${pub.title}</span><br>
                <span class="xs-txt">${pub.description}</span>
              </div>
            </div>
          </div>
      `).join("")}
    </div>

    <hr>

    <div class="sm-txt" style="margin-bottom:20px">
        ${ENDING}
    </div>

      <hr>
  </div>
`;

const updateSection = `
<div class="items items-row">
  <div class="sm-txt-caps">SOME HIGHLIGHTS</div>
  ${UPDATES.map( update => `
    <div style="margin-bottom:5px">
      <span class="xs-txt-caps">${update.date}<br></span>
    </div>
    <div class="xs-txt" style="margin-bottom:20px">
        ${update.text}
    </div>
  `).join("")}
`;

function openTab(evt, sectionName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("main-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("main-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sectionName).style.display = "block";
  if (evt !== null) {
    evt.currentTarget.className += " active";
  } else {
    document.getElementById("Venture-btn").className += " active";
  }

  // Open the first button by default
	
}

// Adds created portfolio items to the document
function createPortfolioItems() {
	document.getElementById("summary").innerHTML = summarySection;
  document.getElementById("updates").innerHTML = updateSection;
}

createPortfolioItems();
openTab(null, "Venture");
