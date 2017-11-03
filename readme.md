# ProjectTitle

This is the project repository for the development and maintenance of the website of Roaming Healthcare. This project was started in 2017.


## Project Organisation

This project uses the [Kirby CMS][kirby], and follows its directory structure. Stylesheets, script files and static media resources are stored inside the `assets` folder. Site templates, view snippets, site content data, as well as all backend-related code is stored in the `site` folder. 


## Languages

- **Plain HTML5**, with no special requirements.
- **LESS**, concatenatenated into a single file, compiled into CSS and minified.
- **Javascript**, concatenated, transpiled with [Babel][babel] and minified.
- **PHP**, suitable for deployment in modern servers with PHP ≥ 7.0.
- **SQL**, for use on a MySQL-compatible RDBMS


## Frameworks & Libraries

The frontend templates were built using [UIKit](http://getuikit.com), version 2.72, the currently stable version. This framework was chosen over others, as it has all of the elements needed to realise the conceptual design. UIKit itself uses [jQuery](http://jquery.com) and [FontAwesome](http://fontawesome.io).

The backend was built with [Kirby][kirby], version 2.5.6. This php-based, flat-file CMS was chosed due to its high-configurability, high compatibility with almost all shared hosting services, extreme ease of maintenance, and a user interface that is fool-proof and highly enjoyable for the client to use.

## Development Tools

All development was done on MacOS X.

During the Design phase, site sketches and mockups were made using [Sketch][sketch]], version 47. Layout placement images used in mockups are from [Unsplash][unsplash].

During the Frontend Development phase, all coding was done in [Sublime Text][sublime] version 3. Post-processing of all project files and automatic compilation of the `build` folder, was made with [CodeKit][codekit], version 3. CodeKit in turn uses several tools internally, such as [Bower][bower] to automatically download and maintain 3rd-party frameworks and libraries, and [Babel][babel] for transpiling Javascript, among many others. 

During the Backend Development phase, we continued coding with Sublime Text, and used [MAMP Pro](https://www.mamp.info) for continual, local testing. Database modelling was done in [SQLEditor](https://www.malcolmhardie.com/sqleditor/), version 3.2, which directly outputs the database forge SQL.

## Site Areas & Sections

The site contains a 'Home Page', directed at the general public using the search service provided by the site. It also contains a 'Subscriber Page', which is a page dedicated to showing potential advertisers (= 'subscribers') the advantages of listing their services on the site. The site also contains a 'Subscriber Dashboard' section, which is where current advertisers configure their account settings, add content to their listings, and setup payment options. Lastly, the site also has a 'Blog' section, which showcases articles produced by the advertisers.

## Site Functionality

The site uses a membership/subscriber database for registration and login. Advertising subscriptions are paid via a subscription processing mechanism setup with [Stripe](https://stripe.com). The site uses the Google Maps API to perform a distance-based geosearch through its listings. Visitors are able to send sms messages directly from the site to the listed advertisers, via a built-in SMS gateway.

Advertisers can compose their own blog entries in the frontend, which the client (site owner) can queue for display, edit and moderate. The site also has an optional 'display advertisement' service, where companies can place display advertisements that are displayed throughout the site at key points on (almost) every page. 

[sketch]: https://www.sketchapp.com "Sketch"
[hype]: http://tumult.com/hype/ "Tumult Hype"
[fontawesome]: http://fontawesome.io "FontAwesome"
[unsplash]: https://unsplash.com "Unsplash"
[sublime]: https://www.sublimetext.com "Sublime Text"
[uikit]: https://getuikit.com "UIKit"
[codekit]: https://codekitapp.com "CodeKit"
[jquery]: http://jquery.com "jQuery"
[bower]: https://bower.io "Bower"
[babel]: https://babeljs.io "Babel"
[tower]: https://www.git-tower.com "Tower"
[markdown]: https://en.wikipedia.org/wiki/Markdown "Markdown"
[less]: http://lesscss.org "Less"
[kirby]: https://getkirby.com "KirbyCMS"