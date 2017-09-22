				var svg = d3.select('#visualization').append('g').attr('transform', 'translate(-250,50)');
				var r = 30;
				var cx1 = 600, cy1 = 80;
				var cx2 = 450, cy2 = 180;
				var cx3 = 750, cy3 = 180;

				var w_cell = 50;
				var h_cell = 50;
				var ind;
				var celldata;
				var mat = [];
				var drawBoxC, drawBoxR;
				var mouseEvt = 1;
				var userlog = [];			

				
				var line1 = svg.append('line')
					.attr('id', 'line1')
					.attr('x1', cx1).attr('y1', cy1)
					.attr('x2', cx2).attr('y2', cy2)
					.attr('style', 'stroke-width: 2; stroke:black');

				var line2 = svg.append('line')
					.attr('id','line2')
					.attr('x1', cx1).attr('y1', cy1)
					.attr('x2', cx3).attr('y2', cy3)
					.attr('style', 'stroke-width: 2; stroke:black');
				
				var cir1 = svg.append('circle')
					.attr('class', 'node1')
					.attr('r', 30)
					.attr('cx', cx1).attr('cy',cy1)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					
				var text1 = svg.append('text')
					.attr('class', 'node1')
					.attr('x', cx1 - r/2).attr('y', cy1+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text('Mary')	
					
				var cir2 = svg.append('circle')
					.attr('class', 'node2')
					.attr('r', 30)
					.attr('cx', cx2).attr('cy',cy2)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black');

				var text2 = svg.append('text')
					.attr('class', 'node2')
					.attr('x', cx2 - r/2).attr('y', cy2+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text('John')	
					
				var cir3 = svg.append('circle')
					.attr('class', 'node3')
					.attr('r', 30)
					.attr('cx', cx3).attr('cy',cy3)
					.attr('style', 'fill: white; stroke-width: 2; stroke:black');	

				var text3 = svg.append('text')
					.attr('class', 'node3')
					.attr('x', cx3 - r/2).attr('y', cy3+12/2)
					.attr('style', 'font: sans-serif; font-size: 12; font-weight:900')
					.text('Tom');



				d3.selectAll('.node1').on('mousemove', function(){
					cir1.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text1.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText1').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText1').attr('style', 'fill: orange; font-weight:900;');
					
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell1_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
				});
				d3.selectAll('.node1').on('mouseout', function(){
					cir1.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text1.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText1').attr('style', 'fill: black;');
					d3.select('#columnLabelText1').attr('style', 'fill: black;')
					
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell1_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')					
					
				});	
				
				
				d3.selectAll('.node2').on('mousemove', function(){
					cir2.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text2.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText0').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText0').attr('style', 'fill: orange; font-weight:900;');	
					
					
					d3.select('#cell0_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')									
				});
				d3.selectAll('.node2').on('mouseout', function(){
					cir2.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text2.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText0').attr('style', 'fill: black;');
					d3.select('#columnLabelText0').attr('style', 'fill: black;');	
					
					
					d3.select('#cell0_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')						
									
				});	
				
				
				d3.selectAll('.node3').on('mousemove', function(){
					cir3.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text3.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText2').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText2').attr('style', 'fill: orange; font-weight:900;');			
					
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')									
				});
				d3.selectAll('.node3').on('mouseout', function(){
					cir3.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text3.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText2').attr('style', 'fill: black;');
					d3.select('#columnLabelText2').attr('style', 'fill: black;');
					
					
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')												
				});					
											
					
				var text_1 = d3.select('#visualization').append('text')
					.attr('x', 425).attr('y', 25)
					.attr('style', 'font-weight: 900; fill:#008B8B;')
					.text('Description 1: John and Mary are friends');
								
				var text_2 = d3.select('#visualization').append('text')
					.attr('x', 425).attr('y', 45)
					.attr('style', 'font-weight: 900; fill:#008B8B;')
					.text('Description 2: Mary and Tom are friends.');	

				text_1.on('mousemove', function(){
					this.setAttribute('style', 'font-weight: 900; fill:blue;');
					d3.select('#line1').attr('style','stroke-width: 4; stroke: blue');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');
					
				});
				
				text_1.on('mouseout', function(){
					this.setAttribute('style', 'font-weight: 900; fill:#008B8B;');
					d3.select('#line1').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');					
				});	
				
				text_2.on('mousemove', function(){
					this.setAttribute('style', 'font-weight: 900; fill:red;');
					d3.select('#line2').attr('style','stroke-width: 4; stroke: red');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');					
				});
				
				text_2.on('mouseout', function(){
					this.setAttribute('style', 'font-weight: 900; fill:#008B8B;');
					d3.select('#line2').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');					
				});				
				
				d3.select('#line1').on('mousemove', function(){
					text_1.attr('style', 'font-weight: 900; fill:blue;')
					d3.select('#line1').attr('style','stroke-width: 4; stroke: blue');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');					
				});
				d3.select('#line1').on('mouseout', function(){
					text_1.attr('style', 'font-weight: 900; fill:#008B8B;')
					d3.select('#line1').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');							
				});
				
				d3.select('#line2').on('mousemove', function(){
					text_2.attr('style', 'font-weight: 900; fill:red;')
					d3.select('#line2').attr('style','stroke-width: 4; stroke: red');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');					
				});
				d3.select('#line2').on('mouseout', function(){
					text_2.attr('style', 'font-weight: 900; fill:#008B8B;')
					d3.select('#line2').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');							
				});						
				
													

			d3.csv("static/data/data.csv", function(error, data){
				celldata = data;
				var j = 0;
				ind = Object.keys(data[0]);
				

				
				var canvas = d3.select('#visualization').append('g')
					.attr('class', 'canvas')
					.attr('transform', 'translate(700,50)');
				for (var i = 0; i < data.length; i++){
					
					// Create column g
					var column = canvas.append('g').attr('id', 'gc' + i)
						.attr('class', 'column_g')
						.attr('transform', function(){
							var x = w_cell*(i+1);
							var y = h_cell*0;
							return 'translate(' + x + ',' + y + ')';
						});
					/*column.append('rect').attr('class', 'columnLabel')
						.attr('id', 'columnLabel'+i)
						.attr('width', w_cell).attr('height', h_cell)
						//.attr('x', w_cell*(i+1))
						.attr('y', h_cell*(0))
						.attr('style', 'stroke:white; fill:white; opacity: 0.5');*/
					column.append('text').attr('class', 'columnLabelText')
						.attr('id', 'columnLabelText' + i)
						//.attr('x', w_cell*(i+1)+w_cell*1/10).attr('y', h_cell*(9)/10)
						.attr('transform', function(){
							var x = 0*w_cell*(i+1)+w_cell*1/10;
							var y = h_cell*9/10;
							return 'translate(' + x + ',' + y + ')rotate(-45)';
						})
						.text(function(){return data.columns[i];});
						
					mat[i] = [];	
					for (var j = 0; j < data.length; j++){
						mat[i][j] = data[i][ind[j]];	
						/*column.append('rect').attr('class', 'cell')
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
							});*/
					}
					
					// Create row g
					var row = canvas.append('g').attr('id', 'gr' + i)
						.attr('class', 'row_g')
						.attr('transform', function(){
							var x = 0*w_cell;
							var y = h_cell*(i+1);
							return 'translate(' + x + ',' + y + ')';
						});
					
					/*row.append('rect').attr('class', 'rowLabel')
						.attr('id', 'rowLabel'+i)
						.attr('width', w_cell).attr('height', h_cell)
						.attr('x', w_cell*(0))
						//.attr('y', h_cell*(i+1))
						.attr('style', 'stroke:white; fill:white; opacity:0.5');*/					
					row.append('text').attr('class', 'rowLabelText')
						.attr('id', 'rowLabelText' + i)
						//.attr('x', w_cell*(i+1)+w_cell*1/10).attr('y', h_cell*(9)/10)
						.attr('transform', function(){
							var x = w_cell*0/10;
							var y = 0*h_cell*(i+1) + 1/2*h_cell;
							return 'translate(' + x + ',' + y + ')';
						})
						.text(function(){return data.columns[i];});					
				
					/*for (var j = 0; j < data.length; j++){
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
					}*/
				
						
				}
				for (var i = 0; i < data.length; i++){
					for (var j = 0; j < data.length; j ++){
						canvas.append('rect').attr('class', 'backgroundCell')
							.attr('id', 'cell' + i + '_'+ j)
							.attr('width', w_cell).attr('height', h_cell)
							.attr('x', w_cell*(i+1))
							.attr('y', h_cell*(j+1))
							.attr('style', function(){
								if (mat[i][j] == "1"){
									return 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;';
								} else {
									return 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;';
								}
								
							});							
					}
				}

				d3.select('#cell0_1').on('mousemove', function(){
					text_1.attr('style', 'font-weight: 900; fill:blue;')
					d3.select('#line1').attr('style','stroke-width: 4; stroke: blue');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');						
				});
				d3.select('#cell0_1').on('mouseout', function(){
					text_1.attr('style', 'font-weight: 900; fill:#008B8B;')
					d3.select('#line1').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');						
				});	
				
				d3.select('#cell1_0').on('mousemove', function(){
					text_1.attr('style', 'font-weight: 900; fill:blue;')
					d3.select('#line1').attr('style','stroke-width: 4; stroke: blue');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: blue; stroke-width: 6px; fill: black;');						
				});
				d3.select('#cell1_0').on('mouseout', function(){
					text_1.attr('style', 'font-weight: 900; fill:#008B8B;')
					d3.select('#line1').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell0_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell1_0').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');						
				});	
				
				
				d3.select('#cell1_2').on('mousemove', function(){
					text_2.attr('style', 'font-weight: 900; fill:red;')
					d3.select('#line2').attr('style','stroke-width: 4; stroke: red');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');						
				});
				d3.select('#cell1_2').on('mouseout', function(){
					text_2.attr('style', 'font-weight: 900; fill:#008B8B;')
					d3.select('#line2').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');						
				});	
				
				d3.select('#cell2_1').on('mousemove', function(){
					text_2.attr('style', 'font-weight: 900; fill:red;')
					d3.select('#line2').attr('style','stroke-width: 4; stroke: red');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: red; stroke-width: 6px; fill: black;');						
				});
				d3.select('#cell2_1').on('mouseout', function(){
					text_2.attr('style', 'font-weight: 900; fill:#008B8B;')
					d3.select('#line2').attr('style','stroke-width: 2; stroke: black');
					d3.select('#cell2_1').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');
					d3.select('#cell1_2').attr('style','opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;');						
				});		
				
				
				
				
				d3.select('#rowLabelText1').on('mousemove', function(){
					cir1.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text1.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText1').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText1').attr('style', 'fill: orange; font-weight:900;');
					
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell1_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')					
				});
				d3.select('#rowLabelText1').on('mouseout', function(){
					cir1.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text1.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText1').attr('style', 'fill: black;');
					d3.select('#columnLabelText1').attr('style', 'fill: black;')
					
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell1_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')						
				});
				
				d3.select('#columnLabelText1').on('mousemove', function(){
					cir1.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text1.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText1').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText1').attr('style', 'fill: orange; font-weight:900;');
					
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell1_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')					
				});
				d3.select('#columnLabelText1').on('mouseout', function(){
					cir1.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text1.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText1').attr('style', 'fill: black;');
					d3.select('#columnLabelText1').attr('style', 'fill: black;')
					
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell1_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')						
				});				
								
				
				
				
				d3.selectAll('#rowLabelText2').on('mousemove', function(){
					cir3.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text3.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText2').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText2').attr('style', 'fill: orange; font-weight:900;');			
					
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')									
				});
				d3.selectAll('#rowLabelText2').on('mouseout', function(){
					cir3.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text3.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText2').attr('style', 'fill: black;');
					d3.select('#columnLabelText2').attr('style', 'fill: black;');
					
					
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')												
				});		
				
				d3.selectAll('#columnLabelText2').on('mousemove', function(){
					cir3.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text3.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText2').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText2').attr('style', 'fill: orange; font-weight:900;');			
					
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')									
				});
				d3.selectAll('#columnLabelText2').on('mouseout', function(){
					cir3.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text3.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText2').attr('style', 'fill: black;');
					d3.select('#columnLabelText2').attr('style', 'fill: black;');
					
					
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell2_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')												
				});								
				
				
				
				d3.selectAll('#rowLabelText0').on('mousemove', function(){
					cir2.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text2.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText0').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText0').attr('style', 'fill: orange; font-weight:900;');	
					
					
					d3.select('#cell0_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')									
				});
				d3.selectAll('#rowLabelText0').on('mouseout', function(){
					cir2.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text2.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText0').attr('style', 'fill: black;');
					d3.select('#columnLabelText0').attr('style', 'fill: black;');	
					
					
					d3.select('#cell0_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')						
									
				});					

				d3.selectAll('#columnLabelText0').on('mousemove', function(){
					cir2.attr('style', 'fill: white; stroke-width: 2; stroke:orange');
					text2.attr('style', 'font: sans-serif; font-size: 12; fill: orange; font-weight: 900;');
					d3.select('#rowLabelText0').attr('style', 'fill: orange; font-weight:900;');
					d3.select('#columnLabelText0').attr('style', 'fill: orange; font-weight:900;');	
					
					
					d3.select('#cell0_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: black;')
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: orange; stroke-width: 5px; fill: white;')									
				});
				d3.selectAll('#columnLabelText0').on('mouseout', function(){
					cir2.attr('style', 'fill: white; stroke-width: 2; stroke:black');
					text2.attr('style', 'font: sans-serif; font-size: 12; fill: black;');
					d3.select('#rowLabelText0').attr('style', 'fill: black;');
					d3.select('#columnLabelText0').attr('style', 'fill: black;');	
					
					
					d3.select('#cell0_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell0_1').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell0_2').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')
					d3.select('#cell1_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: black;')
					d3.select('#cell2_0').attr('style', 'opacity: 0.5; stroke: black; stroke-width: 2px; fill: white;')						
									
				});					
							
								
			});
