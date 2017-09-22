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




			var mat = [];
			for (var i = 0; i < ans.length; i++){
				mat[i] = [];
				for (var j = 0; j < ans.length; j++){
					mat[i][j] = 0;
				}
			}

			mat[rorder[0][0]-1][rorder[0][1]-1] = 1;
			mat[rorder[0][1]-1][rorder[0][0]-1] = 1;

			mat[rorder[1][0]-1][rorder[1][1]-1] = 1;
			mat[rorder[1][1]-1][rorder[1][0]-1] = 1;	

			mat[rorder[2][0]-1][rorder[2][1]-1] = 1;
			mat[rorder[2][1]-1][rorder[2][0]-1] = 1;		

			mat[rorder[3][0]-1][rorder[3][1]-1] = 1;
			mat[rorder[3][1]-1][rorder[3][0]-1] = 1;	

			mat[rorder[4][0]-1][rorder[4][1]-1] = 1;
			mat[rorder[4][1]-1][rorder[4][0]-1] = 1;
			
			var canvas = d3.select('#visualization');	
			
			// generate random descriptions
			//var rand = [];
			//var rand2 = [];	
			var rand3 = [];
			/*while (rand.length <= 4){
				var numb = Math.round(Math.random()*4);
				if (rand.indexOf(numb) == -1) rand.push(numb)

			}*/
			var randcount = 0; // incorrect choices
			var randcount2 = 0; // correct choices
			var correct = [];
			while (rand3.length <= 3){
				var numb2 = Math.round(Math.random()*4) + 1;
				var numb3 = Math.round(Math.random()*4) + 1;
				var str = numb2 + '_' + numb3;
				var str2 = numb3 + '_' + numb2;
				if (numb2 != numb3){
						//if (str != '3_5' && str != '5_3'){
							if (rand2.indexOf(str) == -1 && rand2.indexOf(str2) == -1){
								// incorrect dscriptions
								if (rand3.indexOf(str) == -1 && rand3.indexOf(str2) == -1){
									if (randcount < 2){
										rand3.push(str);
										correct.push('0');
										randcount++;
									}
								}
							} else {
								// correct descriptions
								if (rand3.indexOf(str) == -1 && rand3.indexOf(str2) == -1){
									if (randcount2 < 2){
										rand3.push(str);
										correct.push('1')
										randcount2++;
									}
									/*if (rand3.length < 3){
										rand3.push(str);
										correct.push('1');
									} else {
										if (randcount <= 2) {
											rand3.push(str);
											correct.push('1');
										}
									}*/
								}
								//rand3.push(str);
							}
						//} 
					} 				
			}
			var descriptions = [];
			//var correct = [];
			for (var i = 0; i < rand3.length; i++){
				var ind1 = parseInt(rand3[i].split('_')[0])-1;
				var ind2 = parseInt(rand3[i].split('_')[1])-1;
				descriptions[i] = names[ind1] + ' and ' + names[ind2] + ' are friends.';
				
			}
			
			var tx = 850;
			var t_x = [];
			var t_y = [];
			var c_y = [];
			var cy = 15;
			var checkmark = [];
			t_x[0] = tx;
			t_y[0] = 100;
			
			
			t_x[1] = tx;
			t_y[1] = 130;
			
			t_x[2] = tx;
			t_y[2] = 160;
			
			t_x[3] = tx;
			t_y[3] = 190;
			
			for (var i = 0; i < t_y.length; i++){
				c_y[i] = t_y[i]-cy;
			}						
			
			for (var i = 0; i < rand3.length; i++){
				canvas.append('text')
					.attr('x', t_x[i])
					.attr('y', t_y[i])
					.text(descriptions[i])
					.attr('style', 'fill: black; font-weight: 900; font-size:20;')
					.attr('id','choice' + i)
					.attr('class','textChoices');

				canvas.append('circle')
					.attr('cx', t_x[i] - 20)
					.attr('cy', t_y[i] - 5)
					.attr('r', 5)
					.attr('id', 'button' + i)
					.attr('class','buttonChoices')
					.attr('style', 'fill:black');	
				
				checkmark[i] = canvas.append('g')
					.attr('class','check_mark')
					.attr('id', 'check_mark' + i)
					.attr('transform', 'translate(1140,' +  c_y[i] + ')')
					.attr('style', 'opacity:0');
				checkmark[i].append('line')
					.attr('x1', 0).attr('y1', 7.5)
					.attr('x2', 7.5).attr('y2', 15)
					.attr('style', 'stroke-width:2.5; stroke:red')
				checkmark[i].append('line')
					.attr('x1', 7.5).attr('y1', 15)
					.attr('x2', 15).attr('y2', 0)
					.attr('style', 'stroke-width:2.5; stroke:red')										
			}
			
			var correctCount = 0;
			d3.selectAll('.textChoices').on('mousemove', function(){
				this.setAttribute('style', 'fill: orange; font-weight: 900; font-size:20;');
				var id = this.getAttribute('id').split('choice')[1];
				document.getElementById('button' + id).setAttribute('style', 'fill:orange;');
			});

			d3.selectAll('.textChoices').on('mouseout', function(){
				this.setAttribute('style', 'fill: black; font-weight: 900; font-size:20;');
				var id = this.getAttribute('id').split('choice')[1];
				document.getElementById('button' + id).setAttribute('style', 'fill:black;');				
			});
			d3.selectAll('.buttonChoices').on('mousemove', function(){
				this.setAttribute('style', 'fill: orange');
				var id = this.getAttribute('id').split('button')[1];
				document.getElementById('choice' + id).setAttribute('style', 'fill: orange; font-weight: 900; font-size:20;');
			});

			d3.selectAll('.buttonChoices').on('mouseout', function(){
				this.setAttribute('style', 'fill: black');
				var id = this.getAttribute('id').split('button')[1];
				document.getElementById('choice' + id).setAttribute('style', 'fill: black; font-weight: 900; font-size:20;');				
			});			
						
			d3.selectAll('.textChoices').on('mousedown', function(){
				var id = parseInt(this.getAttribute('id').split('choice')[1]);
				if (correct[id] == "1"){
					d3.select('#check_mark' + id).attr('style','opacity: 1');
					correctCount++;
					clearWarning();
				} else{
					generateWarning();
				}
				if (correctCount == 2){
					d3.selectAll('.textChoices').on('mousedown',null);
				}
			});

			d3.selectAll('.buttonChoices').on('mousedown', function(){
				var id = parseInt(this.getAttribute('id').split('button')[1]);
				if (correct[id] == "1"){
					d3.select('#check_mark' + id).attr('style','opacity: 1');
					correctCount++;
					clearWarning();
				} else {
					generateWarning();
				}
				if (correctCount == 2){
					d3.selectAll('.buttonChoices').on('mousedown',null);
				}
			});
			
			
			
			/*var rorder = [];
			for (var i = 0; i < rand2.length; i++){
				rorder[i] = [];
				rorder[i][0] = parseInt(rand2[i].split('_')[0]);
				rorder[i][1] = parseInt(rand2[i].split('_')[1]);
			}			
			var nameBank = ['John', 'Nathan', 'Kevin', 'Philip', 'Sue'];
			var names = [' ',' ',' ',' ',' '];
			for (var i = 0; i < 5; i++){
				names[rand[i]] = nameBank[i];
			}*/			
			
			
			
				// draw node-link diagram
				/*var r = 100;
				var mid_x = 550;
				var mid_y = 200;
				var dim = ans.length; 
				var phi = Math.PI*2/dim;
				var p_x = [];
				var p_y = [];
				for (var i = 0; i < dim; i++){
					p_x[i] = mid_x + r*Math.cos(phi*i);
					p_y[i] = mid_y + r*Math.sin(phi*i);
					canvas.append('circle')
						.attr('r', 2)
						.attr('style', 'fill: black')
						.attr('cx', p_x[i])
						.attr('cy', p_y[i]);
				}
				for (var i = 0; i < dim; i++){
					for (var j = i+1; j < dim; j++){
						if (mat[i][j] == 1){
							canvas.append('line')
								.attr('id', 'line' + i+'_'+j)
								.attr('class','links')
								.attr('x1', p_x[i]).attr('y1', p_y[i])
								.attr('x2', p_x[j]).attr('y2', p_y[j])
								.attr('style', function(){
									//var ind1 = relations[sequence][0];
									//var ind2 = relations[sequence][1];
									//if ((i == ind1 && j == ind2) || (i == ind2 && j == ind1)){
										//return 'stroke: ' + colors[sequence] + '; stroke-width: 4px;';
									//} else {
										return 'stroke: black; stroke-width: 4px;';
									//}
									
								});
						}
					}
				}			
			
			
				var rx = 35;
				var ry = 35;							
				for (var i = 0; i < dim; i++){
					p_x[i] = mid_x + r*Math.cos(phi*i);
					p_y[i] = mid_y + r*Math.sin(phi*i);
					canvas.append('ellipse').attr('class', 'nodeLabel')
						.attr('id', 'nodeLabel_'+i)
						.attr('rx', rx)
						.attr('ry', ry)
						.attr('style', function(){
							var str;
							if (i == 1){
								return 'stroke: black; stroke-width: 2;fill: white';
							}
							else {
								return 'stroke: black; stroke-width: 2;fill: white';
							}
						})
						.attr('cx', p_x[i])
						.attr('cy', p_y[i]);
				}
				for (var i = 0; i < dim; i++){
					p_x[i] = mid_x + r*Math.cos(phi*i);
					p_y[i] = mid_y + r*Math.sin(phi*i);
					canvas.append('text').attr('class', 'nodeLabel')
						.attr('id', 'nodeLabel' + i)
						//.attr('r', 2)
						.attr('style', function(){
							if (i == 1){
								return 'fill: black';
							} else {
								return 'fill: black';
							}
							
						})
						.attr('x', p_x[i]-rx/2)
						.attr('y', p_y[i])
						.text(names[i]);
				}*/
				
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
				
				/*var text1 = svg.append('text')
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
				*/
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
				
				var xt_5 = 50;
				var yt_5 = 50;
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
					.text(' ');
					//.text('Draw a link in the node-link diagram that represents the blue-border squares.');
				var text_3 = d3.select('#visualization').append('text')
					.attr('class', 'noselect')
					.attr('id', 'warning')
					.attr('x', 25).attr('y', 60)
					.attr('style', 'font-weight: 900; fill: red;')
					.text(' ');						
				

				function clearWarning(){
									var text = document.getElementById('warning').childNodes;
									document.getElementById('warning').removeChild(text[0]);
									d3.select('#warning').remove();									
									var text_1 = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'warning')
										.attr('x', xt_5).attr('y', yt_5)
										.attr('style', 'font-weight: 900; fill: red;')
										.text(' ');					
				}
				function generateWarning(){
									var text = document.getElementById('warning').childNodes;
									document.getElementById('warning').removeChild(text[0]);
									d3.select('#warning').remove();									
									var text_1 = svg.append('text')
										.attr('class', 'noselect')
										.attr('id', 'warning')
										.attr('x', xt_5).attr('y', yt_5)
										.attr('style', 'font-weight: 900; fill: red;')
										.text('This choice is wrong');					
				}
				
				var mousedrag = 0;
				d3.selectAll('.node')
					.on('mousedown', function(){
						return;
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
									
									if (counter < ans.length){
									var ix = ans[counter][0] - 1;
									var jy = ans[counter][1] - 1;
										d3.select('#cell' + ix + '_' + jy)
											.attr('class', 'blueborder')
											.attr('style', 'fill: black; stroke: blue; stroke-width: 6px');
										d3.select('#cell' + jy + '_' + ix)
											.attr('class', 'blueborder')
											.attr('style', 'fill: black; stroke: blue; stroke-width: 6px');
									}		
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

				var canvas = svg.append('g').attr('class', 'canvas').attr('transform', 'translate(450,0	)');
				for (var i = 0; i < ans.length; i++){
					for (var j = 0; j < ans.length; j++){
						canvas.append('rect').attr('class', 'cell')
							.attr('id', 'cell(' + i + ',' + j +')')
							.attr('width', w_cell).attr('height', h_cell)
							.attr('x', w_cell*(i+1))
							.attr('y', h_cell*(j+1))
							.attr('style', function(){
								var str;
								//if (data[i][ind[j]] == '1'){
								//	str = 'black';
								//}
								//else {
								
								if (mat[i][j] == 1){
									str = 'gray';
								}	else{
									str = 'white';
								}
									
								//} 
									
								return 'stroke: black; stroke-width: 2; opacity: 1; fill:' + str;
							});
						canvas.append('text').attr('class', 'noselect')
							//.attr('id', 'columnLabelText' + i)
						//.attr('x', w_cell*(i+1)+w_cell*1/10).attr('y', h_cell*(9)/10)
							.attr('transform', function(){
							var x = 1*w_cell*(i+1)+w_cell*1/10;
							var y = h_cell*9/10;
							return 'translate(' + x + ',' + y + ')rotate(-45)';
						}).text(function(){return names[i];});		

						canvas.append('text').attr('class', 'noselect')
							//.attr('id', 'rowLabelText' + i)
						//.attr('x', w_cell*(i+1)+w_cell*1/10).attr('y', h_cell*(9)/10)
							.attr('transform', function(){
								var x = w_cell*0/10;
								var y = 1*h_cell*(i+1) + 1/2*h_cell;
								return 'translate(' + x + ',' + y + ')';
							})
							.text(function(){return names[i];});								
											
					}
				}
					
			/*d3.csv("static/data/data5.csv", function(error, data){
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
													
			});*/					
				
