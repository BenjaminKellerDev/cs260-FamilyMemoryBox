# CS 260 Notes

[My startup - Memory Box App](https://memorybox.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [super cool website that is better than canvas](https://masteryls.com/course/1a8c01d0-5e9c-4a7c-8597-55bd5159967e/topic/2680f434-f121-46bd-a858-5fb6d656a3df)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.237.99.97
It all worked without a hitch, until it crashed without me knowing and since it was over the weekend, I didn't notice and lost some bonus grace days. 
Oh well, anyways it seems like it keeps running out of memory and killing random process. I'm not sure what's causing it because I did nothing to the OS image 
except for edit the caddy config per the instructions. I set up Uptime Kuma on my home server to notify the minute (well within 3 mins) if it goes down
so hopefully I won't loose any more points. 

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).
I do want to figure out how to change that homepage to the correct links, probably just a quick job on the remote machine.

## HTML

Ok here's tha plan:

index.html - login auth and 3rd party API
stories.html - Application data (and Database data) (and WebSocket data)
drafting.html - posting to database 
tags.html - Database data


## CSS

I used https://waapple.org/ as inspiration for the font choice and found a similar free font on google fonts.
I was originally inspired by the colors of Josef Albers Homage to the Square [(the green one specify)](https://9artprints.com/cdn/shop/files/after-josef-albers-grove-homage-to-the-square-premium-giclee-print-mid-century-modern-art-print-in-green-white-available-framed-1x1-923422.jpg?v=1764295174&width=3000) but those colors were too strong so I went with a nice orange instead.

Bootstrap was bothering me for a long time until I realized that the lower stylesheet takes precedence
```
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="/main.css" />
```

I also got so frustrated with css and other elements blocking others that I went back and removed most of my CSS and the really focused on flex container/flex child mentality and it finally worked.
Also this website was a really nice visual https://css-tricks.com/snippets/css/a-guide-to-flexbox/

max-width gave me trouble too, and im not entirely sure why this fixed it, but it did
```
    margin-left: auto;
    margin-right: auto;
```

finally, i added a little animation on the story feed if you wait 5 seconds to simulate websocket tech

## React Part 1: Routing

Vite and React was pretty simple. unclosed html tags like no </input> caused errors and inline css didn't work so i converted it to css classes as i originally should have done. There are differences visually probably due to conflicting css but I kinda like it better. The one place I noticed this was the comment section had a bigger margin. The other place was the padding on the tags, which i did go and fix because it was too cramped. I found a good solution to hide the header on the login page but im going to wait to use it until I understand reactivity better in pt 2 https://stackoverflow.com/questions/71444637/react-router-hide-nav-footer-on-certain-pages-with-router-v6

update: i think form-control got updated with bootstrap so i had to use !important because I realized react makes all css global. anyways text works now

## React Part 2: Reactivity

I didn't really understand the react philosophy until i started working on the project. It still feels a little unwieldy, for example the username field needs a useState, input handlers, button handlers and to pass the state up. 

After I moved onto the tags I realized that abstracting parts of the service to separate js files (like database.js) would be a better strategy along with some inline arrow (lambda?) functions. If I have time I'll go back and refactor login, or ill just have to refactor it in the next phase.

I'm still learning about useEffect. I tried to prevent weird back button behavior where you could go to a page without being logged in. However, the best i could come up with resulted in weirder infinite loop back button behavior.
```jsx
    React.useEffect(() => {
        if (currentUser == null) {
            navigate('/');
        }
    }, [location.pathname]) 
```
I think that when I add real authentication, the issue may go away. I'm not sure how I can set myself up for implementing it better, but i'll see by the end of the phase.

It's been quite fun to turn html blocks into jsx functions and watch them get dynamically added, I'm starting to see the power of javascript!

I learned more about the react DOM relationship when adding a useState function to the checkboxes on the drafting page caused the checkboxes to stop working. It turns out React was re-rending the checkbox a few millisecond after the function was called causing it's state to go back to default. I had to add this to the attributes in order for React to update the DOM ```checked={storyTags.includes(name)}``` In the discord Prof. Jensen recommend to another student to keep the form elements for accessability purposes. So perhaps a good practice might be always using ```e.preventDefault()``` in order to keep React in control and reduce side effects(is this the right term?). Anyways, exciting stuff!

The last issue I had was enabling a popup component while maintaining the input on a textbox. Enabling it caused the whole page to re-render. The TA suggested braking out that functionality into a different jsx file which caused it to only rerender that part. 


## Startup Deliverable 
Had a hard time debugging my first endpoint. Eventually I remembered that the order of the service code matters so I had to move the port listen to the bottom and then my breakpoints finally were getting hit via a manual inspect element api call. Then, I was confused why the front end was getting a server error. Because of my many years self-hosting minecraft servers, I quickly realized it was a port error. Eventually after going back and rereading the documentation, I realized the purpose of vite.config.js was meant to be the proxy for the devolvement environment. It was a good reminder that I need to make sure I understand everything I copy, paste into my code, including the instructions on the course website.

## DB Deliverable 
Went way easier than I expected. There were a few times where a function returned a promise instead of a value, but debugging really helped with that. I'm still not sure how much database logic (like checking for preexisting users with the same name) to put int index.js or database.js, but for the most part, I kept database.js to one line. 

## Websocket  
Went really smoothly. Once I realized how the ws package worked by looking at simon-websocket, it was easy to get it going since I had designed it with a drop in replacement. had a bit of trouble passing the right objects to the singleton-like websocket manager, I kinda got it working, but I didn't like where it was heading so I asked AI for some tips on react best practices and it suggested passing the object thu, and instantiating it in the page with a arrow function as a parameter. That worked, but I wanted to make it singleton-like again. That is when I realized what simon-websocket was doing with handlers and so that was a cool moment. I was able to quickly add that and it worked like a charm!