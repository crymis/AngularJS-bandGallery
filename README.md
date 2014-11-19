AngularJS-bandGallery
=====================

An AngularJS Directive that sets up a fullscreen gallery with all of your pictures.

#####Demo is available [here]

###Adding to your project
To get the bandGallery to work, you just have to

  - copy the bandGallery.js file into your directives directory
  - add the bandGallery.js file to your index.html
  - copy the bandGallery.css to your css directory
  - add the jQuery easing plugin to your project (for smoother animations)
    * http://jqueryui.com/easing/
  - you are done
  
###Configuring the directive
You can place the directive wherever you want.
Just add this html tag
```sh
<band-gallery gallery-imgs='myImgs' nav-btns="true" page-nr="true"></band-gallery>
```

####Attributes
- gallery-imgs: require an array of objects with
  * key: "url", value: image url
  * optional[key: "title", value: image title which is in front of the image]
  * optional[key: "description", value: description of the image, which is placed under the title]
- nav-btns: require a boolean value, "true" will show the overlay buttons (next, prev, goTop), "false" will hide them
- page-nr: require a boolean value, "true" will show the page number on the bottom, "false" will hide it
  * If you don't add this attributes, the default setting is "true": nav-buttons and page-number are shown

###Thanks

And that's it! Not too many of configuration for the usage of this neat gallery ;)

I would appreciate if you add a link to this repo, if you use the gallery anywhere!
Also, please tell me, if you are in trouble with some configuration or if you have problems with using this directive.

Have fun!

Greets
Crymis


[here]: http://crymis.github.io/BandGallery
