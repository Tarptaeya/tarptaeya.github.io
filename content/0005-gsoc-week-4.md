---
title: Fourth week of coding phase, GSoC'18
date: 2018-06-11
tags:
    - GSoC
    - Falkon
    - KDE
archived: y
description: The work done in this week is quite diverse - writing documentation, fixing leaks and developing APIs
---

The work done in the fourth week was quite different from the other weeks. The following work is done-

- Developed Browser Window API, and associated Window Id to each window.
- Added WebView methods and properties to Tabs API.
- Fixed Leaks in the API.
- Added Documentation for the APIs developed till now.

## Browser Window API &amp; Window Id
The browser window API has the following parts -

- WindowType: type of the window eg. WindowType.NewWindow, WindowType.FirstAppWindow, etc.
- WindowState: state of the window eg. WindowState.FullScreen, WinodowState.Maximized, etc.
- Window: to expose browser window type to QML, eg. Window.title, Window.id, etc
- Windows: to expose methods and properties releated to browser window(s), eg, Windows.create, Windows.remove, Windows.getAll, etc.

Window Ids are integers starting from 0, incrementing with each window created but not decrementing with each window removed - so that window id within a session are unique.

## Added WebView methods &amp; properties to Tabs API
The methods and properties related to WebView are added to the Tabs API, which are developed in the third week, for eg, Tabs.showSource(), Tabs.back(), Tabs.canGoBack, etc.

## Fixed Leaks in the API
There was a major leaks in the APIs, which is pointed by my mentor David Rosca, arising because there were many temporary parentless objects created for eg in signals. Most of my ( &amp; probably also of my mentor's) time this week is spent in fixing the leaks.

## Added Documentation for the APIs
For the documentation, my mentor adviced me to use Kapidox, but I have not added the doc folder and metainfo.yaml to the source - instead added the documentation comments which will be build later.

<hr/>

Since this week's work was so diverse - writing documentation, fixing leaks, developing APIs, that's why I wrote in the first line "that the work done was quite different", and without my mentor's (David Rosca) help I would not be able to do this work.

Happy Approaching Monsoon!

