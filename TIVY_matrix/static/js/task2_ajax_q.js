			var statement = document.createElement("p");
			$.getJSON( "static/tasks/task2.json", function (data){
				$.each (data, function (key, val ){
					if (key == "Question"){
						var textval = document.createTextNode(val);
  						document.getElementById('problem').appendChild(statement);
  						document.getElementById('problem').appendChild(textval);
  					}					
				});
			});