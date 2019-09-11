function MoveBar(nLimit, ID)
{
var elem = document.getElementById(ID);
var width = nLimit-1;
if (nLimit == 0)
{
	elem.style.width = 0 + '%';
	elem.innerHTML = 0 + '%';
	return;
}
var id = setInterval(frame, 10);
function frame()
   {
    if (width >= nLimit)
        {
        clearInterval(id);
        }
    else
		{
		width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1  + '%';
		if (width > 100)
			{
			document.getElementById(ID).style.backgroundColor = "red";
			}
		else
			{
			document.getElementById(ID).style.backgroundColor = "#4CAF50";
			}
        }
    }
}
/*
Function for Button 1 #6
*/
function button1(obj)      
{
	var selected = document.getElementById('prog-bar').value ;   //get the progress bar to edit
	var Old_Value = document.getElementById(selected+'val').value ;   //get the old value
	var Move_Value = parseInt(Old_Value) + parseInt(obj.value);		// set the new range for progressbar
	if (Move_Value > 210 )											//To maintain the max Value
		{
			Move_Value = 210;
		}
	document.getElementById(selected+'val').value = Move_Value;    //set the new value for further calculation
	MoveBar(Move_Value , selected );								//call function to change range
}
/*
Function for Button 2 #16
*/
function button2(obj)      
{
	var selected = document.getElementById('prog-bar').value ;   //get the progress bar to edit
	var Old_Value = document.getElementById(selected+'val').value ;   //get the old value
	var Move_Value = parseInt(Old_Value) + parseInt(obj.value);		// set the new range for progressbar
	if (Move_Value > 210 )											//To maintain the max Value
		{
			Move_Value = 210;
		}
	document.getElementById(selected+'val').value = Move_Value;    //set the new value for further calculation
	MoveBar(Move_Value , selected );								//call function to change range
}
/*
Function for Button 3 #-49
*/
function button3(obj)      
{
	var selected = document.getElementById('prog-bar').value ;   //get the progress bar to edit
	var Old_Value = document.getElementById(selected+'val').value ;   //get the old value
	var Move_Value = parseInt(Old_Value) + parseInt(obj.value);		// set the new range for progressbar
	if (Move_Value < 0 )											//To maintain the min Value
		{
			Move_Value = 0;
		}
	document.getElementById(selected+'val').value = Move_Value;    //set the new value for further calculation
	MoveBar(Move_Value , selected );								//call function to change range
}
/*
Function for Button 4 #-30
*/
function button4(obj)      
{
	var selected = document.getElementById('prog-bar').value ;   //get the progress bar to edit
	var Old_Value = document.getElementById(selected+'val').value ;   //get the old value
	var Move_Value = parseInt(Old_Value) + parseInt(obj.value);		// set the new range for progressbar
	if (Move_Value < 0 )    									//To maintain the min Value
		{
			Move_Value = 0;
		}
	document.getElementById(selected+'val').value = Move_Value;    //set the new value for further calculation
	MoveBar(Move_Value , selected );								//call function to change range
}