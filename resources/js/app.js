import "./bootstrap";
import "preline";
import slug from "alpinejs-slug";
import sort from "@alpinejs/sort";

// import toast
import { showToast, registerToastListener } from "./toast";

Alpine.plugin(slug);
Alpine.plugin(sort);

window.showToast = showToast;
registerToastListener();

document.addEventListener("livewire:init", () => {
    document.addEventListener("alpine:init", () => {
        document.addEventListener("livewire:navigated", () => {
            window.HSStaticMethods.autoInit();
        });
    });
});
