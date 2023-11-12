---
title: Fifth week of coding phase, GSoC'18
date: 2018-06-17
tags:
    - GSoC
    - Falkon
    - KDE
archived: y
description: This includes developing GUI for QML plugins. Two new APIs are introduced for this - BrowserAction API and SideBar API
---

<style>
img {
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    height: auto;
    display: block;
}
</style>
The week was totally involved in developing the **GUI** for QML Plugins. The follwoing APIs are developed:

- BrowserAction API: to add a GUI popup button to navigation tool bar and status bar
- SideBar API: to add a side bar widget to the browser

Below are the screeshots of the [Hello QML plugin](https://cgit.kde.org/falkon.git/tree/src/scripts/helloqml?h=anmolgautam) from my working [branch](https://cgit.kde.org/falkon.git/log/?h=anmolgautam)
## BrowserAction Button
Browser Action Button can be added to either Navigation Tool Bar or Status Bar or both.
![Browser_Action_Button](browser_action_button.png)

## BrowserAction Popup
The popup for Browser Action Button is in form of [QML Window](http://doc.qt.io/qt-5/qml-qtquick-window-window.html). This part took much time to develop because:

- To show the GUI, QQuickWidget (QWidget) or QQucikWindow (QWindow) can be used.
- Now popup property is a QQmlComponent thus the source Url is not known. Also QQuickWidget uses url - thus only solution left is to use QQuickWindow (by casting object created using QQmlComponent::create)
- Now to show popup the Qt::Popup flag is needed for QQuickWindow.

Everything is fine upto this until I found that this didn't worked. My Mentor (David Rosca) explained that this is because the QWindow is not grabing mouse and keyboard events - which means that the window is not activated - so I added QWindow::requestActivate and It works like a charm!
![Browser_Action_Popup](browser_action_popup.png)

## SideBar Menu
![SideBar_Menu](sidebar_menu.png)

## SideBar
Again SideBar menu is a QQuickWindow which is embeded into the browser using QWidget::createWindowContainer.
![SideBar](sidebar.png)

<hr/>
Again, a great thanks to my mentor David Rosca to help me in developing the APIs for GUI.

Happy Fathers Day!

