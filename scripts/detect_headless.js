const HEADLESS  = 1;
const HEADFUL   = 0;
const UNDEFINED = -1;

/* This is a generic function that verify if the browswer is headless or not
 * @param name (string): name of the test (same as the id name for the row corresponding)
 *                         to the test in HTML)
 * @param testFunction (function): function that checks if the browser is headless or not
 *
 * OBS: the test function return 1 if it's headless, 0 if it's normal, or -1 if it's undefined
 *      and every test function calls a write result function to assign a brief description
 *      of the result
 */
async function testBrowser(name, testFunction) {
  const row         = document.getElementById(name);
  const resultBlock = document.getElementById(`${name}-result`);

  result = await testFunction(resultBlock);
  if (result == HEADLESS)
    row.classList.add("headless");
  else if (result == HEADFUL)
    row.classList.add("headful");
  else
    row.classList.add("undefined");
}

function writeToBlock(block, text) {
  block.innerHTML = text;
  generateComment(block.id, text);
}

// Test for user agent
function testUserAgent(resultBlock) {
  let agent = navigator.userAgent;

  writeToBlock(resultBlock, agent);
  return /headless/i.test(agent);
}

// Test for app version (almost equal to user agent)
function testAppVersion(resultBlock) {
  let appVersion = navigator.appVersion;

  writeToBlock(resultBlock, appVersion);
  return /headless/i.test(appVersion);
}

// Test for plugins
function testPlugins(resultBlock) {
  let length = navigator.plugins.length;

  writeToBlock(resultBlock, `Detected ${length} plugins`);
  return length === 0 ? UNDEFINED : HEADFUL;
}

// Tests for plugins prototype
function testPluginsPrototype(resultBlock) {
  let correctPrototypes = PluginArray.prototype === navigator.plugins.__proto__;
  if (navigator.plugins.length > 0)
    correctPrototypes &= Plugin.prototype === navigator.plugins[0].__proto__;

  writePluginsPrototypeResult(resultBlock, correctPrototypes);
  return correctPrototypes ? HEADFUL : HEADLESS;
}

function writePluginsPrototypeResult(resultBlock, correctPrototypes) {
  if (correctPrototypes)
    writeToBlock(resultBlock, `PluginArray and Plugin prototype are consistent`);
  else
    writeToBlock(resultBlock, `PluginArray or Plugin prototype aren't consistent`);
}

// Test for mime type
function testMime(resultBlock) {
  let length = navigator.mimeTypes.length;

  writeToBlock(resultBlock, `Detected ${length} mime types`);
  return length === 0 ? UNDEFINED : HEADFUL;
}

// Tests for mime types prototype
function testMimePrototype(resultBlock) {
  let correctPrototypes = MimeTypeArray.prototype === navigator.mimeTypes.__proto__;
  if (navigator.mimeTypes.length > 0)
    correctPrototypes &= MimeType.prototype === navigator.mimeTypes[0].__proto__;

  writeMimePrototypeResult(resultBlock, correctPrototypes);
  return correctPrototypes ? HEADFUL : HEADLESS;
}

function writeMimePrototypeResult(resultBlock, correctPrototypes) {
  if (correctPrototypes)
    writeToBlock(resultBlock, `MimeTypeArray and MimeType prototype are consistent`);
  else
    writeToBlock(resultBlock, `MimeTypeArray or MimeType prototype aren't consistent`);
}


// Test for languages
function testLanguages(resultBlock) {
  let language        = navigator.language;
  // FIX for IE 11 where navigator.languages is undefined
  let languagesLength = navigator.languages ? navigator.languages.length : 0;

  writeToBlock(resultBlock, `Detected ${languagesLength} languages and using ${language}`);
  if (!language || languagesLength === 0)
    return HEADLESS;
  return HEADFUL;
 }

// Test for webdriver (headless browser has this flag true)
function testWebdriver(resultBlock) {
  let webdriver = navigator.webdriver;

  webdriverWriteResult(resultBlock, webdriver);
  return webdriver ? HEADLESS : HEADFUL;
}

function webdriverWriteResult(resultBlock, webdriver) {
  if (webdriver)
    writeToBlock(resultBlock, "Webdriver present");
  else
    writeToBlock(resultBlock, "Missing webdriver");
}

// Test for time elapsed after alert(). If it's closed too fast (< 30ms), it means
// the browser is headless
function testTimeElapse(resultBlock) {
  let start = Date.now();

  alert("Press OK");

  let elapse = Date.now() - start;
  timeElapseWriteResult(resultBlock, elapse);
  return elapse < 30;
}

function timeElapseWriteResult(resultBlock, elapse) {
  let signal = elapse < 30 ? "<": ">";

  writeToBlock(resultBlock, `Time elapsed to close alert: ${elapse} (${signal} 30)`);
}

// Test for chrome element (especific for google chrome browser)
function testChrome(resultBlock) {
  let chrome = window.chrome;

  chromeWriteResult(resultBlock, chrome);
  return chrome ? HEADFUL : UNDEFINED;
}

function chromeWriteResult(resultBlock, chrome) {
  if (chrome)
    writeToBlock(resultBlock, "Chrome element present");
  else
    writeToBlock(resultBlock, "Chrome element not present");
}

// Test for permission
async function testPermission(resultBlock) {
  let permissionStatus, notificationPermission;

  if (!navigator.permissions) {
    permissionWriteResult(resultBlock, permissionStatus, notificationPermission);
    return UNDEFINED;
  }
  permissionStatus       = await navigator.permissions.query({ name: "notifications" });
  notificationPermission = Notification.permission;
  permissionWriteResult(resultBlock, permissionStatus, notificationPermission);

  if (notificationPermission === "denied" && permissionStatus.state === "prompt")
    return HEADLESS;
  return HEADFUL;
}

function permissionWriteResult(resultBlock, permissionStatus, notificationPermission) {
  if (permissionStatus && notificationPermission) {
    writeToBlock(resultBlock, `Permission stauts is "${permissionStatus.state}" and notification
                              permission is "${notificationPermission}"`);
  } else {
    writeToBlock(resultBlock, "Object navigator.permissions is undefined");
  }
}

// Test for devtools protocol
function testDevtool(resultBlock) {
  const any = /./;
  let count = 0;
  let oldToString = any.toString;

  any.toString = function() {
    count++;
    return "any";
  }

  console.debug(any);
  let usingDevTools = count > 1;
  devtoolWriteResult(resultBlock, usingDevTools);
  any.toString = oldToString;
  return usingDevTools ? UNDEFINED : HEADFUL;
}

function devtoolWriteResult(resultBlock, usingDevTools) {
  if (usingDevTools)
    writeToBlock(resultBlock, "Using devtools protocol");
  else
    writeToBlock(resultBlock, "Not using devtools protocol");
}

// Test for broken image
function testImage(resultBlock) {
  var body  = document.getElementById("image-result");
  var image = document.createElement("img");

  image.src = "fake_image.png";
  body.appendChild(image);

  image.onerror = function(){
    resultBlock.parentElement.classList.remove("undefined");
    if(image.width === 0 && image.height === 0)
        resultBlock.parentElement.classList.add("headless");
    else
        resultBlock.parentElement.classList.add("headful");
    writeToBlock(resultBlock, `Broken image has width ${image.width} and height ${image.height}`);

  }
}

// Test for outerHeight and outerWidth
function testOuter(resultBlock) {
  let outerHeight = window.outerHeight;
  let outerWidth  = window.outerWidth;

  writeToBlock(resultBlock, `Outerheight: ${outerHeight} and outerwidth: ${outerWidth}`);
  return (outerHeight === 0 && outerWidth === 0) ? HEADLESS : HEADFUL;
}

// Test for connection-rtt
function testConnectionRtt(resultBlock) {
  let connection    = navigator.connection;
  let connectionRtt = connection ? connection.rtt : undefined;

  connectionRttWriteResult(resultBlock, connectionRtt);
  if (connectionRtt === undefined) {
    return UNDEFINED;
  } else {
    return connectionRtt === 0 ? HEADLESS : HEADFUL;
  }
}

function connectionRttWriteResult(resultBlock, connectionRtt) {
  if (connectionRtt === undefined)
    writeToBlock(resultBlock, "Connection-rtt not defined");
  else
    writeToBlock(resultBlock, `Connection-rtt: ${connectionRtt}`);
}

// Test for mouse event (we're going to analyze attributes movementX and movementY)
function testMouseMove(resultBlock) {
  let zeroMovement = true;
  let mouseEventCounter = 0;

  // set mousemove listener to body
  document.getElementsByTagName("body")[0].addEventListener("mousemove", mouseEvent);

  writeToBlock(resultBlock, "Move your mouse");

  function mouseEvent(event) {
    zeroMovement = zeroMovement && (event.movementX === 0 && event.movementY === 0);

    // Analyze 50 mouse events until give result
    if (mouseEventCounter > 50) {
      document.getElementsByTagName("body")[0].removeEventListener("mousemove", mouseEvent);
      mouseMoveWriteResult(resultBlock, zeroMovement);

      resultBlock.parentElement.classList.remove("undefined");
      if (zeroMovement)
        resultBlock.parentElement.classList.add("headless");
      else
        resultBlock.parentElement.classList.add("headful");
    }

    mouseEventCounter++;
  }
}

function testFonts(resultBlock) {
  /**
   * JavaScript code to detect available availability of a
   * particular font in a browser using JavaScript and CSS.
   *
   * Author : Lalit Patel
   * Website: http://www.lalit.org/lab/javascript-css-font-detect/
   * License: Apache Software License 2.0
   *          http://www.apache.org/licenses/LICENSE-2.0
   * Version: 0.15 (21 Sep 2009)
   *          Changed comparision font to default from sans-default-default,
   *          as in FF3.0 font of child element didn't fallback
   *          to parent element if the font is missing.
   * Version: 0.2 (04 Mar 2012)
   *          Comparing font against all the 3 generic font families ie,
   *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
   *          then that font is 100% not available in the system
   * Version: 0.3 (24 Mar 2012)
   *          Replaced sans with serif in the list of baseFonts
   */

  /**
   * Usage: d = new Detector();
   *        d.detect('font name');
   */
  var Detector = function() {
  // a font will be compared against all the three default fonts.
  // and if it doesn't match all 3 then that font is not available.
  var baseFonts = ['monospace', 'sans-serif', 'serif'];

  //we use m or w because these two characters take up the maximum width.
  // And we use a LLi so that the same matching fonts can get separated
  var testString = "mmmmmmmmmmlli";

  //we test using 72px font size, we may use any size. I guess larger the better.
  var testSize = '72px';

  var h = document.getElementsByTagName("body")[0];

  // create a SPAN in the document to get the width of the text we use to test
  var s = document.createElement("span");
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  var defaultWidth = {};
  var defaultHeight = {};
  for (var index in baseFonts) {
      //get the default width for the three base fonts
      s.style.fontFamily = baseFonts[index];
      h.appendChild(s);
      defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
      defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
      h.removeChild(s);
  }

  function detect(font) {
      var detected = false;
      for (var index in baseFonts) {
          s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
          h.appendChild(s);
          var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
          h.removeChild(s);
          detected = detected || matched;
      }
      return detected;
  }

  this.detect = detect;
};
  var fontList = [
    // This is android-specific font from "Roboto" family
    'sans-serif-thin',
    'ARNO PRO',
    'Agency FB',
    'Arabic Typesetting',
    'Arial Unicode MS',
    'AvantGarde Bk BT',
    'BankGothic Md BT',
    'Batang',
    'Bitstream Vera Sans Mono',
    'Calibri',
    'Century',
    'Century Gothic',
    'Clarendon',
    'EUROSTILE',
    'Franklin Gothic',
    'Futura Bk BT',
    'Futura Md BT',
    'GOTHAM',
    'Gill Sans',
    'HELV',
    'Haettenschweiler',
    'Helvetica Neue',
    'Humanst521 BT',
    'Leelawadee',
    'Letter Gothic',
    'Levenim MT',
    'Lucida Bright',
    'Lucida Sans',
    'Menlo',
    'MS Mincho',
    'MS Outlook',
    'MS Reference Specialty',
    'MS UI Gothic',
    'MT Extra',
    'MYRIAD PRO',
    'Marlett',
    'Meiryo UI',
    'Microsoft Uighur',
    'Minion Pro',
    'Monotype Corsiva',
    'PMingLiU',
    'Pristina',
    'SCRIPTINA',
    'Segoe UI Light',
    'Serifa',
    'SimHei',
    'Small Fonts',
    'Staccato222 BT',
    'TRAJAN PRO',
    'Univers CE 55 Medium',
    'Vrinda',
    'ZWAdobeF',
  ];
  var detective = new Detector();
  //for (const font of fontList.filter(p => detective.detect(p) === true)) { console.log(''+font); }
  var matchedFonts = [];
  for(var i = 0; i < fontList.length; i++) {
    if(detective.detect(fontList[i])) {
      matchedFonts.push(fontList[i]);
    }
  }
  writeToBlock(resultBlock, `Detected fonts: ${matchedFonts.join(', ')}`);
  return HEADFUL;
}




function mouseMoveWriteResult(resultBlock, zeroMovement) {
  if (zeroMovement)
    writeToBlock(resultBlock, "MovementX and movementY are 0 in every mouse event");
  else
    writeToBlock(resultBlock, "MovementX and movementY vary in mouse events");
}

/*
 *  Here is where we execute all the tests specified above
 */
const tests = [
  { name: "User Agent",        id: "user-agent",        testFunction: testUserAgent        },
  { name: "App Version",       id: "app-version",       testFunction: testAppVersion       },
  { name: "Plugins",           id: "plugins",           testFunction: testPlugins          },
  { name: "Plugins Prototype", id: "plugins-prototype", testFunction: testPluginsPrototype },
  { name: "Mime",              id: "mime",              testFunction: testMime             },
  { name: "Mime Prototype",    id: "mime-prototype",    testFunction: testMimePrototype    },
  { name: "Languages",         id: "languages",         testFunction: testLanguages        },
  { name: "Webdriver",         id: "webdriver",         testFunction: testWebdriver        },
  //{ name: "Time Elapse",       id: "time-elapse",       testFunction: testTimeElapse       },
  { name: "Chrome",            id: "chrome-element",    testFunction: testChrome           },
  { name: "Permission",        id: "permission",        testFunction: testPermission       },
  { name: "Devtool Protocol",  id: "devtool",           testFunction: testDevtool          },
  { name: "Broken Image",      id: "image",             testFunction: testImage            },
  { name: "Outer dimensions",  id: "outer",             testFunction: testOuter            },
  { name: "Connection Rtt",    id: "connection-rtt",    testFunction: testConnectionRtt     },
  { name: "Mouse Move",        id: "mouse-move",        testFunction: testMouseMove        },
  { name: "Find Fonts",        id: "find-fonts",        testFunction: testFonts        },
];

tests.forEach(test => {
  generateTableRow(test.name, test.id);
  testBrowser(test.id, test.testFunction, test.resultFunction);
});


async function runTestsAndCollectResults(testsToSkip = []) {
  let overallResult = [];
  throwawayBlock = document.createElement("div").appendChild(document.createElement("div"));
  for (let i = 0; i < tests.length; i++) {
    if (testsToSkip.includes(tests[i].id)) {
      console.log('Skipping test:', tests[i].name);
      continue;
    }

    result = await tests[i].testFunction(throwawayBlock);
    
    let mappedResult;
    if (result == HEADLESS)
      mappedResult = "headless";
    else if (result == HEADFUL)
      mappedResult = "headful";
    else
      mappedResult = "unknown";

    overallResult.push({ name: tests[i].name, result: mappedResult });
  }
  return overallResult;
}
(async function() {
 const results = await runTestsAndCollectResults(['time-elapse']);
 console.log("results:", results);  
})();

function generateComment(test, result) {
  if (/.*-result/.test(test)) {
    let comment = document.createComment(`${test}: ${result}`);
    document.body.appendChild(comment);
  }
}

// Generate a row for each test
function generateTableRow(name, id) {
  let table = document.getElementsByTagName("table")[0];

  // Insert a test row and set its id
  let row = table.insertRow();
  row.id = id;

  // Insert the name and result cell to the row
  let nameBlock   = row.insertCell();
  let resultBlock = row.insertCell();
  writeToBlock(nameBlock, name);
  resultBlock.id = `${id}-result`;
}
