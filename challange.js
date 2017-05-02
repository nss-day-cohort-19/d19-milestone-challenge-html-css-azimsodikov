const h2div = document.querySelector('#h2div');
const hide = document.querySelector('#hide');
const hide1 = document.querySelector('#hide2');
const li1 = document.querySelector('#li1');
const li2 = document.querySelector('#li2');

var blogs= [{title:"Dribble",copy:"Whenever I need ideas I will definetly checkout this website.",date: "04/14/2017",url:"https://dribbble.com/shots"},
			{title:"DesignPro",copy:"Here is another website.",date: "04/15/2017",url:"http://www.webdesignrepo.com/"},
			{title:"Personal Portfolios",copy:"Here the links to the most awesome portfolios in the Web.",date: "04/15/2017",url:"https://github.com/iRaul/awesome-portfolios"}
];

for (item in blogs) {
	var blog = `<section id="jsblog">
	            <h2 class="jsblog"></h2>
				<h2>${blogs[item].title}</h2>
				<h5 id="time"> Post by John Doe, Sep 24, 2015.</h5>
				<span class="glyphicon glyphicon-time"></span>
				<p>${blogs[item].copy}</p>
				<p>${blogs[item].date}</p>
				<a href="${blogs[item].url}">Visit</a><hr>
				</section>`;
	h2div.innerHTML += blog;
}


li1.addEventListener('click',() => {
	hide.classList.add('hidden');
	hide1.classList.remove('hidden');
});

li2.addEventListener('click', () => {
	hide1.classList.add('hidden');
	hide.classList.remove('hidden');
});
function hideIt() {
	hide.classList.add('hidden');
}
hideIt();

function date () {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
	    dd='0'+dd;
	}
	if(mm<10){
	    mm='0'+mm;
	}
	var today = mm+'/'+dd+'/'+yyyy;
	document.getElementById("time").innerHTML = today;
}
