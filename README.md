# Epitomax Login Kiosk

![g6_cymlkzez-8epkmwrae7mrv8msrezf3uh47mbvgvm](https://cloud.githubusercontent.com/assets/51578/3220110/926dd90e-effc-11e3-92ad-f458f2e21670.png)


This is the open sourced version of the client portal we're using at Renewal Center for Epitomax. This is a simple 'splash screen' for the epitomax portal.

### Dependencies
- IE 9 and above
- Javascript Enabled

### Configuration

The config.js file holds all the business information and should be the only file that needs to be modified. 

```
config = {
  name:"Business Name",
  phone:"888-555-1212",
  company_id:"##"
}

```

The only other file needed to update is ```/assets/img/logo.png```

### Setup

We have a short term goal to develop a bootstrap script to setup both the local and prodcution enviornments. This project can be run on GitHub pages for free with a few simple steps. (coming soon)

### Development
 
This project uses Sass and Compass. [Learn how to set those up here](http://thesassway.com/beginner/getting-started-with-sass-and-compass).

