function Dialog({
    head = "对话框",
    content = "对话框的内容",
    footer = ["确定", "取消"],
    showCloseIcon = true
}) {
    this.head = head;
    this.content = content;
    this.footer = footer;
    this.showCloseIcon = showCloseIcon;
    this.init();
}
Dialog.prototype = {
    init() {
        this.creatInnerHtml();
        this.close();
    },
    creatInnerHtml() {
        let wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        wrapper.innerHTML =
            `<div class="dialog-main">
            <div class="head">
                <span>${this.head}</span>
                <span class="close-icon">
                ${this.showCloseIcon ? "&times" : ""}</span>
            </div>
            <div class="content">${this.content}</div>
            <div class="footer">${this.createBtn()}</div>
        </div>
        <div class="masker"></div>
        `
        document.body.appendChild(wrapper);
        let link = document.createElement("link");
        link.className = "appendLink";
        link.href = "./dialog.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    },
    createBtn() {
        const btnClassName = ['confirm', 'cancel'];
        return this.footer.map((item, index) => `<button class=${btnClassName[index]}>${item}</button>`).join("");
    },
    close() {
        document.body.onclick = function(e) {
            let closeContent = e.target;
            if (closeContent.className != "close-icon" && closeContent.className != "cancel") {
                return;
            };
            document.body.removeChild(document.querySelector(".wrapper"));
            document.head.removeChild(document.querySelector(".appendLink"));
        }
    },


}
Dialog.prototype.constructor = Dialog;