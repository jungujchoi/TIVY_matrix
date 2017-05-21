				var svg = d3.select('#visualization')
					//.append('g')
					//.attr('transform', 'translate(-200,50)');
				var mat = d3.select('#visualization').append('g').attr('transform', 'translate(500,0)');
				var r = 30;
				
				var cx1 = 300, cy1 = 130;
				var cx2 = 450, cy2 = 130;
				var cx3 = 225, cy3 = 230;
				var cx4 = (cx1+cx2)/2, cy4 = 230;
				var cx5 = cx4+150, cy5 = 230;
				
				var circles = [[cx1,cy1],[cx2,cy2],[cx3,cy3],[cx4,cy4],[cx5,cy5]];
				
				var counter = 1;
				var click, release;
				var ans = [];
				var statements = [];
				// Nathan = 1
				// Philip = 2
				// John = 3
				// Kevin = 4
				// Sue = 5
			var rand = [];
			var rand2 = [];	
			while (rand.length <= 4){
				var numb = Math.round(Math.random()*4);
				if (rand.indexOf(numb) == -1) rand.push(numb)

			}
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
			var nameBank = ['John', 'Nathan', 'Kevin', 'Philip', 'Sue'];
			var names = [' ',' ',' ',' ',' '];
			for (var i = 0; i < 5; i++){
				names[rand[i]] = nameBank[i];
			}



				
				var labels = names;//['Nathan', 'Philip', 'John', 'Kevin', 'Sue'];


			ans[0] = [rorder[0][0],rorder[0][1]];
			statements[0] = names[ans[0][0]-1] + " and "+ names[ans[0][1]-1] + " are friends";
			
			
			//Kevin and Sue are friends;
			ans[1] = [rorder[1][0],rorder[1][1]];
			statements[1] = names[ans[1][0]-1] + " and "+ names[ans[1][1]-1] + " are friends";
					
			 
			//Sue and Nathan are not friends; 
			//Nathan and Kevin are friends; 
			ans[2] = [rorder[2][0],rorder[2][1]];
			statements[2] = names[ans[2][0]-1] + " and "+ names[ans[2][1]-1] + " are friends";
						
			
			//Sue and Philip are friends; 
			
			ans[3] = [rorder[3][0],rorder[3][1]];
			statements[3] = names[ans[3][0]-1] + " and "+ names[ans[3][1]-1] + " are friends";		
			
			//Kevin and Philip are friends
			ans[4] = [rorder[4][0],rorder[4][1]];		
			statements[4] = names[ans[4][0]-1] + " and "+ names[ans[4][1]-1] + " are friends";	
				
				/*// John and Kevin are friends
				ans[0] = [3, 2];
				statements[0] = "John and Kevin are friends";
				
				// Sue and Kevin are friends
				ans[1] = [5, 4];
				statements[1] = "Sue and Kevin are friends";
				
				// Nathan and Kevin are friends
				ans[2] = [1, 4];
				statements[2] = "Nathan and Kevin are friends";
				
				// Sue and Philip are friends
				ans[3] = [2, 5];
				statements[3] = "Sue and Philip are friends";

				// Kevin and Philip are friends
				ans[4] = [4, 2];
				statements[4] = "Kevin and Philip are friends";*/
				
				statements[5] = "Great job!"

				var nodeLink = 0;
				var matrix = 0;
				
				var text1 = svg.append('text')
					.attr('id', 'text1')
					.attr('class', 'noselect')
					.attr('x', cx1 - r/2).attr('y', cy1+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text(labels[0])	

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
					.text(labels[1])	
					
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
					.text(labels[2]);

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
					.text(labels[3]);		

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
					.text(labels[4]);
					
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

				/*svg.append('line')
					.attr('class', 'link')
					.attr('x1', circles[ans[0][0]-1][0]).attr('y1', circles[ans[0][0]-1][1])
					.attr('x2', circles[ans[0][1]-1][0]).attr('y2', circles[ans[0][1]-1][1])
					.attr('style', 'stroke: blue; stroke-width: 2px;');*/
					

				t_1_x = 25;
				t_1_y = 15;
				t_2_x = 25;
				t_2_y = 45;
				t_3_x = 25;
				t_3_y = 60;
				/*var text_1 = d3.select('#visualization').append('text')
					.attr('class', 'noselect')
					.attr('id', 'title')
					.attr('x', t_1_x).attr('y', t_1_y)
					.attr('style', 'font-weight: 900; fill:#8c7625;')
					.text('First, do the node-link diagram that reflects Statement ' + counter);*/				
				var text_2 = d3.select('#visualization').append('text')
					.attr('class', 'noselect')
					.attr('id', 'statement')
					.attr('x', t_2_x).attr('y', t_2_y)
					.attr('style', 'font-weight: 900; fill:#008B8B;')
					.text('Draw a link in the node-link diagram that represents the blue-border squares.');
				var text_3 = d3.select('#visualization').append('text')
					.attr('class', 'noselect')
					.attr('id', 'warning')
					.attr('x', 25).attr('y', 60)
					.attr('style', 'font-weight: 900; fill: red;')
					.text(' ');						
				

				
				var mousedrag = 0;
				d3.selectAll('.node')
					.on('mousedown', function(){
						if (nodeLink == 1) {
							var text = document.getElementById('warning').childNodes;
							document.getElementById('warning').removeChild(text[0]);
							d3.select('#warning').remove();									
							var text_1 = d3.select('#visualization').append('text')
								.attr('class', 'noselect')
								.attr('id', 'warning')
								.attr('x', t_3_x).attr('y', t_3_y)
								.attr('style', 'font-weight: 900; fill: red;')
								.text('Please do the matrix.');									
						} else {
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
						
							d3.select('#tempLine')
								.attr('x1', c_x).attr('y1', c_y)
								.attr('x2', x).attr('y2', y)
								.attr('style', 'stroke: blue; stroke-width: 4');
						});

						
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

									d3.selectAll('.blueborder')
										.attr('style', 'fill: black');

									var ix = ans[counter][0] - 1;
									var jy = ans[counter][1] - 1;
									d3.select('#cell' + ix + '_' + jy)
										.attr('class', 'blueborder')
										.attr('style', 'fill: black; stroke: blue; stroke-width: 6px');
									d3.select('#cell' + jy + '_' + ix)
										.attr('class', 'blueborder')
										.attr('style', 'fill: black; stroke: blue; stroke-width: 6px');		
									/*var text = document.getElementById('title').childNodes;
									document.getElementById('title').removeChild(text[0]);
									d3.select('#title').remove();
									var newText = d3.select('#visualization').append('text')
										.attr('class', 'noselect')
										.attr('id', 'title')
										.attr('x', t_1_x).attr('y', t_1_y)
										.attr('style', 'font-weight: 900; fill:#8c7625;')
										.text('Now, do the matrix that reflects Statement ' + counter);*/	
									
									//nodeLink = 1;
									//matrix = 1;
									counter++;
									var text = document.getElementById('statement').childNodes;
									document.getElementById('statement').removeChild(text[0]);
									d3.select('#statement').remove();
									var newText = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'statement')
										.attr('x', t_2_x).attr('y', t_2_y)
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
										.attr('x', t_3_x).attr('y', t_3_y)
										.attr('style', 'font-weight: 900; fill: red;')
										.text(' ');
									
									if (counter == statements.length) d3.selectAll('.node').on('mousedown', null);												
								} else if (circle == ind){
									var text = document.getElementById('warning').childNodes;
									document.getElementById('warning').removeChild(text[0]);
									d3.select('#warning').remove();									
									var text_1 = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'warning')
										.attr('x', t_3_x).attr('y', t_3_y)
										.attr('style', 'font-weight: 900; fill: red;')
										.text('Left-click on a node, hold it down and drag the pointer onto another node.');										
								} else {
									var text = document.getElementById('warning').childNodes;
									document.getElementById('warning').removeChild(text[0]);
									d3.select('#warning').remove();									
									var text_1 = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'warning')
										.attr('x', t_3_x).attr('y', t_3_y)
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
									.attr('x', t_3_x).attr('y', t_3_y)
									.attr('style', 'font-weight: 900; fill: red;')
									.text('Try to connect the nodes with the line.');									
							}
							d3.select('#tempLine').remove();
							
							svg.on('mousemove', null);
						});
						}
					});


			var w_cell = 50;
			var h_cell = 50;			
					
			d3.csv("static/data/data5.csv", function(error, data){
				celldata = data;
				var j = 0;
				ind = Object.keys(data[0]);
				

				
				var canvas = svg.append('g').attr('class', 'canvas').attr('transform', 'translate(650,25)');
				for (var i = 0; i < data.length; i++){
					for (var j = 0; j < data.length; j++){
						canvas.append('rect').attr('class', 'cell')
							.attr('id', 'cell' + i + '_' + j)
							.attr('width', w_cell).attr('height', h_cell)
							.attr('x', w_cell*(i+1))
							.attr('y', h_cell*(j+1))
							.attr('style', function(){
								var str;
								if (data[i][ind[j]] == '1'){
									str = 'black';
								}
								else {
									str = 'white';
								} 
									
								return 'stroke: black; stroke-width: 2; opacity: 1; fill:' + str;
							});
						canvas.append('text').attr('class', 'noselect')
							.attr('transform', function(){
							var x = 1*w_cell*(i+1)+w_cell*1/10;
							var y = h_cell*9/10;
							return 'translate(' + x + ',' + y + ')rotate(-45)';
						}).text(function(){return names[i];});		

						canvas.append('text').attr('class', 'noselect')

							.attr('transform', function(){
								var x = w_cell*0/10;
								var y = 1*h_cell*(i+1) + 1/2*h_cell;
								return 'translate(' + x + ',' + y + ')';
							})
							.text(function(){return names[i];});								
											
					}

				}
				/*var ver = [];
				d3.selectAll('.cell').on('mousedown', function(){
					if (false){
						var text = document.getElementById('warning').childNodes;
						document.getElementById('warning').removeChild(text[0]);
						d3.select('#warning').remove();									
						var text_1 = d3.select('#visualization').append('text')
							.attr('class', 'noselect')
							.attr('id', 'warning')
							.attr('x', t_3_x).attr('y', t_3_y)
							.attr('style', 'font-weight: 900; fill: red;')
							.text('Please do the node-link diagram first.');								
						return;
					} else {
					var columnY = parseInt(this.getAttribute('id').split('(')[1].split(')')[0].split(',')[1])+1;
					var rowX = parseInt(this.getAttribute('id').split('(')[1].split(')')[0].split(',')[0])+1;
					var id = this.getAttribute('id');
					
					if (ans[counter-1].includes(columnY) && ans[counter-1].includes(rowX) && columnY != rowX && ver.includes(id) == false){
						this.setAttribute('style', 'fill: black');
						ver.push(this.getAttribute('id'));
						if (ver.length == 2){


						if (counter != ans.length + 1)
						d3.selectAll('.link')
							.attr('style', 'stroke: black; stroke-width: 1px;');
						svg.append('line')
							.attr('class', 'link')
							.attr('x1', circles[ans[counter-1][0]-1][0]).attr('y1', circles[ans[counter-1][0]-1][1])
							.attr('x2', circles[ans[counter-1][1]-1][0]).attr('y2', circles[ans[counter-1][1]-1][1])
							.attr('style', 'stroke: blue; stroke-width: 2px;');


							ver = [];
							nodeLink = 0;
							counter++;							


							var text = document.getElementById('warning').childNodes;
							document.getElementById('warning').removeChild(text[0]);
							d3.select('#warning').remove();									
							var text_1 = d3.select('#visualization').append('text')
								.attr('class', 'noselect')
								.attr('id', 'warning')
								.attr('x', t_3_x).attr('y', t_3_y)
								.attr('style', 'font-weight: 900; fill: red;')
								.text(' ');		
							
							if (counter == ans.length+1) {
								d3.selectAll('.cell').on('mousedown', null);
								d3.selectAll('.node').on('mousedown', null);
								
								var text = document.getElementById('statement').childNodes;
								document.getElementById('statement').removeChild(text[0]);
								d3.select('#statement').remove();
								var newText = d3.select('#visualization').append('text')
									.attr('class', 'noselect')
									.attr('id', 'statement')
									.attr('x', t_2_x).attr('y', t_2_y)
									.attr('style', 'font-weight: 900; fill:#008B8B;')
									.text('Great job!');								

								d3.selectAll('.link')
									.attr('style', 'stroke: black; stroke-width: 1px;');
								
							}
													
						} else {
							var text = document.getElementById('warning').childNodes;
							document.getElementById('warning').removeChild(text[0]);
							d3.select('#warning').remove();									
							var text_1 = d3.select('#visualization').append('text')
								.attr('class', 'noselect')
								.attr('id', 'warning')
								.attr('x', t_3_x).attr('y', t_3_y)
								.attr('style', 'font-weight: 900; fill: red;')
								.text('Make sure you select the other square that reflects this relationship.');							
						}
					} else {
						var text = document.getElementById('warning').childNodes;
						document.getElementById('warning').removeChild(text[0]);
						d3.select('#warning').remove();									
						var text_1 = d3.select('#visualization').append('text')
							.attr('class', 'noselect')
							.attr('id', 'warning')
							.attr('x', t_3_x).attr('y', t_3_y)
							.attr('style', 'font-weight: 900; fill: red;')
							.text('Your selection does not reflect this relatonship.');								
					}
					}
				});*/
				var ix = ans[0][0] - 1;
				var jy = ans[0][1] - 1;
				d3.select('#cell' + ix + '_' + jy)
					.attr('class', 'blueborder')
					.attr('style', 'fill: black; stroke: blue; stroke-width: 6px');
				d3.select('#cell' + jy + '_' + ix)
					.attr('class', 'blueborder')
					.attr('style', 'fill: black; stroke: blue; stroke-width: 6px');					
				
				for (var i = 0; i < data.length; i++){
					for (var j = 0; j < data.length; j ++){
						canvas.append('rect').attr('class', 'backgroundCell')
							.attr('width', w_cell).attr('height', h_cell)
							.attr('x', w_cell*(i+1))
							.attr('y', h_cell*(j+1))
							.attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: none;');							
					}
				}				
													
			});					
				
