# GoodGrowth - TechTest

*Spent 5 hours from allowed time of 3 - 5*

## Brief

The National Trust would like to have their properties’ information pages (e.g. here) display the weather in that property’s location. Their belief is that this additional information will increase the probability of users visiting a property. They are unable to make any changes to their website other than to add your JavaScript script to their site.

## Task objectives

1. **Understanding the Constraints:**

- I can only add a JavaScript script to the National Trust website.
- I needed to fetch and display weather data using the provided API.
- I could not modify the website’s backend or HTML structure.
- Ideally, the solution should be A/B testable to measure impact.
- I should ensure the script is lightweight and efficient.

2. **Investigate Available Data & Hooks:**

- Check localStorage, sessionStorage, cookies, or global JavaScript variables for useful location data.
- Use the Network tab in DevTools to inspect what information is already being fetched.

---

## Summary of how the code works (Non-Technical)

This code is a small program that automatically fetches and displays weather information on the National Trust webpage. Here’s a simple breakdown of what it does:

**1. Loads a Design File:** It first loads a stylesheet (a file that controls how the page looks) from an external source to ensure the weather section is styled correctly.

**2. Waits for the Page to Load:** Before doing anything, it waits until the webpage is fully ready to make sure everything is in place.

**3. Finds the Weather Section:** It looks for a specific part of the webpage where the weather information should be displayed.

**4. Fetches Weather Data:** It contacts an external weather service (API) and asks for weather details about a specific location (coordinates near Mount Everest).

**5. Displays Weather Information:** If the data is valid, it creates and displays:

- The name of the city and country
- Population and location coordinates
- Current weather conditions, including temperature, humidity, wind speed, and more
- A weather icon representing the current conditions
- Handles Errors: If something goes wrong (e.g., the webpage section is missing or the weather service fails), it shows an error message instead of breaking the webpage.

**In non-technical terms, this code automatically displays mock weather information on a webpage in a well-organised and visually appealing way, placing it in the section that best fits its purpose.**

---
## Try it out for yourself

**1. Navigate to https://www.nationaltrust.org.uk/visit, then click on any area and then place you'd like to visit.**

*Or alternatively, click here for example page*
https://www.nationaltrust.org.uk/visit/bath-bristol/tyntesfield?origin=search



**2. Access the Chrome Dev Tools by pressing "F12"**

*or alternatively*
![Image of accessing the dev tools using chrome menu](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdeveloper.chrome.com%2Fstatic%2Fdocs%2Fdevtools%2Fopen%2Fimage%2Fthe-developer-tools-optio-2d9d9b7c0ac96_2880.png&f=1&nofb=1&ipt=4f02006465386b2832362bd817f8dbdbfeeb9bd89cff8fa2d84abddf53a8dab8&ipo=images)



**3. Click to the console tab as displayed below:**

![Image of console tab](https://developer.chrome.com/static/docs/devtools/console/image/the-console-panel-next-t-9c932aff8f795_856.png)



**4. Copy and paste the following code:**

```
let script = document.createElement('script');
script.src = 'https://l-brookling.github.io/GG-TechTest/index.js';
script.onload = () => console.log("Script loaded successfully!");
script.onerror = (error) => console.error("Error loading script:", error);
script.defer = true;
document.head.appendChild(script);
```



**5. Press "Enter" and scroll down to the "Planning your visit" section.**

![Image of planning your visit section](/img/Default%20planning%20your%20visit%20section.PNG)

*You should then see something similar to the updated version*

![Image of modified section](/img/Modified%20version.PNG)

---

## Decisions

**1. Why I chose to display the information in the "Planning your trip" section:**
- Didn't want to flood the location overview with weather information as it wouldn't be relevant to the place if they just wanted to see the location information.
- If they were curious about visiting the location then it makes sense to me displaying it in that section.

**2. Not storing the API key in a .env file:**
- Given that this only contained mock data and nothing sensitive I chose to go without the .env folder and calling the API key with process.env.API_KEY.
- I am very familiar with keeping sensitive information hidden and did try to attempt the implementation of this strategy, but I ran into an error with this script when doing so and chose to focus my time on adding styling to show off frontend skills.

## Challenges & Learnings

**Key Takeaways:**
**1. Remove DOMContentLoaded event listener from the function:**
```
document.addEventListener("DOMContentLoaded", function () {
...existing code
})

to this...

(function() {
...existing code
})()
// This is incorrect if I am to be loading the script manually in the console, but it took a lot of searching on the web and my bootcamp mentor ended up giving me very helpful insight.
```

**2. Calling weatherInfoDiv at top level so that it is reachable:**
```
(function () {

  // Needs to be declared top level so that it is not out of scope
  let weatherInfoDiv;

})()
```
**3. Combining both CSS and JS scripts into one file:**
```
(function () {
  // Add CSS stylesheet function at the top level
  function loadStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://l-brookling.github.io/GG-TechTest/styles.css";
    link.onload = () => console.log("Stylesheet loaded successfully!");
    link.onerror = (error) => console.error("Error loading stylesheet:", error);
    document.head.appendChild(link);
  }
})()
```
**4. Deploying my repo on GitHub Pages and injecting it into the console.** *This was my first time doing both of these tasks and it was a great learning experience.*
**5. Using the Chrome Dev Tools to inspect cookies and what requests have been made.** *Not fully confident on what evidence I could show, but given more time I would love to dig deeper into what information I could extract from them.*

## Future Improvements

**1. Dynamically adding the image coordinates for the location instead of using the mock API coordinates.**
Using the Dev Tools I found the google maps coordinates for the location:
![Google maps image](/img\Google-maps-coordinates.PNG)
...and using a piece of code similar to this:
```
function extractCoordinates(url) {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    const destination = params.get("destination");

    if (destination) {
        const [latitude, longitude] = destination.split(",").map(coord => parseFloat(coord.trim()));
        return { latitude, longitude };
    }
    return null;
}

const url = "https://www.google.com/maps/dir/?api=1&destination=50.638307%2C-4.3623079";
const { latitude, longitude } = extractCoordinates(url);
```
I would be able to:
- Extract the destination parameter from the URL.
- Use .split(",") to separate latitude and longitude into an array.
- Use .map(parseFloat) to convert the values from strings to numbers.
- Return the latitude and longitude as an object so they can be easily injected into the API request e.g. /recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a*lat=${latitude}&lon={longitude}*

*Sadly I only had about 15 minutes before my time ran out to figure out how to implement this, so I took to researching it and not including it*

**2. Improving the overall aesthetic and potential animations for the weather icon:**
- If I had more time I would've liked to improve the layout mainly with the weather icon so that instead of it being a blurry, far too seperate image, I would've made it animated to reflect the weather pattern. For example, If the weather was sunny, I would have the image pulse and glow very softly. If it was raining, I would animate the raindrops to pulse and the clouds to subtly change between a darker and lighter shade.

---

**A-B testing**

As far as recieving feedback from my script and it's enhancements to the website, I have reached out to The National Trust to see if they could provide any feedback

---

## 👥 Sole contributor

| Name  | Role       | GitHub                                   |
| ----- | ---------- | ---------------------------------------- |
| Louis | Everything | [@Louis](https://github.com/L-Brookling) |

---

###### Side note: Just wanted to say a massive thank you to Good Growth for the challenge as I have learnt so many interesting new skills and understand more about the Dev Tools and it's capabilities. *Such a fun challenge, can't wait to keep on learning more.*

---
