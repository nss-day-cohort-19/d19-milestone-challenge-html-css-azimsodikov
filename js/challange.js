const output = document.querySelector('#output');
const hide = document.querySelector('#hide');
const hide1 = document.querySelector('#hide2');
const li1 = document.querySelector('#li1');
const li2 = document.querySelector('#li2');

var forms = $('input');
// console.log('EX', forms[1])
var textArea = $('textArea');
// console.log('Ex', textArea[0])
const buttons = $('button');
// console.log('BTN', buttons)



$(document).ready(() => {
    $(buttons[1]).click(() => {
        $('#output').append(`<div id="messages"><h1><span>${forms[1].value}</span><button id="delete" class="btn btn-danger">Delete</button></h1><hr><h3>${forms[2].value}</h3><p>${textArea[0].value}</p><hr></div>`);
        forms[1].value = '';
        forms[2].value = '';
        textArea[0].value = '';
        $("#hide").addClass("hidden");
        $("#hide2").removeClass("hidden");
    });
});
$(document).ready(() => {
    $(buttons[1]).click(() => {
        $("#output").find("button").click(() => {
        $('#messages').remove();
        });
    });
});

var blogList = [];
function showIt(blogs) {
	// console.log('showIt', blogs.blogs)
	blogList = blogs.blogs;
	for (var i = 0; i < blogList.length; i++) {
		// console.log('heey', blogList[i].title);
		output.innerHTML += `<div id="cards">
							<h1>${blogList[i].title}
							<button type="button" id="delete" class="btn btn-danger">Delete</button>
							</h1>
							<h6>${blogList[i].date}</h6>
							<p>${blogList[i].blog}</p>
							<a>${blogList[i].url}</a></div>`
	}
}

$.ajax({
url:"blogs.json"
}).done(showIt);


li1.addEventListener('click', () => {
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
