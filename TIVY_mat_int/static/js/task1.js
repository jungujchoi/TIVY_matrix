				var svg = d3.select('#visualization');
				var r = 30;
				
				var cx1 = 500, cy1 = 80;
				var cx2 = 700, cy2 = 80;
				var cx3 = 400, cy3 = 180;
				var cx4 = 600, cy4 = 180;
				var cx5 = 800, cy5 = 180;
				
				var circles = [[cx1,cy1],[cx2,cy2],[cx3,cy3],[cx4,cy4],[cx5,cy5]];
				
				var counter = 1;
				var click, release;
				var ans = [];
				var statements = [];
				var rand = [];
				
				while (rand.length <= 4){
					var numb = Math.round(Math.random()*4);
					if (rand.indexOf(numb) == -1) rand.push(numb) 
				}
				var nameBank = ['Mary', 'John', 'Tom', 'Kevin', 'Sue'];
				var names = [' ',' ',' ',' ',' '];
				for (var i = 0; i < 5; i++){
					names[rand[i]] = nameBank[i];
				}
				
				var rand2 = [];
				while (rand2.length <= 4){
					var numb2 = Math.round(Math.random()*4) + 1;
					var numb3 = Math.round(Math.random()*4) + 1;
					var str = numb2 + '_' + numb3;
					var str2 = numb3 + '_' + numb2;
					if (numb2 != numb3){
						if (str != '3_5' && str != '5_3'){
							if (rand2.indexOf(str) == -1 && rand2.indexOf(str2) == -1) rand2.push(str);
						} 
					} 				
				}
				var rorder = [];
				for (var i = 0; i < rand2.length; i++){
					rorder[i] = [];
					rorder[i][0] = parseInt(rand2[i].split('_')[0]);
					rorder[i][1] = parseInt(rand2[i].split('_')[1]);
				}				
				// Mary = 1
				// John = 2
				// Tom = 3
				// Kevin = 4
				// Sue = 5
				// John and Tom are friends
				ans[0] = [rorder[0][0],rorder[0][1]];
				statements[0] = names[ans[0][0]-1] + " and "+ names[ans[0][1]-1] + " are friends";
				
				// Sue and Kevin are friends
				ans[1] = [rorder[1][0],rorder[1][1]];
				statements[1] = names[ans[1][0]-1] + " and "+ names[ans[1][1]-1] + " are friends";
				
				// Kevin and Mary are friends
				ans[2] = [rorder[2][0],rorder[2][1]];
				statements[2] = names[ans[2][0]-1] + " and "+ names[ans[2][1]-1] + " are friends";
				
				// Tom and Mary are friends
				ans[3] = [rorder[3][0],rorder[3][1]];
				statements[3] = names[ans[3][0]-1] + " and "+ names[ans[3][1]-1] + " are friends";
				
				statements[4] = "Great job!"
				/*var line1 = svg.append('line')
					.attr('x1', cx1).attr('y1', cy1)
					.attr('x2', cx2).attr('y2', cy2)
					.attr('style', 'stroke-width: 2; stroke:black');

				var line2 = svg.append('line')
					.attr('x1', cx1).attr('y1', cy1)
					.attr('x2', cx3).attr('y2', cy3)
					.attr('style', 'stroke-width: 2; stroke:black');*/

				var text1 = svg.append('text')
					.attr('id', 'text1')
					.attr('class', 'noselect')
					.attr('x', cx1 - r/2).attr('y', cy1+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text(names[0])	

				var cir1 = svg.append('circle')
					//.attr('id', 'circ1')
					.attr('r', 30)
					.attr('cx', cx1).attr('cy',cy1)
					.attr('style', 'fill: none; stroke-width: 2; stroke:black;');
				
				var cir_1 = svg.append('circle')
					.attr('class', 'node')
					.attr('id', 'circ1')
					.attr('r', 30)
					.attr('cx', cx1).attr('cy',cy1)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black; opacity: 0.1');
					

				var text2 = svg.append('text')
					.attr('id', 'text2')
					.attr('class', 'noselect')
					.attr('x', cx2 - r/2).attr('y', cy2+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text(names[1])	
					
				var cir2 = svg.append('circle')
					//.attr('id', 'circ2')
					.attr('r', 30)
					.attr('cx', cx2).attr('cy',cy2)
					.attr('style', 'fill: none; stroke-width: 2; stroke:black');

				var cir_2 = svg.append('circle')
					.attr('class', 'node')
					.attr('id', 'circ2')
					.attr('r', 30)
					.attr('cx', cx2).attr('cy',cy2)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black; opacity: 0.1');
										
				var text3 = svg.append('text')
					.attr('id', 'text3')
					.attr('class', 'noselect')
					.attr('x', cx3 - r/2).attr('y', cy3+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text(names[2]);

				var cir3 = svg.append('circle')
					//.attr('id', 'circ3')
					.attr('r', 30)
					.attr('cx', cx3).attr('cy',cy3)
					.attr('style', 'fill: none; stroke-width: 2; stroke:black');	

				var cir_3 = svg.append('circle')
					.attr('class', 'node')
					.attr('id', 'circ3')
					.attr('r', 30)
					.attr('cx', cx3).attr('cy',cy3)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black; opacity: 0.1');	
				
				var text4 = svg.append('text')
					.attr('id', 'text4')
					.attr('class', 'noselect')
					.attr('x', cx4 - r/2).attr('y', cy4+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text(names[3]);		

				var cir4 = svg.append('circle')
					//.attr('id', 'circ4')
					.attr('r', 30)
					.attr('cx', cx4).attr('cy',cy4)
					.attr('style', 'fill: none; stroke-width: 2; stroke:black');	
					
				var cir_4 = svg.append('circle')
					.attr('class', 'node')
					.attr('id', 'circ4')
					.attr('r', 30)
					.attr('cx', cx4).attr('cy',cy4)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black; opacity: 0.1');						


				var text5 = svg.append('text')
					.attr('id', 'text5')
					.attr('class', 'noselect')
					.attr('x', cx5 - r/2).attr('y', cy5+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text(names[4]);
					
				var cir5 = svg.append('circle')
					//.attr('id', 'circ5')
					.attr('r', 30)
					.attr('cx', cx5).attr('cy',cy5)
					.attr('style', 'fill: none; stroke-width: 2; stroke:black');	

				var cir_5 = svg.append('circle')
					.attr('class', 'node')
					.attr('id', 'circ5')
					.attr('r', 30)
					.attr('cx', cx5).attr('cy',cy5)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black; opacity: 0.1');	
				
				var text_1 = svg.append('text')
					.attr('class', 'noselect')
					.attr('id', 'statement')
					.attr('x', 25).attr('y', 25)
					.attr('style', 'font-weight: 900; fill:#008B8B;')
					.text('Statement ' + counter + ': '+ statements[0]);
				var text_1 = svg.append('text')
					.attr('class', 'noselect')
					.attr('id', 'warning')
					.attr('x', 25).attr('y', 40)
					.attr('style', 'font-weight: 900; fill: red;')
					.text(' ');						
				
				var mousedrag = 0;
				d3.selectAll('.node')
					.on('mousedown', function(){
						this.setAttribute('style', 'fill: #9bb529; stroke-width: 2; stroke: black; opacity: 0.5');
						var c_x = this.getAttribute('cx');
						var c_y = this.getAttribute('cy');
						mousedrag = 1;
						
						d3.select('#tempLine').remove();
						var line = svg.append('line').attr('id', 'tempLine')
							.attr('x1', c_x).attr('y1', c_y)
							.attr('x2', c_x).attr('y2', c_y)
							.attr('style', 'stroke: black; stroke-width: 2');
													
						var ind = parseInt(this.getAttribute('id').split('circ')[1]);
						svg.on('mousemove', function(){
							var x = event.offsetX;     
							var y = event.offsetY;
							//d3.select('#tempLine').remove();
							/*var line = svg.append('line').attr('id', 'tempLine')
								.attr('x1', c_x).attr('y1', c_y)
								.attr('x2', x).attr('y2', y)
								.attr('style', 'stroke: black; stroke-width: 2');*/							
							d3.select('#tempLine')
								.attr('x1', c_x).attr('y1', c_y)
								.attr('x2', x).attr('y2', y)
								.attr('style', 'stroke: black; stroke-width: 2');
						});
						/*d3.selectAll('.node').on('mouseup', function(){
							var c_x2 = this.getAttribute('cx');
							var c_y2 = this.getAttribute('cy');
							var line = svg.append('line')//.attr('id', 'tempLine')
								.attr('x1', c_x).attr('y1', c_y)
								.attr('x2', c_x2).attr('y2', c_y2)
								.attr('style', 'stroke: black; stroke-width: 2');
						});*/
						
						svg.on('mouseup', function(){
							d3.selectAll('.node').attr('style', 'fill: white; stroke-width: 2; stroke: black; opacity: 0.1');
							var x = d3.select('#tempLine').attr('x2');
							var y = d3.select('#tempLine').attr('y2');
							var circle = -1;
							for (var i = 0; i < 5; i++){
								if (Math.pow(r,2) >= Math.pow(x-circles[i][0], 2) + Math.pow(y-circles[i][1], 2)){
									circle = i;
								}
							}
							if (circle != -1){
								circle = circle + 1;
								if (ans[counter-1].includes(circle) && ans[counter-1].includes(ind) && circle != ind){
									
								
									counter++;
									var text = document.getElementById('statement').childNodes;
									document.getElementById('statement').removeChild(text[0]);
									d3.select('#statement').remove();
									var newText = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'statement')
										.attr('x', 25).attr('y', 25)
										.attr('style', 'font-weight: 900; fill:#008B8B;')
										.text('Statement ' + counter + ': '+ statements[counter-1]);
									
									var c_x2 = d3.select('#circ'+circle).attr('cx');
									var c_y2 = d3.select('#circ'+circle).attr('cy');
									var line = svg.append('line')//.attr('id', 'tempLine')
										.attr('x1', c_x).attr('y1', c_y)
										.attr('x2', c_x2).attr('y2', c_y2)
										.attr('style', 'stroke: black; stroke-width: 1');
										
									var text = document.getElementById('warning').childNodes;
									document.getElementById('warning').removeChild(text[0]);
									d3.select('#warning').remove();									
									var text_1 = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'warning')
										.attr('x', 25).attr('y', 40)
										.attr('style', 'font-weight: 900; fill: red;')
										.text(' ');
									
									if (counter == 5) d3.selectAll('.node').on('mousedown', null);												
								} else if (circle == ind){
									var text = document.getElementById('warning').childNodes;
									document.getElementById('warning').removeChild(text[0]);
									d3.select('#warning').remove();									
									var text_1 = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'warning')
										.attr('x', 25).attr('y', 40)
										.attr('style', 'font-weight: 900; fill: red;')
										.text('Left-click on a node, hold it down and drag the pointer onto another node.');										
								} else {
									var text = document.getElementById('warning').childNodes;
									document.getElementById('warning').removeChild(text[0]);
									d3.select('#warning').remove();									
									var text_1 = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'warning')
										.attr('x', 25).attr('y', 40)
										.attr('style', 'font-weight: 900; fill: red;')
										.text('These two nodes are not related as in the statement.');									
								}								
							} else {
								var text = document.getElementById('warning').childNodes;
								document.getElementById('warning').removeChild(text[0]);
								d3.select('#warning').remove();									
								var text_1 = svg.append('text')
									.attr('class', 'noselect')
									.attr('id', 'warning')
									.attr('x', 25).attr('y', 40)
									.attr('style', 'font-weight: 900; fill: red;')
									.text('Try to connect the nodes with the line.');									
							}
							d3.select('#tempLine').remove();
							
							svg.on('mousemove', null);
						});
						//var ind = parseInt(this.getAttribute('id').split('circ')[1]);
						//validate(ind);
					})
					
				/*d3.selectAll('text')
					.on('mousedown', function(){
						var ind = this.getAttribute('id').split('text')[1];
						d3.select('#circ'+ind).setAttribute('style', 'fill: #9bb529; stroke-width: 2; stroke: black');
						var c_x = d3.select('#circ'+ind).attr('cx');
						var c_y = d3.select('#circ'+ind).attr('cy');
						mousedrag = 1;
						svg.on('mousemove', function(){
							var x = event.offsetX;     
							var y = event.offsetY;
							d3.select('#tempLine').remove();
							var line = svg.append('line').attr('id', 'tempLine')
								.attr('x1', c_x).attr('y1', c_y)
								.attr('x2', x).attr('y2', y)
								.attr('style', 'stroke: black; stroke-width: 2');
						});
						svg.on('mouseup', function(){
							d3.selectAll('circle').attr('style', 'fill: white; stroke-width: 2; stroke: black');
							d3.select('#tempLine').remove();
							svg.on('mousemove', null);
						});
						var ind = parseInt(this.getAttribute('id').split('circ')[1]);
						validate(ind);
					})*/					
				
				function validate(){
					
				}
				function warning(){
					
				}
				function clearWarning(){
					
				}
