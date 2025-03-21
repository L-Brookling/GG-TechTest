### GG-TechTest

**Spent 5 hours from allowed time of 3 - 5**

## Task objectives

1. Understanding the Constraints:

- I can only add a JavaScript script to the National Trust website.
- I needed to fetch and display weather data using the provided API.
- I could not modify the website’s backend or HTML structure.
- Ideally, the solution should be A/B testable to measure impact.
- I should ensure the script is lightweight and efficient.

2. Investigate Available Data & Hooks:

- Check localStorage, sessionStorage, cookies, or global JavaScript variables for useful location data.
- Use the Network tab in DevTools to inspect what information is already being fetched.

---

## Summary of how the code works (Non-Technical)

## Solution

1. Navigate to https://www.nationaltrust.org.uk/visit, then click on any area and then place you'd like to visit.

**Or alternatively, click here for example page**
https://www.nationaltrust.org.uk/visit/bath-bristol/tyntesfield?origin=search

2. Access the Chrome Dev Tools by pressing "F12"

**or alternatively**
[Example-image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdeveloper.chrome.com%2Fstatic%2Fdocs%2Fdevtools%2Fopen%2Fimage%2Fthe-developer-tools-optio-2d9d9b7c0ac96_2880.png&f=1&nofb=1&ipt=4f02006465386b2832362bd817f8dbdbfeeb9bd89cff8fa2d84abddf53a8dab8&ipo=images)

3. Click to the console tab as displayed below:

[Example-image](https://developer.chrome.com/static/docs/devtools/console/image/the-console-panel-next-t-9c932aff8f795_856.png)

4. Copy and paste the following code:

```
let script = document.createElement('script');
script.src = 'https://l-brookling.github.io/GG-TechTest/index.js';
script.onload = () => console.log("Script loaded successfully!");
script.onerror = (error) => console.error("Error loading script:", error);
script.defer = true; // This will ensure that the script runs after the page has loaded
document.head.appendChild(script);
```

5. Press "Enter" and scroll down to the "Planning your visit" section.

[Example image](/img/Default%20planning%20your%20visit%20section.PNG)

**You should then see something similar to the updated version**

[Example image](/img/Modified%20version.PNG)

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
