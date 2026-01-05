import "./bootstrap";
import "preline";
import slug from "alpinejs-slug";
import sort from "@alpinejs/sort";

// import toast
import { showToast, registerToastListener } from "./toast";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import Sortable from "sortablejs";

Alpine.plugin(slug);
Alpine.plugin(sort);

window.EditorJS = EditorJS;
window.Header = Header;
window.List = List;
window.Quote = Quote;
window.Code = Code;
window.Embed = Embed;
window.ImageTool = ImageTool;
window.Sortable = Sortable;

window.showToast = showToast;
registerToastListener();

document.addEventListener("livewire:init", () => {
    document.addEventListener("alpine:init", () => {
        document.addEventListener("livewire:navigated", () => {
            window.HSStaticMethods.autoInit();
        });
    });
});
window.HSFileUpload;
