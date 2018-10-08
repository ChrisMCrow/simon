import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { computerTurn, gameSequence} from './simon.js';

$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();

    computerTurn();
    for (var i = 0; i < gameSequence.length; i++) {
      setInterval(function() {
        $("#" + gameSequence[i]).toggleClass('active');
      }, 1000);
      clearInterval()
    }
    console.log(gameSequence);



  });
});
