var divQA = document.getElementById('qa');
var stack = document.getElementById('stack');


for (var i = 0; i < questionAnswer.length; i++) {
	var q = questionAnswer[i].q;
	var a = questionAnswer[i].a;
		if (q == "" || a == "") { continue;	}
	divQA.innerHTML +=  '<li class="q">' + q + '<li class="a">' + a;
}

for (var i = 0; i < stackList.length; i++) {
	var stackItem = stackList[i];
	stack.innerHTML +=  '<li class="stack">' + stackItem;
}


