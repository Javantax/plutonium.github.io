/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__points', 1.5, { opacity: 0, y: -300, delay: .2 })
gsap.from('.home__rocket', 1.5, { opacity: 0, y: -300, delay: .3 })
gsap.from('.home__planet-1', 1.5, { opacity: 0, x: -200, delay: .8 })
gsap.from('.home__planet-2', 1.5, { opacity: 0, x: 200, delay: 1 })
gsap.from('.home__cloud-1', 1.5, { opacity: 0, y: 200, delay: 1.2 })
gsap.from('.home__cloud-2', 1.5, { opacity: 0, x: 200, delay: 1.3 })
gsap.from('.home__content', 1.5, { opacity: 0, y: -100, delay: 1.4 })
gsap.from('.home__title img', 1.5, { opacity: 0, x: 100, delay: 1.6 })


function redirect(url) {
    window.location.href = url;
}
var codeidx = 0;
var codes = [`<pre style="min-width: 50%;" class="plutoniumcode"><span class="keyword1">var</span> <span class="id">k</span><span class="operator">&#61;</span><span class="num">1</span>
<span class="keyword1">while</span>(<span class="id">k</span><span class="operator">&#60;&#61;</span><span class="num">15</span>)
{
  <span class="keyword1">if</span>(<span class="id">k</span><span class="operator">&#37;</span><span class="num">3</span><span class="operator">&#61;&#61;</span><span class="num">0</span> <span class="operator">&#97;&#110;&#100;</span> <span class="id">k</span><span class="operator">&#37;</span><span class="num">5</span><span class="operator">&#61;&#61;</span><span class="num">0</span>)
    <span class="id">println</span>(<span class="string">&quot;FizzBuzz&quot;</span>)
  <span class="keyword1">else</span> <span class="keyword1">if</span>(<span class="id">k</span><span class="operator">&#37;</span><span class="num">5</span><span class="operator">&#61;&#61;</span><span class="num">0</span>)
    <span class="id">println</span>(<span class="string">&quot;Buzz&quot;</span>)
  <span class="keyword1">else</span> <span class="keyword1">if</span>(<span class="id">k</span><span class="operator">&#37;</span><span class="num">3</span><span class="operator">&#61;&#61;</span><span class="num">0</span>)
    <span class="id">println</span>(<span class="string">&quot;Fizz&quot;</span>)
  <span class="keyword1">else</span>
    <span class="id">println</span>(<span class="id">k</span>)
  <span class="id">k</span><span class="operator">&#43;&#61;</span><span class="num">1</span>
}</pre>`,
    `<pre class="plutoniumcode"><span class="keyword2">import</span> <span class="id">json</span>
<span class="comment"># strings are multiline by default</span>
<span class="keyword1">var</span> <span class="id">str</span> <span class="operator">&#61;</span> <span class="string">&quot;{
  \"name\": \"plutonium\",
  \"version\": 0.3
}&quot;</span>
<span class="keyword1">var</span> <span class="id">dict</span> <span class="operator">&#61;</span> <span class="id">json</span><span class="operator">&#46;</span><span class="id">loads</span>(<span class="id">str</span>)
<span class="id">println</span>(<span class="id">dict</span>[<span class="string">&quot;name&quot;</span>])
<span class="id">println</span>(<span class="id">dict</span>[<span class="string">&quot;version&quot;</span>])</pre>`,

    `<pre class="plutoniumcode"><span class="keyword2">import</span> <span class="id">std</span><span class="operator">&#47;</span><span class="id">algo</span><span class="operator">&#46;</span><span class="id">plt</span>

<span class="keyword1">var</span> <span class="id">nums</span> <span class="operator">&#61;</span> [<span class="num">10</span>,<span class="num">8</span>,<span class="num">1</span>,<span class="num">77</span>,<span class="num">40</span>,<span class="num">0</span>,<span class="operator">&#45;</span><span class="num">3</span>,<span class="num">1</span>,<span class="operator">&#45;</span><span class="num">69</span>]
<span class="id">algo::bubbleSort</span>(<span class="id">nums</span>)
<span class="id">println</span>(<span class="id">nums</span>)
<span class="keyword1">var</span> <span class="id">sum</span> <span class="operator">&#61;</span> <span class="num">0</span>
<span class="keyword1">foreach</span>(<span class="keyword1">var</span> <span class="id">number</span>: <span class="id">nums</span>)
{
  <span class="id">sum</span> <span class="operator">&#43;&#61;</span> <span class="id">number</span>
}
<span class="id">println</span>(<span class="id">sum</span>)</pre>`,

    `<pre class="plutoniumcode"><span class="keyword2">import</span> <span class="id">libcurl</span>
<span class="keyword1">function</span> <span class="id">WriteMemory</span>(<span class="keyword1">var</span> <span class="id">bytes</span>)
{
  <span class="id">fwrite</span>(<span class="id">bytes</span>,<span class="id">stdout</span>)
}
<span class="keyword1">var</span> <span class="id">curl</span> <span class="operator">&#61;</span> <span class="id">libcurl</span><span class="operator">&#46;</span><span class="id">Curl</span>()
<span class="id">curl</span><span class="operator">&#46;</span><span class="id">setopt</span>(<span class="id">libcurl</span><span class="operator">&#46;</span><span class="id">OPT_URL</span>,<span class="string">&quot;https://www.google.com&quot;</span>)
<span class="id">curl</span><span class="operator">&#46;</span><span class="id">setopt</span>(<span class="id">libcurl</span><span class="operator">&#46;</span><span class="id">OPT_FOLLOWLOCATION</span>,<span class="num">1</span>)
<span class="id">curl</span><span class="operator">&#46;</span><span class="id">setopt</span>(<span class="id">libcurl</span><span class="operator">&#46;</span><span class="id">OPT_WRITEFUNCTION</span>,<span class="id">WriteMemory</span>)

<span class="keyword1">var</span> <span class="id">res</span> <span class="operator">&#61;</span> <span class="id">curl</span><span class="operator">&#46;</span><span class="id">perform</span>()</pre>`];
var slideTransitionTime = 4000;//2seconds
function codeSlideShow() {
    var div = document.getElementById("slideshow");
    codeidx = (codeidx + 1) % codes.length;
    div.innerHTML = codes[codeidx];
    setTimeout(codeSlideShow, slideTransitionTime);
}
setTimeout(codeSlideShow, slideTransitionTime);
function removeWatermark() {
    var coll = document.getElementsByTagName('img');
    for (var i = 0; i < coll.length; i++) {
        if (coll[i].alt == "www.000webhost.com") {
            coll[i].style.display = "none";
        }
    }
}