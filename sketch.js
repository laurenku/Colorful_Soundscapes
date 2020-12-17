let presencePU,
  presenceDB,
  presenceLB,
  presenceG,
  presenceY,
  presenceO,
  presencePI;
let reachPU, reachDB, reachLB, reachG, reachY, reachO, reachPI;
let swipePU, swipeDB, swipeLB, swipeG, swipeY, swipeO, swipePI;
let myVibes = [];

// global variables for Soli interactions + fade
let b = false;
let presCount = 0;
let reachCount = 0;
let volume = 0.5;
let i = 0;
let iPrime = 1;
let amt = 0.0;

function setup() {
  soundFormats("wav");

  presencePU = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Frain.wav?v=1602133144190"
  );
  presencePU.setVolume(volume);

  reachPU = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FthunderAmbiance.wav?v=1602131987974"
  );
  reachPU.setVolume(volume);

  swipePU = loadSound(
    "https://cdn.glitch.com/d97215d0-4785-4bb7-a3d2-472d948d2fc3%2Fthunder1.wav?v=1602468134997"
  );
  swipePU.setVolume(volume);

  myVibes.push(new vibe(color("blueviolet"), presencePU, reachPU, swipePU));

  presenceDB = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FsummerNight.wav?v=1602133192287"
  );
  presenceDB.setVolume(volume);

  reachDB = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Ffire.wav?v=1602132003247"
  );
  reachDB.setVolume(volume);

  swipeDB = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Fconversation.wav?v=1602133192882"
  );
  swipeDB.setVolume(volume);

  myVibes.push(new vibe(color("blue"), presenceDB, reachDB, swipeDB));

  presenceLB = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Focean.wav?v=1602133215822"
  );
  presenceLB.setVolume(volume);

  reachLB = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Fsplash2.wav?v=1602132033998"
  );
  reachLB.setVolume(volume);

  swipeLB = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Fseagulls.wav?v=1602132034259"
  );
  swipeLB.setVolume(volume);

  myVibes.push(new vibe(color("cyan"), presenceLB, reachLB, swipeLB));

  presenceG = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FrainforestShort.wav?v=1602132073883"
  );
  presenceG.setVolume(volume);

  reachG = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Fwind.wav?v=1602132083593"
  );
  reachG.setVolume(volume);

  swipeG = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Fwindchime.wav?v=1602132083227"
  );
  swipeG.setVolume(volume);

  myVibes.push(new vibe(color("lime"), presenceG, reachG, swipeG));

  presenceY = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FlibraryAmbiance.wav?v=1602134285122"
  );
  presenceY.setVolume(volume);

  reachY = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FpageTurn.wav?v=1602134528182"
  );
  reachY.setVolume(volume);

  swipeY = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FlibrarySteps.wav?v=1602133293434"
  );
  swipeY.setVolume(volume);

  myVibes.push(new vibe(color("yellow"), presenceY, reachY, swipeY));

  presenceO = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FpartyCrowd.wav?v=1602132123569"
  );
  presenceO.setVolume(volume);

  reachO = loadSound(
    "https://cdn.glitch.com/d97215d0-4785-4bb7-a3d2-472d948d2fc3%2FraveBeat.wav?v=1602468153184"
  );
  reachO.setVolume(volume);

  swipeO = loadSound(
    "https://cdn.glitch.com/d97215d0-4785-4bb7-a3d2-472d948d2fc3%2FbathroomMusic.wav?v=1602468126325"
  );
  swipeO.setVolume(volume);

  myVibes.push(new vibe(color("orangered"), presenceO, reachO, swipeO));

  presencePI = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2Fdriving.wav?v=1602132180630"
  );
  presencePI.setVolume(volume);

  reachPI = loadSound(
    "https://cdn.glitch.com/d97215d0-4785-4bb7-a3d2-472d948d2fc3%2Fcar2.wav?v=1602468148183"
  );
  reachPI.setVolume(volume);

  swipePI = loadSound(
    "https://cdn.glitch.com/7308d659-e481-4396-8775-5457c9843e06%2FthumpingBass.wav?v=1602132179753"
  );
  swipePI.setVolume(volume);

  myVibes.push(new vibe(color("magenta"), presencePI, reachPI, swipePI));

  createCanvas(window.innerWidth, window.innerHeight);

  // colorMode(HSB);
  noStroke();
  
  background(myVibes[i].color);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(myVibes[i].color);
}

function draw() {
  if (b) {
    fill(
      lerpColor(
        myVibes[i].color,
        myVibes[iPrime].color,
        smoothstep(0.3, 0.7, amt)
      )
    );

    rect(0, 0, windowWidth, windowHeight);

    amt += 0.01;
    if (amt >= 1) {
      myVibes[i].presence.stop();
      myVibes[i].reach.stop();
      myVibes[i].swipe.stop();
      reachCount = 0;
      
      
      amt = 0.0;
      b = false;
      i = iPrime;
      myVibes[i].presence.setVolume(volume);
      myVibes[i].reach.setVolume(volume);
      myVibes[i].swipe.setVolume(volume);
      myVibes[i].presence.loop();
    }
  }
}

// desktop
function keyPressed() {
  myVibes[i].presence.setVolume(volume);
  myVibes[i].reach.setVolume(volume);
  myVibes[i].swipe.setVolume(volume);

  // presence
  if (keyCode === ESCAPE) {
    myVibes[i].presence.loop();
  }

  // reach adds more ambiance
  if (keyCode === ENTER) {
    if (reachCount === 2) myVibes[i].reach.loop();

    reachCount++;
  }

  // swipe right to switch color
  if (keyCode === RIGHT_ARROW) {
    // rainbow mode
    iPrime = (i + 1) % myVibes.length;

    b = true;
  }

  // swipe left to add other sounds, use modulo
  if (keyCode === LEFT_ARROW) {
    myVibes[i].swipe.play();
  }

  // increase volume
  if (keyCode === UP_ARROW) {
    if (volume <= 0.9) {
      volume += 0.1;
    }
  }

  // decrease volume
  if (keyCode === DOWN_ARROW) {
    if (volume >= 0.1) volume -= 0.1;
  }
}

// phone
window.onSoliEvent = function(event) {
  myVibes[i].presence.setVolume(volume);
  myVibes[i].reach.setVolume(volume);
  myVibes[i].swipe.setVolume(volume);

  // presence
  if (event.type == "presence") {
    if (presCount == 0) myVibes[i].presence.loop();

    presCount++;
  }

  // reach adds more ambiance
  if (event.type == "reach") {
    if (reachCount === 2) myVibes[i].reach.loop();

    reachCount++;
  }

  // swipe left to switch color
  if (event.type == "swipe") {
    if (event.data.direction == "5") {

      // rainbow mode
      iPrime = (i + 1) % myVibes.length;

      b = true;
    }

    // swipe right to add other sounds, use modulo
    else if (event.data.direction == "1") {
      myVibes[i].swipe.play();
    }

    // increase volume
    else if (event.data.direction == "3") {
      if (volume <= 0.9) {
        volume += 0.1;
      }
    }

    // decrease volume
    else if (event.data.direction == "7") {
      if (volume >= 0.1) volume -= 0.1;
    }
  }

  if (event.type == "tap") {
  }
};

function smoothstep(edge0, edge1, x) {
  x = constrain((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  return x * x * (3 - 2 * x);
}


class vibe {
  constructor(color, presence, reach, swipe) {
    this.color = color;
    this.presence = presence;
    this.reach = reach;
    this.swipe = swipe;
  }
}

//leave this stuff here and don't worry about it. It's just here to make this code editor recognize p5 functions
/* global alpha, blue, brightness, color, green, hue, lerpColor, lightness, red, saturation, p5.Color, Setting, background, clear, colorMode, fill, noFill, noStroke, stroke, erase, noErase, arc, ellipse, circle, line, point, quad, rect, square, triangle, ellipseMode, noSmooth, rectMode, smooth, strokeCap, strokeJoin, strokeWeight, bezier, bezierDetail, bezierPoint, bezierTangent, curve, curveDetail, curveTightness, curvePoint, curveTangent, beginContour, beginShape, bezierVertex, curveVertex, endContour, endShape, quadraticVertex, vertex, plane, box, sphere, cylinder, cone, ellipsoid, torus, loadModel, model, HALF_PI, PI, QUARTER_PI, TAU, TWO_PI, DEGREES, RADIANS, print, frameCount, deltaTime, focused, cursor, frameRate, noCursor, displayWidth, displayHeight, windowWidth, windowHeight, windowResized, width, height, fullscreen, pixelDensity, displayDensity, getURL, getURLPath, getURLParams, preload, setup, draw, remove, disableFriendlyErrors, noLoop, loop, isLooping, push, pop, redraw, p5, DOM, p5.Element, select, selectAll, removeElements, changed, input, createDiv, createP, createSpan, createImg, createA, createSlider, createButton, createCheckbox, createSelect, createRadio, createColorPicker, createInput, createFileInput, createVideo, createAudio, createCapture, createElement, p5.MediaElement, p5.File, p5.Graphics, createCanvas, resizeCanvas, noCanvas, createGraphics, blendMode, drawingContext, setAttributes, console, applyMatrix, resetMatrix, rotate, rotateX, rotateY, rotateZ, scale, shearX, shearY, translate, LocalStorage, storeItem, getItem, clearStorage, removeItem, createStringDict, createNumberDict, p5.TypedDict, p5.NumberDict, append, arrayCopy, concat, reverse, shorten, shuffle, sort, splice, subset, float, int, str, boolean, byte, char, unchar, hex, unhex, join, match, matchAll, nf, nfc, nfp, nfs, split, splitTokens, trim, deviceOrientation, accelerationX, accelerationY, accelerationZ, pAccelerationX, pAccelerationY, pAccelerationZ, rotationX, rotationY, rotationZ, pRotationX, pRotationY, pRotationZ, turnAxis, setMoveThreshold, setShakeThreshold, deviceMoved, deviceTurned, deviceShaken, Keyboard, keyIsPressed, key, keyCode, keyPressed, keyReleased, keyTyped, keyIsDown, Mouse, movedX, movedY, mouseX, mouseY, pmouseX, pmouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed, mouseMoved, mouseDragged, mousePressed, mouseReleased, mouseClicked, doubleClicked, mouseWheel, requestPointerLock, exitPointerLock, touches, touchStarted, touchMoved, touchEnded, createImage, saveCanvas, saveFrames, p5.Image, loadImage, image, tint, noTint, imageMode, Pixels, pixels, blend, copy, filter, get, loadPixels, set, updatePixels, IO, loadJSON, loadStrings, loadTable, loadXML, loadBytes, httpGet, httpPost, httpDo, p5.XML, createWriter, p5.PrintWriter, save, saveJSON, saveStrings, saveTable, Table, p5.Table, p5.TableRow, day, hour, minute, millis, month, second, year, Math, abs, ceil, constrain, dist, exp, floor, lerp, log, mag, map, max, min, norm, pow, round, sq, sqrt, fract, Vector, createVector, p5.Vector, noise, noiseDetail, noiseSeed, randomSeed, random, randomGaussian, Trigonometry, acos, asin, atan, atan2, cos, sin, tan, degrees, radians, angleMode, textAlign, textLeading, textSize, textStyle, textWidth, textAscent, textDescent, loadFont, text, textFont, p5.Font, orbitControl, debugMode, noDebugMode, ambientLight, specularColor, directionalLight, pointLight, lights, lightFalloff, spotLight, noLights, Material, loadShader, createShader, shader, resetShader, normalMaterial, texture, textureMode, textureWrap, ambientMaterial, emissiveMaterial, specularMaterial, shininess, p5.Geometry, p5.Shader, camera, perspective, ortho, frustum, createCamera, p5.Camera, setCamera*/
