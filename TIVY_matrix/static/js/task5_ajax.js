			$.getJSON("static/tasks/task5.json", function( data ) {
  				var items = [];
  				$.each( data, function( key, val ) {
  					if (key == "Options"){
  						for (var i = 0; i < val.length; i++){
  							var radioInput;
  							var textval;
  							var br;
  							radioInput = document.createElement('input');
  							textval = document.createTextNode(val[i]);
  							br = document.createElement('br');
  							radioInput.setAttribute('type', 'radio');
  							radioInput.setAttribute('name', 'option');
  							radioInput.setAttribute('value', val[i]);
  							radioInput.setAttribute('class', 'opt');
  							radioInput.setAttribute('onchange', "document.getElementById('submit').disabled = false;")
  							radioInput.nextSibling = textval;
  							textval.nextSibling = br;
  							document.getElementById('radiobuttons').appendChild(radioInput);
  							document.getElementById('radiobuttons').appendChild(textval);
  							document.getElementById('radiobuttons').appendChild(br);
  						}
  					}
  				});
 
			});