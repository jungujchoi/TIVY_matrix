			var w_cell = 75;
			var h_cell = 75;
			var ind;
			var celldata;
			var mat = [];
			var drawBoxC, drawBoxR;
			var mouseEvt = 1;
			var userlog = [];
			
			var highlighted = [1,3,0];
			var relations = [[0,2],[0,4],[2,3]];
			var target = 0;
			var sequence = 0;
			var colors = ['red', 'magenta', 'blue', 'none'];
			var common = 0;
			var task = 0;		
			//document.getElementById('submit').style.display = 'none';
			
			//var svg = d3.select('#visualization').append('svg')
			//		.attr('height', '600px')
			//		.attr('width', '600px');
			var svg = d3.select('#visualization1'); 
			//var svg2 = d3.select('#visualization2').append('svg')
			//		.attr('height', '600px')
			//		.attr('width', '600px');
			
				function arrayToStr(log){
					var str = '';
					for (var i = 0; i < log.length; i++){
						str = str + '[';
						for (var j = 0; j < log[i].length; j++){
							if (j == 0)
							str = str + log[i][j];
							else str= str + ': ' + log[i][j];
						}
						if (i != log.length - 1)
						str = str + ']; ';
						else str = str + ']';
					}
					return str;
				}			
			
			d3.csv("static/data/data3.csv", function(error, data){
				celldata = data;
				var j = 0;
				ind = Object.keys(data[0]);
				

				
				var canvas = svg.append('g').attr('class', 'canvas');
				for (var i = 0; i < data.length; i++){
					
					// Create column g
					var column = canvas.append('g').attr('id', 'gc' + i)
						.attr('class', 'column_g')
						.attr('transform', function(){
							var x = w_cell*(i+1);
							var y = h_cell*0;
							return 'translate(' + x + ',' + y + ')';
						});
					column.append('rect').attr('class', 'columnLabel')
						.attr('id', 'columnLabel'+i)
						.attr('width', w_cell).attr('height', h_cell)
						//.attr('x', w_cell*(i+1))
						.attr('y', h_cell*(0))
						.attr('style', 'stroke:white; fill:white; opacity: 0.5');
					column.append('text').attr('class', 'columnLabel')
						.attr('id', 'columnLabelText' + i)
						//.attr('x', w_cell*(i+1)+w_cell*1/10).attr('y', h_cell*(9)/10)
						.attr('transform', function(){
							var x = 0*w_cell*(i+1)+w_cell*1/10;
							var y = h_cell*9/10;
							return 'translate(' + x + ',' + y + ')rotate(-45)';
						}).attr('style', function(){
							if (i==1 || i==4){
								return 'fill: red; font-weight:900';
							} else return 'fill: black;';
						})
						.text(function(){return data.columns[i];});
						
					mat[i] = [];	
					for (var j = 0; j < data.length; j++){
						mat[i][j] = data[i][ind[j]];	
						column.append('rect').attr('class', 'cell')
							.attr('id', 'cell' + j)
							.attr('width', w_cell).attr('height', h_cell)
							//.attr('x', w_cell*(i+1))
							.attr('y', h_cell*(j+1))
							.attr('style', function(){
								var str;
								if (data[i][ind[j]] == '1'){
									str = 'black';
								}
								else {
									str = 'white';
								} 
									
								return 'stroke: none; stroke-width: none; opacity: 0.5; fill:' + str;
							});
					}
					
					// Create row g
					var row = canvas.append('g').attr('id', 'gr' + i)
						.attr('class', 'row_g')
						.attr('transform', function(){
							var x = 0*w_cell;
							var y = h_cell*(i+1);
							return 'translate(' + x + ',' + y + ')';
						});
					
					row.append('rect').attr('class', 'rowLabel')
						.attr('id', 'rowLabel'+i)
						.attr('width', w_cell).attr('height', h_cell)
						.attr('x', w_cell*(0))
						//.attr('y', h_cell*(i+1))
						.attr('style', 'stroke:white; fill:white; opacity:0.5');					
					row.append('text').attr('class', 'rowLabel')
						.attr('id', 'rowLabelText' + i)
						//.attr('x', w_cell*(i+1)+w_cell*1/10).attr('y', h_cell*(9)/10)
						.attr('transform', function(){
							var x = w_cell*0/10;
							var y = 0*h_cell*(i+1) + 1/2*h_cell;
							return 'translate(' + x + ',' + y + ')';
						}).attr('style', function(){
							if (i==1 || i==4){
								return 'fill: red; font-weight:900';
							} else return 'fill: black;';
						})
						.text(function(){return data.columns[i];});					
				
					for (var j = 0; j < data.length; j++){
						row.append('rect').attr('class', 'cell')
							.attr('id', 'cell' + j)
							.attr('width', w_cell).attr('height', h_cell)
							.attr('x', w_cell*(j+1))
							//.attr('y', h_cell*(i+1))
							.attr('style', function(){
								var str;
								if (data[i][ind[j]] == '1'){
									str = 'black';
								}
								else {
									str = 'white';
								} 
									
								return 'stroke: none; stroke-width: none; opacity: 0.5; fill:' + str;
							});						
					}
		
				}
				
				d3.selectAll('.cell').on('mousedown', function(){
										var str = this.getAttribute('id') + ' in ' + this.parentNode.getAttribute('id');
										var ind1 = -1;
										var ind2 = -1;
										var ind3 = -1; 
										
										//document.getElementById('myText2').value = str;
										/*var ind1 = parseInt(this.getAttribute('id').split('cell')[1]);
										if (this.parentNode.getAttribute('id').split('gr').length == 1){
											var ind2 = parseInt(this.parentNode.getAttribute('id').split('gc')[1])
										} else {
											var ind3 = parseInt(this.parentNode.getAttribute('id').split('gr')[1])
										}
										if (ind2 == -1){
											var selection = [ind3, ind1];
											if ((selection[1] == relations[sequence][0]) && ((selection[0] == relations[sequence][1]))){
												if (target == 0.5){
													document.getElementById('logMsg').innerHTML = 'Great Job!';
													var fill = this.getAttribute('style').split('fill:')[1];
													this.setAttribute('style', 'stroke: '+ colors[sequence]+' ; stroke-width: 10; opacity: 0.5; fill:' + fill);													
													target = 1;
												} else {
													target = 0.3;
													document.getElementById('logMsg').innerHTML = 'Now find the other element that represents the same relationship.';
													var fill = this.getAttribute('style').split('fill:')[1];
													this.setAttribute('style', 'stroke: '+ colors[sequence]+' ; stroke-width: 10; opacity: 0.5; fill:' + fill);														
												}

											} else {
												document.getElementById('logMsg').innerHTML = 'This element does not represent the highlighted connection. Try again.';
											}
										} else {
											var selection = [ind1, ind2];
											if ((selection[0] == relations[sequence][0]) && ((selection[1] == relations[sequence][1]))){
												if (target == 0.3){
													document.getElementById('logMsg').innerHTML = 'Great Job!';
													var fill = this.getAttribute('style').split('fill:')[1];
													this.setAttribute('style', 'stroke: '+ colors[sequence]+' ; stroke-width: 10; opacity: 0.5; fill:' + fill);															
													target = 1;
												} else {
													target = 0.5;
													document.getElementById('logMsg').innerHTML = 'Now find the other element that represents the same relationship.';
													var fill = this.getAttribute('style').split('fill:')[1];
													this.setAttribute('style', 'stroke: '+ colors[sequence]+' ; stroke-width: 10; opacity: 0.5; fill:' + fill);																											
												}

											} else {
												document.getElementById('logMsg').innerHTML = 'This element does not represent the highlighted connection. Try again.';	
											}											
										}
										
										if (target == 1){
											target = 0;
											sequence++;
											if (sequence == 3){
												document.getElementById('logMsg').innerHTML = 'Great job! You may move onto the next tutorial!';
												d3.selectAll('.cell').on('mousedown', null);
											} else {
												document.getElementById('logMsg').innerHTML = 'Great job! Now find the elements that represents the ' + colors[sequence] + 'connection.';	
												var ind1 = relations[sequence][0];
												var ind2 = relations[sequence][1];
												d3.selectAll('#line' + ind1 + '_' + ind2)
													.attr('style', 'stroke: ' + colors[sequence] + '; stroke-width: 4px');
												d3.selectAll('#line' + ind2 + '_' + ind1)
													.attr('style', 'stroke: ' + colors[sequence] + '; stroke-width: 4px');												
											}											
										}*/

										
										document.getElementById('logMsg').innerHTML = 'Try to select column/row labels.'	;
										userlog.push(['mousedown', str, timeCount/100]);
										var clickdata = arrayToStr(userlog);
						
										document.getElementById('clickdata').value = clickdata;										
										});
				
				for (var i = 0; i < data.length; i++){
					for (var j = 0; j < data.length; j ++){
						canvas.append('rect').attr('class', 'backgroundCell')
							.attr('width', w_cell).attr('height', h_cell)
							.attr('x', w_cell*(i+1))
							.attr('y', h_cell*(j+1))
							.attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: none;');							
					}
				}				
				
				var dx, dy;
				var mousedrag;
				
		
				
				d3.selectAll('.columnLabel')
					.on('mousedown', function(){
						if (mouseEvt == 1){
						var logtime = timeCount/100;
						var logStr = 'Column ' + this.parentNode.getAttribute('id');	
						var parent = this.parentNode;
						var temp = parent.cloneNode(true);
						d3.select(temp).selectAll('.cell')
							.attr('style', function() {
								var style = this.getAttribute('style').split(';');
								var str = 'stroke: red; stroke-width: 5px;';
								for (var s = 2; s < style.length; s++){
									if (s == style.length - 1){
										if (style[s] == ' fill:black')
										str = str + ' fill:red';
										else str = str + ' fill:white'; 
									} else {
										str = str + style[s]+ ';'; 
									}
								}
								return str;								
							});
						//d3.select(temp).selectAll('.columnLabel')
						//	.attr('style', 'fill: white; opacity: 0.5');
							
						d3.select(temp).selectAll('text')
							.attr('fill', 'red');
							
						document.getElementsByClassName('canvas')[0].appendChild(temp);
						mousedrag = 1;
						dx = event.clientX - parent.getAttribute('transform').split('(')[1].split(',')[0];	
						
						d3.select('.canvas')
							.on('mousemove', function(){
								var x = event.clientX-dx;
								var y = parent.getAttribute('transform').split(')')[0].split(',')[1];
								if (x < w_cell){
									x = w_cell;
								} else if (x > w_cell * data.length){
									x = w_cell * data.length;
								}								
								if (mousedrag == 1)
								temp.setAttribute('transform', 'translate(' + x + ',' + y + ')');
							})
							.on('mouseup', function(){
								//var x = event.clientX;
								var x = parseFloat(temp.getAttribute('transform').split(',')[0].split('(')[1]);
								var id = temp.getAttribute('id');
								
								temp.remove();
								mousedrag = 0;
								var newColumn = swapColumn(id, x);
								logStr = logStr + ' to gc' + newColumn;
								userlog.push([logStr, logtime]);
								var clickdata = arrayToStr(userlog);
						
								document.getElementById('clickdata').value = clickdata;								
								d3.select('.canvas').on('mousemove', null);
								d3.select('.canvas').on('mouseup', null);
							});
						}	
						//var c = 0;
					});
					
					
				d3.selectAll('.rowLabel')
					.on('mousedown', function(){
						if (mouseEvt == 1){
						var logtime = timeCount/100;
						var logStr = 'Row ' + this.parentNode.getAttribute('id');	
						var parent = this.parentNode;
						mousedrag = 1;
						
						var temp = parent.cloneNode(true);
						d3.select(temp).selectAll('.cell')
							.attr('style', function() {
								var style = this.getAttribute('style').split(';');
								var str = 'stroke: red; stroke-width: 5px;';
								for (var s = 2; s < style.length; s++){
									if (s == style.length - 1){
										if (style[s] == ' fill:black')
										str = str + ' fill:red';
										else str = str + ' fill:white'; 
									} else {
										str = str + style[s]+ ';'; 
									}
								}
								return str;								
							});						

						d3.select(temp).selectAll('.rowLabel')
							//.attr('style', 'fill: white; opacity: 0.5');
							
						d3.select(temp).selectAll('text')
							.attr('fill', 'red');
						document.getElementsByClassName('canvas')[0].appendChild(temp);
						mousedrag = 1;						
						dy = event.clientY - parent.getAttribute('transform').split(')')[0].split(',')[1];	
						
						d3.select('.canvas')
							//.attr('style', 'fill: white; stroke: red; stroke-width: 5px; opacity: 0.5')
							.on('mousemove', function(){
								var y = event.clientY-dy;
								//var y = this.getAttribute('transform').split(')')[0].split(',')[1];
								if (y < h_cell){
									y = h_cell;
								} else if (y > h_cell * data.length){
									y = h_cell * data.length;
								}								
								if (mousedrag == 1)
								temp.setAttribute('transform', 'translate(' + 0 + ',' + y + ')');
							})
							.on('mouseup', function(){
								
								
								mousedrag = 0;
								var id = temp.getAttribute('id');
								var y = parseFloat(temp.getAttribute('transform').split(',')[1].split(')')[0]);

								temp.remove();
								var newRow = swapRow(id, y);
								logStr = logStr + ' to gr' + newRow;
								userlog.push([logStr, logtime]);	
										var clickdata = arrayToStr(userlog);
						
										document.getElementById('clickdata').value = clickdata;															
								d3.select('.canvas').on('mouseup', null);
								d3.select('.canvas').on('mousemove', null);
							});
						}

					});					
					
		
				
				// draw node-link diagram
				r = 200;
				mid_x = 750;
				mid_y = 300;
				phi = Math.PI*2/ind.length;
				p_x = [];
				p_y = [];
				for (var i = 0; i < ind.length; i++){
					p_x[i] = mid_x + r*Math.cos(phi*i);
					p_y[i] = mid_y + r*Math.sin(phi*i);
					svg.append('circle')
						.attr('r', 2)
						.attr('style', 'fill: black')
						.attr('cx', p_x[i])
						.attr('cy', p_y[i]);
				}
				for (var i = 0; i < ind.length; i++){
					for (var j = i+1; j < ind.length; j++){
						if (mat[i][j] == "1"){
							svg.append('line')
								.attr('id', 'line' + i+'_'+j)
								.attr('class','links')
								.attr('x1', p_x[i]).attr('y1', p_y[i])
								.attr('x2', p_x[j]).attr('y2', p_y[j])
								.attr('style', function(){
									var ind1 = relations[sequence][0];
									var ind2 = relations[sequence][1];
									if ((i == ind1 && j == ind2) || (i == ind2 && j == ind1)){
										return 'stroke: ' + colors[sequence] + '; stroke-width: 4px;';
									} else {
										return 'stroke: black; stroke-width: 4px;';
									}
									
								});
						}
					}
				}			
				var rx = 50;
				var ry = 25;							
				for (var i = 0; i < ind.length; i++){
					p_x[i] = mid_x + r*Math.cos(phi*i);
					p_y[i] = mid_y + r*Math.sin(phi*i);
					svg.append('ellipse').attr('class', 'nodeLabel')
						.attr('id', 'nodeLabel_'+i)
						.attr('rx', 50)
						.attr('ry', 25)
						.attr('style', function(){
							var str;
							if (i == 1 || i == 4){
								return 'stroke: red; stroke-width: 2;fill: white';
							}
							else {
								return 'stroke: black; stroke-width: 2;fill: white';
							}
						})
						.attr('cx', p_x[i])
						.attr('cy', p_y[i]);
				}
				for (var i = 0; i < ind.length; i++){
					p_x[i] = mid_x + r*Math.cos(phi*i);
					p_y[i] = mid_y + r*Math.sin(phi*i);
					svg.append('text').attr('class', 'nodeLabel')
						.attr('id', 'nodeLabel' + i)
						//.attr('r', 2)
						.attr('style', function(){
							if (i == 1 || i == 4){
								return 'fill: red; font-weight: 900';
							} else {
								return 'fill: black';
							}
							
						})
						.attr('x', p_x[i]-rx/2)
						.attr('y', p_y[i])
						.text(ind[i]);
				}																
			});
			function swapRow(id, y){
				var row = parseInt(id.split('gr')[1]);
				
				var newRow;
			
				for (var i = 0; i < celldata.length; i++){
					if (y <= (i+1)*h_cell && y > (i+0.5)*h_cell){
						newRow = i;
					} else if (y <= (i+1)*h_cell && y > (i)*h_cell){
						newRow = i-1;
					}
				}
				if (row == common){
					common = newRow;
				} else if (newRow == common){
					common = row;
				}				
				if (row == newRow) return row;

				
				rearrangeCell(row, newRow);
				// change position


				var trans1 = document.getElementById('gr'+row).getAttribute('transform');
				var trans2 = document.getElementById('gr'+newRow).getAttribute('transform');

				var x1 = parseFloat(trans1.split(',')[0].split('(')[1]);
				var y1 = parseFloat(trans1.split(',')[1].split(')')[0]);

				var x2 = parseFloat(trans2.split(',')[0].split('(')[1]);
				var y2 = parseFloat(trans2.split(',')[1].split(')')[0]);
				
				var cap = 75 * Math.abs(row-newRow);
				
				var timing = setInterval(frame, 5);
				var count = 1;
				var int_x_1 = (x2-x1)/cap;
				var int_x_2 = -int_x_1;
				var int_y_1 = (y2-y1)/cap;
				var int_y_2 = -int_y_1;
				
				
				return newRow;
				
				function frame(){
					if (count > cap) {
						clearInterval(timing);
						mouseEvt = 1;
						rest();
						runCheck();
						//return newRow;
					}
					else {
						// deactivate any re-ordering
						mouseEvt = 0;
						
						var x = x1 + int_x_1*count;
						var y = y1 + int_y_1*count;
						document.getElementById('gr'+row).setAttribute('transform', 'translate(' + x + ',' + y + ')');
						document.getElementById('gc'+row).setAttribute('transform', 'translate(' + y + ',' + x + ')');
						
						var x = x2 + int_x_2*count;
						var y = y2 + int_y_2*count;
						document.getElementById('gr'+newRow).setAttribute('transform', 'translate(' + x + ',' + y + ')');	
						document.getElementById('gc'+newRow).setAttribute('transform', 'translate(' + y + ',' + x + ')');
						count++;
						
					}

				}


				function rest(){
				swapCellc(row, newRow);
				
				var trans1 = document.getElementById('gc'+row).getAttribute('transform');
				var trans2 = document.getElementById('gc'+newRow).getAttribute('transform');
				
				swapCellr(row, newRow);
				
				document.getElementById('gr'+newRow).setAttribute('id', 'gr_'+ row);
				document.getElementById('gr'+row).setAttribute('id', 'gr_'+newRow);
				
				document.getElementById('gc'+newRow).setAttribute('id', 'gc_' + row);	
				document.getElementById('gc'+row).setAttribute('id', 'gc_' + newRow);	
				
				
				document.getElementById('gr_'+ row).setAttribute('id', 'gr'+ row);
				document.getElementById('gr_'+ newRow).setAttribute('id', 'gr'+newRow);
				
				document.getElementById('gc_' + row).setAttribute('id', 'gc' + row);	
				document.getElementById('gc_' + newRow).setAttribute('id', 'gc' + newRow);				
				}					
				
			}
			
			function findCell(groups, id, ind){
				for (var i = 0; i < groups.length; i++){
					if (groups[i].getAttribute('id') == id + ind){
						groups[i].setAttribute('id', id + '_' + ind);
						return groups[i];
					}
				}
			}
			
			function rearrangeCell(column, newColumn){
				document.getElementById('gr'+newColumn)
					.appendChild(findCell(document.getElementById('gr'+column).childNodes, 'cell', newColumn));

				document.getElementById('gr'+newColumn)
					.appendChild(findCell(document.getElementById('gr'+column).childNodes, 'cell', column));
				
				document.getElementById('gr'+column)
					.appendChild(findCell(document.getElementById('gr'+newColumn).childNodes, 'cell', newColumn));
					
				document.getElementById('gr'+column)
					.appendChild(findCell(document.getElementById('gr'+newColumn).childNodes, 'cell', column));	
				d3.selectAll('#cell_' + newColumn).attr('id', 'cell' + newColumn);
				d3.selectAll('#cell_' + column).attr('id', 'cell' + column);
				


				document.getElementById('gc'+newColumn)
					.appendChild(findCell(document.getElementById('gc'+column).childNodes, 'cell', newColumn));

				document.getElementById('gc'+newColumn)
					.appendChild(findCell(document.getElementById('gc'+column).childNodes, 'cell', column));
				
				document.getElementById('gc'+column)
					.appendChild(findCell(document.getElementById('gc'+newColumn).childNodes, 'cell', newColumn));
					
				document.getElementById('gc'+column)
					.appendChild(findCell(document.getElementById('gc'+newColumn).childNodes, 'cell', column));	
									
				d3.selectAll('#cell_' + newColumn).attr('id', 'cell' + newColumn);
				d3.selectAll('#cell_' + column).attr('id', 'cell' + column);									
			}
			function swapColumn(id, x){
				var column = parseInt(id.split('gc')[1]);
				
				var newColumn;
				for (var i = 0; i < celldata.length; i++){
					if (x <= (i+1)*w_cell && x > (i+0.5)*w_cell){
						newColumn = i;
					} else if (x <= (i+1)*w_cell && x > (i)*w_cell){
						newColumn = i-1;
					}
				}
				if (column == common){
					common = newColumn;
				} else if (newColumn == common){
					common = column;
				}
				if (column == newColumn) return column;

				
				// change position
				var trans1 = document.getElementById('gr'+column).getAttribute('transform');
				var trans2 = document.getElementById('gr'+newColumn).getAttribute('transform');
				var x1 = parseFloat(trans1.split(',')[0].split('(')[1]);
				var y1 = parseFloat(trans1.split(',')[1].split(')')[0]);

				var x2 = parseFloat(trans2.split(',')[0].split('(')[1]);
				var y2 = parseFloat(trans2.split(',')[1].split(')')[0]);			
				
				rearrangeCell(column, newColumn);
				
				//document.getElementById('gr'+column).setAttribute('transform', trans2);
				//document.getElementById('gr'+newColumn).setAttribute('transform', trans1);
				
				var cap = 75*Math.abs(column-newColumn);
				
				var timing = setInterval(frame, 5);
				var count = 1;
				var int_x_1 = (x2-x1)/cap;
				var int_x_2 = -int_x_1;
				var int_y_1 = (y2-y1)/cap;
				var int_y_2 = -int_y_1;
				
				return newColumn;
				
				function frame(){
					if (count > cap) {
						clearInterval(timing);
						mouseEvt = 1;
						rest();
						runCheck();
					}
					else {
						// deactivate any re-ordering
						mouseEvt = 0;
						
						var x = x1 + int_x_1*count;
						var y = y1 + int_y_1*count;
						document.getElementById('gr'+column).setAttribute('transform', 'translate(' + x + ',' + y + ')');
						document.getElementById('gc'+column).setAttribute('transform', 'translate(' + y + ',' + x + ')');
						
						var x = x2 + int_x_2*count;
						var y = y2 + int_y_2*count;
						document.getElementById('gr'+newColumn).setAttribute('transform', 'translate(' + x + ',' + y + ')');	
						document.getElementById('gc'+newColumn).setAttribute('transform', 'translate(' + y + ',' + x + ')');
						count++;
						
					}

				}
				
				
				function rest(){
				swapCellr(column, newColumn);
				
				
				var trans1 = document.getElementById('gc'+column).getAttribute('transform');
				var trans2 = document.getElementById('gc'+newColumn).getAttribute('transform');

				
					
	
				
				//document.getElementById('gc'+column).setAttribute('transform', trans2);				
				//document.getElementById('gc'+newColumn).setAttribute('transform', trans1);	
				
				
				
				swapCellc(column, newColumn);
				
				// change index
				document.getElementById('gr'+newColumn).setAttribute('id', 'gr_'+ column);
				document.getElementById('gr'+column).setAttribute('id', 'gr_'+newColumn);
				
				document.getElementById('gc'+newColumn).setAttribute('id', 'gc_' + column);	
				document.getElementById('gc'+column).setAttribute('id', 'gc_' + newColumn);	
				
				
				document.getElementById('gr_'+ column).setAttribute('id', 'gr'+ column);
				document.getElementById('gr_'+ newColumn).setAttribute('id', 'gr'+newColumn);
				
				document.getElementById('gc_' + column).setAttribute('id', 'gc' + column);	
				document.getElementById('gc_' + newColumn).setAttribute('id', 'gc' + newColumn);					
				}
				
									
				//var c;
			}			
			
			function runCheck(){
				var children = document.getElementById('gr'+common).childNodes;
				var children2 = document.getElementById('gc'+common).childNodes;
				var cell = [];
				for (var i = 0; i < children.length; i++){
					if (children[i].getAttribute('class') == 'cell'){
						var str = children[i].getAttribute('style').split(':');
						if (str[str.length-1] == 'black'){
							var ind = parseInt(children[i].getAttribute('id').split('cell')[1]);
							cell.push([i,ind]);
						}
					}
				}
				if (Math.abs(cell[0][1]-cell[1][1]) == 1){
					document.getElementById('logMsg').innerHTML = 'Great Job! Now you may move onto the next tutorial';
					
					
					children[cell[0][0]].setAttribute('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black' );	
					children[cell[1][0]].setAttribute('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black' );
					
					d3.select('#gc'+cell[0][1]).select('#cell'+common)
						.attr('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black')
					d3.select('#gc'+cell[1][1]).select('#cell'+common)
						.attr('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black')
											
					children2[cell[0][0]].setAttribute('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black' );	
					children2[cell[1][0]].setAttribute('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black' );

					d3.select('#gr'+cell[0][1]).select('#cell'+common)
						.attr('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black')
					d3.select('#gr'+cell[1][1]).select('#cell'+common)
						.attr('style', 'stroke: red ; stroke-width: 10; opacity: 0.5; fill:black')
						
						
					d3.select('#line0_1').attr('style', 'stroke: red; stroke-width: 4px');
					d3.select('#line1_0').attr('style', 'stroke: red; stroke-width: 4px');
					d3.select('#line0_4').attr('style', 'stroke: red; stroke-width: 4px');
					d3.select('#line4_0').attr('style', 'stroke: red; stroke-width: 4px');
					
					d3.select('#nodeLabel_0').attr('style', 'stroke: blue; stroke-width: 2;fill: white');
					d3.select('#nodeLabel0').attr('style', 'fill: blue; font-weight:900');
					
					d3.select('#columnLabelText0').attr('style', 'fill: blue; font-weight:900');
					d3.select('#rowLabelText0').attr('style', 'fill: blue; font-weight:900');
					
					d3.select('')
						
					//d3.select('#line'+common+'_'+cell[0][1])
					//	.attr('style', 'stroke: red; stroke-width: 4px;');
					//d3.select('#line'+cell[0][1]+'_'+common)
					//	.attr('style', 'stroke: red; stroke-width: 4px;')	

					//d3.select('#line'+common+'_'+cell[1][1])
					//	.attr('style', 'stroke: red; stroke-width: 4px;');
					//d3.select('#line'+cell[1][1]+'_'+common)
					//	.attr('style', 'stroke: red; stroke-width: 4px;')
						

					//d3.select('#line'+common+'_'+cell[0][1])
					//	.attr('style', 'stroke: red; stroke-width: 4px;');
					//d3.select('#line'+cell[0][1]+'_'+common)
					//	.attr('style', 'stroke: red; stroke-width: 4px;')						
																		
					task = 1;								
				} else {
					children[cell[0][0]].setAttribute('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black' );	
					children[cell[1][0]].setAttribute('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black' );
					
					d3.select('#gc'+cell[0][1]).select('#cell'+common)
						.attr('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black')
					d3.select('#gc'+cell[1][1]).select('#cell'+common)
						.attr('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black')
											
					children2[cell[0][0]].setAttribute('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black' );	
					children2[cell[1][0]].setAttribute('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black' );

					d3.select('#gr'+cell[0][1]).select('#cell'+common)
						.attr('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black')
					d3.select('#gr'+cell[1][1]).select('#cell'+common)
						.attr('style', 'stroke: none ; stroke-width: 0; opacity: 0.5; fill:black')		
					d3.select('#line0_1').attr('style', 'stroke: black; stroke-width: 4px');
					d3.select('#line1_0').attr('style', 'stroke: black; stroke-width: 4px');
					d3.select('#line0_4').attr('style', 'stroke: black; stroke-width: 4px');
					d3.select('#line4_0').attr('style', 'stroke: black; stroke-width: 4px');
					
					d3.select('#nodeLabel_0').attr('style', 'stroke: black; stroke-width: 2;fill: white');
					d3.select('#nodeLabel0').attr('style', 'fill: black; font-weight:900');
					
					d3.select('#columnLabelText0').attr('style', 'fill: black; ');
					d3.select('#rowLabelText0').attr('style', 'fill: black; ');															
				}
			}
			
		function swapCellc(ind1, ind2){
			for (var i = 0; i < celldata.length; i++){
				if (i != ind1 && i != ind2){
					var column = d3.select(document.getElementById('gc' + i))
						.selectAll('.cell');
					for (var j = 0; j < celldata.length; j++){
						if (column._groups[0][j].getAttribute('id') == 'cell' + ind1){
							var y1 = column._groups[0][j].getAttribute('y');
							column._groups[0][j].setAttribute('id', 'cell_' + ind1);
						} else if (column._groups[0][j].getAttribute('id') == 'cell' + ind2){
							var y2 = column._groups[0][j].getAttribute('y');
							column._groups[0][j].setAttribute('id', 'cell_' + ind2);
						}
					}
					d3.select('#cell_' + ind1).attr('id', 'cell' + ind2).attr('y', y2);
					d3.select('#cell_' + ind2).attr('id', 'cell' + ind1).attr('y', y1);
			
				}
			}
		}

		function swapCellr(ind1, ind2){
			for (var i = 0; i < celldata.length; i++){
				if (i != ind1 && i != ind2){
					var column = d3.select(document.getElementById('gr' + i))
						.selectAll('.cell');
						
					for (var j = 0; j < celldata.length; j++){
						if (column._groups[0][j].getAttribute('id') == 'cell' + ind1){
							var x1 = column._groups[0][j].getAttribute('x');
							column._groups[0][j].setAttribute('id', 'cell_' + ind1);
						} else if (column._groups[0][j].getAttribute('id') == 'cell' + ind2){
							var x2 = column._groups[0][j].getAttribute('x');
							column._groups[0][j].setAttribute('id', 'cell_' + ind2);
						}
					}
					d3.select('#cell_' + ind1).attr('id', 'cell' + ind2).attr('x', x2);
					d3.select('#cell_' + ind2).attr('id', 'cell' + ind1).attr('x', x1);						
				
				}
			}
		}
		var timeCount = 0;		
		var timer = setInterval(frame, 10);
		function frame(){
			timeCount++;
			document.getElementById('totaltime').value = timeCount/100;
		}