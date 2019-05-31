---
layout: post
title: "Sixth week of coding phase, GSoC'18"
date: 2018-06-24 12:40:00 +0530
categories: GSoC Falkon KDE
---

<style>
img{
width: 100%;
height: auto
}
</style>

Woo.. this is the 6th weekly post - the midway of GSoC (12 weeks). In this 6th week, the following work is done:

- Documentation: of the APIs developed in the previous week.

- Menus API: The API exposing WebView contextmenu.

- Settings API: The API to store settings in form of Key-Value pair for plugins

## Menus API
The Menus API enables the QML Plugin to add an action, separator or menu to the WebView context menu. This API is not similar to the WebExtensions Menus API but is rather Falkonish!
![Context menu on image](/images/menu_on_input.png)

## Settings API
The Settings API enables the QML Plugin to store settings as key-value pairs and uses QSettings to store the data. Developing this API was interesting because it led to a bug-fix (bug was in my previous work) and enabling creating child items in QmlPluginInterface.
![Plugin's settings window](/images/plugins_settings_window.png)

<br/>
I have also created a video to demonstrate the used of Menus and Settings API in HelloQML plugin. The source of HelloQML plugin can be viewed [here](https://cgit.kde.org/falkon.git/tree/src/scripts/helloqml?h=anmolgautam).
<br/>
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nXuJfOGo9D4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</center>
<br/>
I am very thankful to my mentor David Rosca for suggesting and reviewing the design of the APIs.

Happy Monsoon :-)
