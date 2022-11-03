SUMMARY = `
Something something<br><br>

<span class="xs-txt"><i>Research interests:</i> biotechnology, drug development, quantum computing, climate, Chinese art, Italian poetry.</span><br><br>

`;

UPDATES = [
  {
    date: "August 2022",
    text: "Text",
  },
  {
    date: "May 2022",
    text: "Text",
  },
  {
    date: "March 2022",
    text: "Text",
  },
  {
    date: "November 2021",
    text: "Text",
  },
  {
    date: "September 2021",
    text: "Text",
  },
  {
    date: "June 2021",
    text: "Text",
  },
  {
    date: "June 2021",
    text: "Text",
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
    image: "./media/img/kant.jpeg",
    title: "The Systematic Unity of Nature",
    description: "Empirical laws as a challenge for Kantianism",
  },
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

    <div class="sm-txt-caps">A TREAT FOR THE EYES</div>
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
      <button id="design-btn" class="main-tablinks sm-txt" onclick="openTab(event, 'Venture')">Venture</button>
      <button class="main-tablinks sm-txt" onclick="openTab(event, 'Philosophy and Physics')">Philosophy and Physics</button>
      <button class="main-tablinks sm-txt" onclick="openTab(event, 'Alps (Oxfordshire)')">Places</button>
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

    <div id="Alps (Oxfordshire)" class="main-tabcontent">
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

  <div class="items items-row">
    <div class="sm-txt" style="margin-bottom:20px">
        ${ENDING}
    </div>

      <hr>
  </div>
`;

const updateSection = `
<div class="items items-row">
  <div class="sm-txt-caps">RECENT HIGHLIGHTS</div>
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
    document.getElementById("design-btn").className += " active";
  }
}

// Adds created portfolio items to the document
function createPortfolioItems() {
	document.getElementById("summary").innerHTML = summarySection;
  document.getElementById("updates").innerHTML = updateSection;
}

createPortfolioItems();
openTab(null, "Design");
