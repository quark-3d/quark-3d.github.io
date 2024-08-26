
var VIDEO_ASPECT_RATIO = 4.0 / 3.;

var textStrings = [
    "<em>Quark+</em>",
    "<em>Quark</em>",
    "<em>ENeRF</em>",
    "<em>SIMPLI</em>",
    "<em>GPNR</em>",
    "<em>Quark+ (depth)</em>",
    "<em>Quark (depth)</em>",
];

$("#tools-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_trex_idx = 0;
    current_tools_idx = 0;
    current_welder_idx = 0;

    trexVideo = document.getElementById('trex-video');
    toolsVideo = document.getElementById('tools-video');
    welderVideo = document.getElementById('welder-video');

    trexText = document.getElementById('trex-text');
    toolsText = document.getElementById('tools-text');
    welderText = document.getElementById('welder-text');

    trexThumbnails = [
        document.getElementById('trex_quarkHQ'),
        document.getElementById('trex_quark'),
        document.getElementById('trex_enerf'),
        document.getElementById('trex_simpli'),
        document.getElementById('trex_gpnr'),
        document.getElementById('trex_quarkHQ_depth'),
        document.getElementById('trex_quark_depth'),
      ];
      for (var i = 0; i < trexThumbnails.length; i++) {
        trexThumbnails[i].addEventListener('click', change_trex_index.bind(this, i));
      }
      change_trex_index(current_trex_idx);

    toolsThumbnails = [
        document.getElementById('tools_quarkHQ'),
        document.getElementById('tools_quark'),
        document.getElementById('tools_enerf'),
        document.getElementById('tools_simpli'),
        document.getElementById('tools_gpnr'),
        document.getElementById('tools_quark_depth'),
        document.getElementById('tools_quarkHQ_depth'),
      ];
      for (var i = 0; i < toolsThumbnails.length; i++) {
        toolsThumbnails[i].addEventListener('click', change_tools_index.bind(this, i));
      }
      change_tools_index(current_tools_idx);


      welderThumbnails = [
        document.getElementById('welder_quarkHQ'),
        document.getElementById('welder_quark'),
        document.getElementById('welder_enerf'),
        document.getElementById('welder_simpli'),
        document.getElementById('welder_gpnr'),
        document.getElementById('welder_quarkHQ_depth'),
        document.getElementById('welder_quark_depth'),
      ];
      for (var i = 0; i < welderThumbnails.length; i++) {
        welderThumbnails[i].addEventListener('click', change_welder_index.bind(this, i));
      }
      change_welder_index(current_welder_idx);

  });
  
function change_trex_index (idx) {
    trexThumbnails[idx].classList.add("active-btn");
    if (current_trex_idx != idx) {
        trexThumbnails[current_trex_idx].classList.remove("active-btn");
    }
    current_trex_idx = idx;
    trexText.innerHTML = textStrings[idx];
    trexVideo.src = "results/video_results/" + trexThumbnails[idx].id + ".mp4";
    trexVideo.load();
}

function change_tools_index (idx) {
    toolsThumbnails[idx].classList.add("active-btn");
    if (current_tools_idx != idx) {
        toolsThumbnails[current_tools_idx].classList.remove("active-btn");
    }
    current_tools_idx = idx;
    toolsText.innerHTML = textStrings[idx];
    toolsVideo.src = "results/video_results/" + toolsThumbnails[idx].id + ".mp4";
    toolsVideo.load();
}

function change_welder_index (idx) {
    welderThumbnails[idx].classList.add("active-btn");
    if (current_welder_idx != idx) {
        welderThumbnails[current_welder_idx].classList.remove("active-btn");
    }
    current_welder_idx = idx;
    welderText.innerHTML = textStrings[idx];
    welderVideo.src = "results/video_results/" + welderThumbnails[idx].id + ".mp4";
    welderVideo.load();
}
