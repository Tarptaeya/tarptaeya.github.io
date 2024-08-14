I am very happy that the third phase of coding phase has begun. The following work is done in eighth & ninth week:

- UserScript API
- Ability to register external QtObject
- ExtensionScheme API

## UserScript API
The API to interact with browser user-scripts. This will enable the plugin to create, register, remove, and get all the user-scripts loaded in the browser. Also the scripts registered by it will automatically gets unregistered when the plugin unloads.

## Ability to register external QtObject
Since the UserScript API is developed, so the next step was to develop a channel between qml-plugin and webengine. The ExternalJsObject type will enable a QtObject to register as external js object as Falkon.ExternalJsObject.registerExtraObject ({id, object}) and Falkon.ExternalJsObject.unregisterExtraObject({object}) to unregister the object.

## ExtensionScheme API
Now as both UserScript and ExternalJsObject APIs are developed, the next step as suggested by my mentor was to implement an **extension://** page for qml-plugins.

This time, unfortunately I am yet to add the documentation & tests of the following APIs, but I will complete it soon.

Happy Monsoon :-)
