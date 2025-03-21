# GoodGrowth - TechTest

*Spent 5 hours from allowed time of 3 - 5*

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

**You should then see something similar to the updated version**

![Image of modified section](/img/Modified%20version.PNG)

---

## Decisions

## Challenges & Learnings

**Key Takeaways:**

## Future Improvements

---

## 👥 Contributor

| Name  | Role       | GitHub                                   |
| ----- | ---------- | ---------------------------------------- |
| Louis | Everything | [@Louis](https://github.com/L-Brookling) |

---
