---
title: Second week of coding phase, GSoC'18
date: 2018-05-28
tags:
    - GSoC
    - Falkon
    - KDE
archived: y
description: Topsites API, history API and cookies API are introduced
---

The week was totally involved in developing QML APIs similar to WebExtension APIs. The follwoing APIs are developed:

- TopSites API: The API to access the sites displayed in speed-dial.
- History API: The API to interact with the browser history.
- Cookies API: The API to interact with &amp; set cookies.

## Compatibility Tables

### TopSites
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-s6z2{text-align:center}
.tg .tg-031e{max-width:250px; min-width:250px}
.tg .tg-6agk{color:#34ff34;text-align:center;max-width:100px; min-width:100px}
.tg .tg-yjsh{color:#fe0000;text-align:center;max-width:100px; min-width:100px}
</style>
<table class="tg">
  <tr>
    <th class="tg-031e"></th>
    <th class="tg-s6z2">Falkon</th>
    <th class="tg-s6z2">Chrome</th>
    <th class="tg-s6z2">Edge</th>
    <th class="tg-s6z2">Mozilla</th>
  </tr>
  <tr>
    <td class="tg-031e">MostVisitedURL</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-yjsh">❌<br></td>
    <td class="tg-6agk">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">get</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-yjsh">❌<br></td>
    <td class="tg-6agk">✓</td>
  </tr>
</table>

### History
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-s6z2{text-align:center}
.tg .tg-6agk{color:#34ff34;text-align:center}
.tg .tg-yjsh{color:#fe0000;text-align:center}
.tg .tg-9ewa{color:#fe0000;text-align:center;vertical-align:top}
.tg .tg-asi5{color:#34ff34;text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-031e"></th>
    <th class="tg-s6z2">Falkon</th>
    <th class="tg-s6z2">Chrome</th>
    <th class="tg-s6z2">Edge</th>
    <th class="tg-s6z2">Mozilla</th>
  </tr>
  <tr>
    <td class="tg-031e">HistoryItem</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-yjsh">❌</td>
    <td class="tg-6agk">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">TransitionType</td>
    <td class="tg-yjsh">❌</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-yjsh">❌</td>
    <td class="tg-6agk">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">VisitItem</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">addUrl</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">deleteAll</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">deleteRange</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">deleteUrl</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">getVisits</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">onTitleChanged</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">onVisitRemoved</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">onVisited</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">search</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
</table>

### Cookies
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-s6z2{text-align:center}
.tg .tg-6agk{color:#34ff34;text-align:center}
.tg .tg-yjsh{color:#fe0000;text-align:center}
.tg .tg-9ewa{color:#fe0000;text-align:center;vertical-align:top}
.tg .tg-asi5{color:#34ff34;text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-031e"></th>
    <th class="tg-s6z2">Falkon</th>
    <th class="tg-s6z2">Chrome</th>
    <th class="tg-s6z2">Edge</th>
    <th class="tg-s6z2">Mozilla</th>
  </tr>
  <tr>
    <td class="tg-031e">Cookie</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">CookieStore</td>
    <td class="tg-yjsh">❌</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
    <td class="tg-6agk">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">OnChangedCause</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">get</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">getAll</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">getAllCookieStores</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">onChanged</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-9ewa">❌</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">remove</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
  </tr>
  <tr>
    <td class="tg-031e">set</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
    <td class="tg-asi5">✓</td>
  </tr>
</table>

<hr/>

Also, I am greatly thankful to my mentor David Rosca for always helping me. Now for this week we have decieded to work on Tabs API, but it would more similar to Falkon C++ API rather than WebExtension API.

Happy Summers!

