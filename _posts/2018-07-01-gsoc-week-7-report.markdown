---
layout: post
title: "Seventh week of coding phase, GSoC'18"
date: 2018-07-01 22:00:00 +0530
categories: GSoC Falkon KDE
---

The following work is done in the seveth week:

- Events API
- Added WebPage methods in Tabs API
- I18n API
- Documentation for Events and WebPage methods in Tab API

## Events API
The Events API exposes the Key, Mouse and Wheel events. The properties like mousePress, mouseDoubleClick, keyPress, etc are added to QmlPluginInterface class which on set to a JavaScript function will register the plugin for that event & will call the function with proper arguments (containing event & object on which the event is triggered) when the event is triggered.

## WebPage methods in Tabs API
Implementing acceptNavigationRequest for QML Plugins requires to expose some methods of WebPage class to QML. Now since the standard WebExtensions API doesnt differentiate WebView/WebPage from Tabs API - so the required methods are added to QmlTab class (similar to the WebExtensions Tabs API).

## I18n API
The I18n API exposes the methods i18n and i18np to the QML Plugins and uses gettext C API (similar to Python plugins, unlike C++ plugins). Since this uses libintl.h, it will probably not work under windows unless there is some way to make it available with MSVC. Also this API took most of my time, as I misunderstood <q>gettext similar to python extensions</q> as exposing the gettext module of python to QML.
