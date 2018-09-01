//Object constructor
var cafes = []

//constructor function
function Cafe (name, link, description, location, image, array) {
  this.name = name
  this.link = link
  this.description = description
  this.location = location
  this.image = image

  //for html
  populateHTML(this)
  pushToArray(cafes,this)
}

//Push New Cafe to the array
function pushToArray(array, cafeCollection) {
  array.push(cafeCollection)
}

//creating element/class to HTML
function populateHTML(object) {
  var myDiv = document.createElement('div')
  var myH2 = document.createElement('h2')
  var image = document.createElement('img')
  var myH5 = document.createElement('h5')
  var myP1 = document.createElement('p')
  var a = document.createElement('a')

  myDiv.appendChild(myH2)
  myDiv.appendChild(image)
  myDiv.appendChild(myH5)
  myDiv.appendChild(myP1)
  myDiv.appendChild(a)

  myDiv.className = 'myDiv col-sm-4 col-12 m-3 mx-auto'
  image.cassName = 'img-fluid'
  a.className = 'btn btn-outline-info'
  a.setAttribute('target', '_blank')
  myDiv.setAttribute('style','')
  myH2.setAttribute('style', 'text-align: center; color: #222323')
  myH5.setAttribute('style', 'margin-bottom: 1rem; font-size: 1.1rem; font-weight: 300; text-align: left')
  myP1.setAttribute('style', 'font-weight: 300')
  image.setAttribute('style', 'max-width: 100%; border-radius: 8px; margin: 3% 0')


//need to add target="_blank" to image

  //doesn't work
  image.addEventListener("mouseover", function(event) {
    event.target.style.opacity = "0.7";

    setTimeout(function() {
      event.target.style.opacity = "";
    }, 500);
  });


  myH2.textContent = object.name
  image.src = object.image
  myH5.textContent = object.description
  myP1.textContent = object.location
  a.textContent = object.name  //link text = object name
  a.href = object.link //href to link


  document.getElementsByClassName('row')[0].appendChild(myDiv)

}


new Cafe('Blue Bottle Coffee', 'https://bluebottlecoffee.com/', 'Traendy cafe chain offering upscale coffee & pastries, plus beans & brewing', '66 Mint St, San Francisco, CA 94103', 'https://dx6iy6yk2x0g.cloudfront.net/images/814/648/8146488ba8daad1dcf521c91f78e0913ab63cb4a-x425.jpg?compressionQuality=80&id=51232fbb6747df1368000009&op=scale&version=1',cafes);
new Cafe('Sightglass Coffee', 'https://sightglasscoffee.com/', 'Coffee made from house-roasted beans served along with baked goods', '270 7th St, San Francisco, CA 94103','https://c1.staticflickr.com/8/7306/27144567523_655595913c_c.jpg', cafes);
new Cafe('Saint Frank Coffee', 'https://www.saintfrankcoffee.com/', 'Sunny, bi-level neighborhood coffeehouse pairing its java with pastries in airy.', '2340 Polk St, San Francisco, CA 94109', 'https://archinect.imgix.net/uploads/6v/6v77f777cy38n5ob.jpg?auto=compress%2Cformat', cafes);
new Cafe('Four Barrel Coffee', 'https://www.fourbarrelcoffee.com/', 'Exposed beams create a sleek & rustic ambiance, specializing in drip coffee.', '375 Valencia St, San Francisco, CA 94103', 'https://cdn.vox-cdn.com/thumbor/qA8o7nhWCIkUGU8B-eEZdb3kxL4=/0x0:1000x666/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/58233335/o.0.jpg', cafes);
new Cafe('Equator Coffee', 'https://www.equatorcoffees.com/', 'Hip local coffeehouse chain serving single-origin coffee, tea & light eats.', '1820, 2216 Polk St, San Francisco, CA 94109', 'https://c1.staticflickr.com/5/4342/36738167454_c2dcd02202_b.jpg', cafes);
new Cafe('Contraband Coffee', 'http://www.contrabandcoffeebar.com/', 'This roaster/coffeehouse outfit also serves pastries in a modern, comfortable setting.', '1415 Larkin St, San Francisco, CA 94109', 'https://i2.wp.com/luxsfre.com/wp-content/uploads/2016/06/Contraband-Coffee-Bar.jpg?fit=898%2C599', cafes);
