var blogs= [{title:"Dribble",copy:"Whenever I need ideas I will definetly checkout this website.",date: "04/14/2017",url:"https://dribbble.com/shots"},
			{title:"DesignPro",copy:"Here is another website.",date: "04/15/2017",url:"http://www.webdesignrepo.com/"},
			{title:"Personal Portfolios",copy:"Here the links to the most awesome portfolios in the Web.",date: "04/15/2017",url:"https://github.com/iRaul/awesome-portfolios"}
];
var blogArt = document.getElementById('blogs');

for (item in blogs) {
	var blog = `<section id="jsblog">
	            <article class="jsblog">
				<h3>${blogs[item].title}</h3>
				<p>${blogs[item].copy}</p>
				<p>${blogs[item].date}</p>
				<a href="${blogs[item].url}">Visit</a>
				</article>
				</section>`;
	blogArt.innerHTML += blog;
}

