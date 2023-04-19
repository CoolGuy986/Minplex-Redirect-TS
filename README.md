<!DOCTYPE html>

# Minplex Redirect Service | TypeScript Bookmark

<body> <!-- ???? Why Red? -->
  <div align="center">
    <a href = "https://www.mineplex.com"> 
    <img src="https://www.mineplex.com/assets/www-mp/img/footer/footer_fulllogo.png" alt="Minplex Logo"/>
    </a>
    
  </div>

  <div align="center">
    <a rel="license" href="https://creativecommons.org/publicdomain/zero/1.0/">
      <img width=150px alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png" />
    </a>
  </div>
  
  <div align="right">
      <a href="https://github.com/CoolGuy986/Minplex-Redirect-TS/actions/workflows/build.yml">
        <img src="https://github.com/CoolGuy986/Minplex-Redirect-TS/actions/workflows/build.yml/badge.svg" alt="Build Status"/>
      </a>
  </div>  
  
  <div>
    <details>
      <summary>
        Click To Show Bookmark Ready Code!
      </summary>
```

      javascript:(function()%7B"use strict"%3Bconst Site %3D document.location.href%3Bconst API %3D 'https%3A%2F%2Fwww.mineplex.com%2Fredirect%2F%3Fto%3D'%3Bconst BotaEncoded %3D API %2B '%2527' %2B btoa(Site) %2B '%2527'%3Bconst Errors %3D %7B%5B1%5D%3A "DOMException%3A HTTP sites are not supported please see the developer console for the link!"%2C%5B2%5D%3A "DOMException%3A Could not write to clipboard. Please allow clipboard access%2C or try another web browser."%2C%5B3%5D%3A "DOMException%3A Please Return To The Document And Click Anywhere%2C Before A Security Error Happens."%2C%5B4%5D%3A "Yay%2C Successfuly Copied!"%7D%3Basync function WriteToClipboard(Url) %7Bif (document.location.protocol %3D%3D 'http%3A')return alert(Errors%5B1%5D %2B %60%5Cn%24%7BUrl%7D%60)%3Bconst Results %3D new Promise((resolve%2C reject) %3D> %7Basync function Clicked() %7Btry %7Bawait navigator.clipboard.writeText(Url)%3B%7Dcatch (err) %7Balert(Errors%5B2%5D)%3Breject(false)%3B%7D%3Bdocument.removeEventListener('click'%2C Clicked)%3Bresolve(true)%3B%7D%3Bdocument.addEventListener('click'%2C Clicked)%3Balert(Errors%5B3%5D)%3Bconsole.warn(Errors%5B3%5D)%3B%7D)%3Bif (await Results %3D%3D true)alert(Errors%5B4%5D)%3Breturn await Results%3B%7D%3BWriteToClipboard(BotaEncoded)%3Bconsole.log(BotaEncoded)%7D)()
<!-- Stop Code Block Here -->
      
  </details>
  </div>
</body>
<footer>
<img src="https://www.mineplex.com/assets/www-mp/img/header/parallaxheader_layer0.jpg"/>
</footer>
<!-- Last Updated 4/18/2023 -->
