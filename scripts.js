/**
 * @author Harry Stevens
 * This project will create a bucket-colored map using Google Fusion Tables
 */

//Document ready calls pageLoaded
$(document).ready(pageLoaded);

//pageLoaded loads the Google Visualization library and calls googleLoaded
function pageLoaded(){
	google.load("visualization", "1", {packages:["corechart"],callback:googleLoaded});
}


