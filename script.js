/*window.onload = function() {
  currOption = document.getElementsByClassName("sidebar-list-option")[0];
}*/

/*window.onload = function() {
  document.getElementsByClassName("sidebar-list-option")[0].className = "sidebar-list-option row center active";
}*/

var vids = {
  'turn-vault' : {
    'url' : 'https://www.youtube.com/embed/oSRffLggYB4',
    'difficulty' : 4,
    'views' : 9847,
    'summary' : "In this vault, you turn as you drop down to hang from the ledge, so you can see what's below you before fall.",
    'tags' : ['turn', 'vault']
  }, 'safety-vault' : {
    'url' : 'https://www.youtube.com/embed/PveFI7Q4j_M',
    'difficulty' : 1,
    'views' : 7043,
    'summary' : "The safety vault is the most basic of vaulting maneuvers. Facing forward, you use your hands to pull yourself up and climb on the obstacle before jumping off. The roll is a basic move used to safely fall or drop from a higher height, in which the traceur's momentum is redirected forward rather than down. The impact is redistributed from the legs over the rest of the body. Head must be tucked down to prevent neck injuries, while rolling from shoulder to back.",
    'tags' : ['safety', 'vault', 'roll']
  }, 'speed-vault' : {
    'url' : 'https://www.youtube.com/embed/6e-LCFqX8wk',
    'difficulty' : 3,
    'views' : 9153,
    'summary' : "A one-handed vault in which you turn sideways, kicking your legs upward and and pivoting over the obstacle.",
    'tags' : ['speed', 'vault']
  }, 'precision-jumping' : {
    'url' : 'https://www.youtube.com/embed/sBR9X1Bbqeo',
    'difficulty' : 2,
    'views' : 7800,
    'summary' : "A jump performed between narrow ledges or beams. Must be balanced at all times on the balls of your feet. A good way for beginners to practice is to make jumps using practice beams placed on the ground, moving the beams farther and farther apart each time until you determine your distance limit.",
    'tags' : ['jump', 'precision']
  }, 'counter-balance' : {
    'url' : 'https://www.youtube.com/embed/bCZmayM1B6U',
    'difficulty' : 3,
    'views' : 3450,
    'summary' : "When you lose your balance landing a precision jump, twist your body to make it easier to right yourself.",
    'tags' : ['balance', 'weight', 'safety']
  }, 'wall-climb' : {
    'url' : 'https://www.youtube.com/embed/s2kREeiJgow',
    'difficulty' : 2,
    'views' : 6200,
    'summary' : "Stepping on the wall with the ball of one foot and using the force of friction to redirect your momentum upwards (and not away from the wall). Ends with the traceur catching the top of the ledge with both hands and pulling themselves up.",
    'tags' : ['climb', 'wall']
  }
}

function removeSearchText() {
  var input = document.getElementById("search-bar");
  if (input.value != "")
    input.focus();
  input.value = "";
}

function trigger(o, elem) {
  if (elem == "turn-vault") {
    document.getElementsByClassName("video-name")[0].innerHTML = "Turn Vault";
  } else if (elem == "safety-vault") {
    document.getElementsByClassName("video-name")[0].innerHTML = "Safety Vault/Roll";
  } else if (elem == "speed-vault") {
    document.getElementsByClassName("video-name")[0].innerHTML = "Speed Vault";
  } else if (elem == "precision-jumping") {
    document.getElementsByClassName("video-name")[0].innerHTML = "Precision Jumping";
  } else if (elem == "counter-balance") {
    document.getElementsByClassName("video-name")[0].innerHTML = "Counter Balance";
  } else if (elem == "wall-climb") {
    document.getElementsByClassName("video-name")[0].innerHTML = "Wall Climb";
  }

  document.getElementsByClassName("youtube-vid")[0].setAttribute("src", vids[elem].url);
  document.getElementsByClassName("view-total")[0].innerHTML = vids[elem].views + " views";
  document.getElementsByClassName("video-summary")[0].innerHTML = vids[elem].summary;

  var tags = document.getElementById("tags-list");
  tags.innerHTML = "";

  for (var i = 0; i < vids[elem].tags.length - 1; i++) {
    tags.innerHTML += vids[elem].tags[i] + ", ";
  }
  tags.innerHTML += vids[elem].tags[vids[elem].tags.length - 1];

  var diffCounters = document.getElementsByClassName("diff");

  function clearDifficulty() {
    for (var i = 0; i < diffCounters.length; i++) {
      diffCounters[i].style.backgroundColor = "#FFFFFF";
    }
  }

  function setDifficulty(elem) {
    var diff = vids[elem].difficulty;
    for (var i = 0; i < diff; i++) {
      diffCounters[i].style.backgroundColor = "#CC3300";
    }

    var ratingElem = document.getElementsByClassName("diff-rating")[0];

    if (diff == 1) {
      ratingElem.innerHTML = "[ Beginner ]";
    } else if (diff == 2) {
      ratingElem.innerHTML = "[ Novice ]";
    } else if (diff == 3) {
      ratingElem.innerHTML = "[ Intermediate ]";
    } else if (diff == 4) {
      ratingElem.innerHTML = "[ Advanced ]";
    } else if (diff == 5) {
      ratingElem.innerHTML = "[ Expert ]";
    }
  }

  function updateCurrOption() {
    var curr = document.getElementsByClassName("active")[0];
    curr.className = "sidebar-list-option row center";
    o.className = "sidebar-list-option row center active";
    /*currOption.className = "sidebar-list-option row center";
    currOption = o;
    currOption.className = "sidebar-list-option row center active";*/
  }

  clearDifficulty();
  setDifficulty(elem);
  updateCurrOption();
}
