import './styles.css';

//Example Code
import { pingPong } from './project-name.js';

$(document).ready(function() {
  $("#project-form").submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
