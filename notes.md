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

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

</input> caused errors

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
