
# NieR Automata Screen Transition
![Banner](github-images/banner.png)


NieR Automata Screen Transition in CSS and JS. As far as I know, the only missing piece (together with the game start loading screen) in the many CSS/JS recreations of NieR Automata aesthetics.

### Disclaimer
This is a saturday night hobby project by a fool that hasn't dealt in professional web development for a year or so. The code is really brutal and unoptimised. Anybody has the right to take this mess as general inspiration and do NieR Automata screen transition justice with a proper job.

As for my take, as my final objective is to use it in CSS+JS customisation extensions (e.g. [Stylus](https://github.com/openstyles/stylus)) , I'll try iron it out a bit more in order to have it a) self-contained (no HTML set-up required); and b) work with link to external pages rather than in-page elements visibilities.

![GitHub last commit](https://img.shields.io/github/last-commit/MokhaDesign/Nier-Automata-Screen-Transition)

## Preview
![](github-images/NierScreenTransitionPreview.gif)
[![CodePen](https://img.shields.io/badge/demo-CodePen-black)](https://codepen.io/m-riann-hevein/pen/ZERoPWG) [![LiveDemo](https://img.shields.io/badge/demo-LiveDemoIncoming-black)](#)

## Usage
The transition works by populating three svg containers with the required lines and triangles at startup. Therefore, at the moment, it requires those three containers:
```
<div id="svg-wrapper" class="svg-wrapper">
    <svg class="lines" viewBox="0 0 100 100" preserveAspectRatio="none" height="100%" width="100%" id="lines-right"></svg>
    <svg class="lines" viewBox="0 0 100 100" preserveAspectRatio="none" height="100%" width="100%" id="lines-left"></svg>
    <svg class="triangles" viewBox="0 0 100 100" preserveAspectRatio="none" height="100%" width="100%" id="triangles"></svg>
</div>
```
It can be called by adding ```onclick="AnimateLines()"``` to the button or link you want to play the transition from. The transition hides a particular class of objects and displays one div by id. Those two can be set in the Variables part of the js file.
```
let idMainContent = 'main'
let classToHide = '.start'
```
You can have a general idea of the process by looking at ```example.html```. It is fairly easy to change its behaviour and functionality as you please. 

### Dependencies
This screen transition is mostly based on [AnimeJS](https://github.com/juliangarnier/anime). 
Of course, nothing bets [metakirby5](https://github.com/metakirby5) amazing [Yorha-CSS](https://github.com/metakirby5/yorha) template for any NieR Automata aesthetics need.
A parsimonial amount of [jQuery](https://github.com/jquery/jquery) has also been used, but it would be rather easy for anybody to get rid of it if need be.

[![jQuery](https://img.shields.io/badge/dependency-jQuery-blue)](https://github.com/jquery/jquery) [![AnimeJS](https://img.shields.io/badge/dependency-AnimeJS-blueviolet)](https://github.com/juliangarnier/anime) [![YorhaCSS](https://img.shields.io/badge/dependency-YorHaCSS-lightgrey)](https://github.com/metakirby5/yorha)

## Tell me how bad I am at webdev on...
[![Mastodon](https://img.shields.io/mastodon/follow/109375792248824593?domain=https%3A%2F%2Fmastodon.gamedev.place&style=social)](https://mastodon.gamedev.place/@novembrinewaltz)
[![LinkedIn](https://img.shields.io/badge/linkedin-MarianPugliese-blue?style=plastic&logo=linkedin)](https://www.linkedin.com/in/marianhev/)