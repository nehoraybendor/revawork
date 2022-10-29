import {declareEvents} from "./eventsViews.js"
import {lightboxInit} from "./lightbox.js"

const init = () => {
declareEvents();
lightboxInit();
}

init();