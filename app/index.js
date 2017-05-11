/* 
 * Install using npm or yarn
 * npm install --save traitify-widgets
 */

/* 
 * Import the package
 */
import "traitify-widgets";


/*
 * Setup your config
 */
Traitify.setPublicKey("sptoechv411aqbqrp4l9a4eg2a");
Traitify.setHost("https://api.traitify.com");


/*
 * Create an assessment
 */
window.createAssessment = function(){
  Traitify.post("/assessments", {deck_id: document.querySelector("#deck-name").value, locale_key: "en-us"}).then(function(assessment){
    localStorage.setItem("assessment-id", assessment.id);
    initDeck();
  })
}


/*
 * Initialize the assessment
 */
window.initDeck = function(){
  var assessment = Traitify.ui.assessmentId(localStorage.getItem("assessment-id"));
  assessment.allowFullScreen(true);
  assessment.target(".traitify");
  assessment.render();
}
if(localStorage.getItem("assessment-id")){
  initDeck();
}


/*
 * Go get a coffee for a job well done
 */