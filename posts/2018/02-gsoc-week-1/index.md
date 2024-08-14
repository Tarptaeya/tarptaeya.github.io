This week was mainly focused on three things

- Enable loading/unloading of QML plugins in Falkon
- Adding permission to existing plugin infrastructure for allowing plugin in incognito
- Developing QML Bookmarks API similar to WebExtension API

## Enable loading/unloading of QML plugins in Falkon
QML plugins will now be loaded into Falkon from the subdirectory qml in the standard plugin paths, similar to Python plugins. Also in metadata.desktop file for plugin, the main entry file (QML) can be specified so that the plugin named X can have the entry file Y.qml. 
## Adding permission to existing plugin infrastructure for allowing plugin in incognito
Plugins will now support permission to allow them in incognito mode. Also the information for plugins is moved from ini files to sql database.
<center>
<style>
img {
width: 80%;
height: auto;
}
</style>

![Falkon_Preference](falkon_preference.svg)

</center>

## Developing QML Bookmarks API similar to WebExtension API
The following table demonstrates the browser compatibility of WebExtension API for Falkon compared with other browsers.

|                   |Falkon   |Chrome   |Edge    |Mozilla  |
|-------------------|---------------------------------------------|----------------------------------------------|---------------------------------------------|----------------------------------------------|
|BookmarkTreeNode   |<span style='color: #00ff00'>&#10003;</span> |<span style='color: #00ff00'>&#10003;</span>  |<span style='color: #ff0000'>&#10060;</span> |<span style='color: #00ff00'>&#10003;</span>  |
|BookmarkTreeNodeType|<span style='color: #ff0000'>&#10060;*</span>|<span style='color: #ff0000'>&#10060;</span>  |<span style='color: #ff0000'>&#10060;</span> |<span style='color: #00ff00'>&#10003;</span>  |
|BookmarkTreeNodeUnmodifiable|<span style='color: #ff0000'>&#10060;*</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|CreateDetails|<span style='color: #ff0000'>&#10060;*</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|create|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|
|get|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|getChildren|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|getRecent|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|getSubTree|<span style='color: #ff0000'>&#10060;*</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|getTree|<span style='color: #ff0000'>&#10060;*</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|
|move|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|
|onChange|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|onChildrenReordered|<span style='color: #ff0000'>&#10060;*</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #ff0000'>&#10060;</span>|
|onCreated|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|onImportBegan|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #ff0000'>&#10060;</span>|
|onImportEnded|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #ff0000'>&#10060;</span>|
|onMoved|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|onRemoved|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|remove|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|search|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|
|update|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #00ff00'>&#10003;</span>|<span style='color: #ff0000'>&#10060;</span>|<span style='color: #00ff00'>&#10003;</span>|

To enable the support of API's marked with <span style='color: #ff0000'>&#10060;*</span>, the additional API includes:

- BookmarkTreeNode.type
- BookmarkTreeNode.parent
- Bookmarks.rootItem, Bookmarks.toolbarFolder, Bookmarks.menuFolder, Bookmarks.unsortedFolder
- Bookmarks.lastUsedFolder
- Bookmarks.isBookmarked

---

Currently I am, with a great help from my mentor David Rosca, working on developing autotests for the Bookmarks API.

Happy Summers :)
